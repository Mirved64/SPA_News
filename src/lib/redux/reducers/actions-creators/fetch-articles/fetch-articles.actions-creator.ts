import { createAsyncThunk } from '@reduxjs/toolkit'
import { DataResponse } from './fetch-articles.interfaces'
import { ACCESS_KEY, Article } from '@utils'

export const fetchArticles = createAsyncThunk<Article[], undefined, { rejectValue: string }>(
  'articles/fetchAll',
  (_, thunkAPI) =>
    fetch(
      `https://content.guardianapis.com/search?api-key=${ACCESS_KEY}&format=json&show-blocks=main`,
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
