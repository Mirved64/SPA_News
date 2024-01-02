import { createAsyncThunk } from '@reduxjs/toolkit'
import { DataResponse } from './fetch-articles.interfaces'
import { ACCESS_KEY } from '@utils/constants'
import { Article, Query } from '@utils/interfaces'

export const fetchNextArticlesByKeywords = createAsyncThunk<
  Article[],
  Query,
  { rejectValue: string }
>('nextArticles/fetchByKeyWords', (query, thunkAPI) =>
  fetch(
    `https://content.guardianapis.com/search?page=${query.pageNumber}&q=${query.keyWords}&api-key=${ACCESS_KEY}&format=json&show-blocks=main&order-by=${query.sortValue}`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    },
  )
    .then((response): Promise<DataResponse> => response.json())
    .then((data) => data.response.results)
    .catch((error) => thunkAPI.rejectWithValue(error.message)),
)
