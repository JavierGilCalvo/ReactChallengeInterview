const hackerNewsServices = require('../services/hacker-news.js')

/**
 * Get the top stories
 * @param  {Request} req Request
 * @param  {Response} res Response
 * @var  {Number} page Current page of top stories
 * @var  {Number} limit Number of stories to get
 */
exports.getTopStories = async (req, res) => {
  try {
    const { page, limit } = req.params

    const topStoriesIds = await hackerNewsServices.getStories()

    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const ids = topStoriesIds.slice(startIndex, endIndex)

    const stories = await getStoriesList(ids)

    res.status(201).send(stories)
  } catch (err) {
    console.log('Error while fetching the top stories. Terminating process...')
    console.error(err)
    res.status(400).send(err)
    process.exit(1)
  }
}

/**
 * Get the complete information (comments and kids of comments) of a story
 * @param  {Request} req Request
 * @param  {Response} res Response
 * @var {Number} id Id of the story it is wanted to be fetched the information from
 */
exports.getStoryInfo = async (req, res) => {
  try {
    const { id } = req.params

    const story = hackerNewsServices.getItemInfo(id)

    const comments = []
    for (const commentId in story.kids) {
      const comment = await getCommentChildren(story.kids[commentId])
      comments.push(comment)
    }
    story.comments = comments

    res.status(201).send(story)
  } catch (err) {
    console.log('Error while fetching story information. Terminating process...')
    console.error(err)
    res.status(400).send(err)
    process.exit(1)
  }
}

/**
 * Get the stories information from a list of ids
 * @param  {Number[]} ids Ids of stories
 * @return {Object[]}       List of stories with their information (title, by, time, kids...)
 */
const getStoriesList = async (ids) => {
  const stories = []
  for (const id of ids) {
    const story = await hackerNewsServices.getItemInfo(id)
    stories.push(story)
  }
  return stories
}

/**
 * Get the children comments of a given comment
 * @param  {Number} commentId Id of a comment
 * @return {Object}           Comment of id = commentId with its information (text, by, time, kids...)
 */
const getCommentChildren = async (commentId) => {
  const comment = await hackerNewsServices.getItemInfo(commentId)
  if (comment.kids) {
    comment.children = []
    for (const commentChildId in comment.kids) {
      const commentChildInfo = await getCommentChildren(comment.kids[commentChildId])
      comment.children.push(commentChildInfo)
    }
  }
  return comment
}
