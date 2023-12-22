import { createAsyncThunk } from '@reduxjs/toolkit'
import { DataResponse } from '@lib/redux/reducers/actions-creators/fetch-articles.interfaces'
import { Article } from '@utils'

export const fetchArticles = createAsyncThunk<Article[], undefined, { rejectValue: string }>(
  'article/fetchAll',
  (_, thunkAPI) =>
    fetch(
      `https://content.guardianapis.com/search?api-key=c6171105-65be-4626-8a29-82224eb010b1&format=json&show-blocks=main`,
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
