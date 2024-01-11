import { cookies } from 'next/headers'
import { Data } from './actions.interfaces'
import { ACCESS_KEY } from '@utils/constants'

export const fetchArticleData = async () => {
  const apiUrl = cookies().get('apiUrl')?.value
  const response = await fetch(
    `${apiUrl}?api-key=${ACCESS_KEY}&format=json&show-blocks=main,body`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    },
  )
  const data: Data = await response.json()
  if (!response.ok) throw new Error(data.response.message)
  return data.response.content
}
