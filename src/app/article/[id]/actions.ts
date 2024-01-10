import { cookies } from 'next/headers'
import { Data } from './actions.interfaces'
import { ACCESS_KEY } from '@utils/constants'

export const fetchArticleData = async () => {
  const apiUrl = cookies().get('apiUrl')?.value
  const response = await fetch(
    // 'https://content.guardianapis.com/fashion/2023/dec/26/blokecore-the-waste-land-and-maggie-smith-the-year-in-fashion?api-key=c6171105-65be-4626-8a29-82224eb010b1&format=json&show-blocks=main,body',
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
