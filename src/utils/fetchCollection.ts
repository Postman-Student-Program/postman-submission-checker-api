import axios from 'axios'

export const fetchCollection = async (
  collectionUrl: string
): Promise<PostmanCollection> => {
  const res = await axios.get(collectionUrl)
  const data = res.data
  return data
}
