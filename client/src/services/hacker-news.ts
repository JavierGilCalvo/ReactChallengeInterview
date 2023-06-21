import axios from 'axios'

export const getTopStories = async (page: number, limit: number) => {
  try {
    const response = await axios.get('https://jacket-news.onrender.com/api/v1/topstories', {
      params: {
        page,
        limit
      }
    })
    const { data } = response
    return data
  } catch (err) {
    console.error(err)
  }
}

export const getStoryInfo = async (id: string) => {
  try {
    const response = await axios.get('https://jacket-news.onrender.com/api/v1/story', {
      params: {
        id
      }
    })
    const { data } = response
    return data
  } catch (err) {
    console.error(err)
  }
}
