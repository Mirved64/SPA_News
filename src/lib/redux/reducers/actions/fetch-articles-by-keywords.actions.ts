import { createAsyncThunk } from '@reduxjs/toolkit'
import { DataResponse } from './data.interfaces'
import { ACCESS_KEY } from '@utils/constants'
import { Article, Query } from '@utils/interfaces'

export const fetchArticlesByKeywords = createAsyncThunk<Article[], Query, { rejectValue: string }>(
  'articles/fetchByKeyWords',
  async (query, thunkAPI) => {
    const response = await fetch(
      `https://content.guardianapis.com/search?page=1&q=${query.keyWords}&api-key=${ACCESS_KEY}&format=json&show-blocks=main&order-by=${query.sortValue}&page-size=${query.perPageValue}`,
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      },
    )
    const data: DataResponse = await response.json()
    if (!response.ok) return thunkAPI.rejectWithValue(data.response.message)
    return data.response.results
  },
)
