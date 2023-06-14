import axios from 'axios'

export const getTopStories = async (page: number, limit: number) => {
  try {
    const response = await axios.get('/api/v1/topstories', {
      params: {
        page,
        limit
      }
    })
    const { data } = response
    return data
  } catch (err) {
    throw new Error(err)
  }
}

export const getStoryInfo = async (id: number) => {
  try {
    const response = await axios.get('/api/v1/story', {
      params: {
        id
      }
    })
    const { data } = response
    return data
  } catch (err) {
    throw new Error(err)
  }
}
