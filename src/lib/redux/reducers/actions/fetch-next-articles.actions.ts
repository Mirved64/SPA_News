import { createAsyncThunk } from '@reduxjs/toolkit'
import { DataResponse } from './data.interfaces'
import { ACCESS_KEY } from '@utils/constants'
import { Article, Query } from '@utils/interfaces'

export const fetchNextArticles = createAsyncThunk<Article[], Query, { rejectValue: string }>(
  'nextArticles/fetchNextArticles',
  async (query, thunkAPI) => {
    const response = await fetch(
      `https://content.guardianapis.com/content/${query.lastArticleId}/next?api-key=${ACCESS_KEY}&format=json&&show-blocks=main&order-by=${query.sortValue}&page-size=${query.perPageValue}`,
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
