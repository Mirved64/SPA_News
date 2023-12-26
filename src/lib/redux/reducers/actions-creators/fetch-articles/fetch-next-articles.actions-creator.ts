import { createAsyncThunk } from '@reduxjs/toolkit'
import { DataResponse } from './fetch-articles.interfaces'
import { ACCESS_KEY, Article } from '@utils'

export const fetchNextArticles = createAsyncThunk<Article[], string, { rejectValue: string }>(
  'nextArticles/fetchNextArticles',
  (lastArticleId, thunkAPI) =>
    fetch(
      `https://content.guardianapis.com/content/${lastArticleId}/next?api-key=${ACCESS_KEY}&format=json&&show-blocks=main&page-size=9`,
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
