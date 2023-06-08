export const getTopStories = async (page: number, limit: number) => {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
  const data = await response.json()
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const ids = data.slice(startIndex, endIndex)
  const stories = await getStoriesList(ids)
  return stories
}

export const getItemInfo = async (id: number) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  return await response.json()
}

export const getStoryInfo = async (id: number) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
  const story = await response.json()
  const comments: any[] = []
  for (const commentId in story.kids) {
    const comment = await getCommentChildren(story.kids[commentId])
    comments.push(comment)
  }
  story.comments = comments
  return story
}

const getStoriesList = async (ids: number[]) => {
  const stories: any[] = []
  for (const id of ids) {
    const story = await getItemInfo(id)
    stories.push(story)
  }
  return stories
}

const getCommentChildren = async (commentId: number) => {
  const comment = await getItemInfo(commentId)
  if (comment.kids) {
    comment.children = []
    for (const commentChildId in comment.kids) {
      const commentChildInfo = await getCommentChildren(comment.kids[commentChildId])
      comment.children.push(commentChildInfo)
    }
  }
  return comment
}
