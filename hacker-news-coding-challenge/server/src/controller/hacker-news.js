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
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

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
    const { id } = req.query

    const story = await hackerNewsServices.getItemInfo(id) // Getting story information

    let idCommentsToFetch = structuredClone(story.kids) // The comments ID which we want to get information
    const comments = [] // List to save the information of that comments

    let levels = new Array(idCommentsToFetch.length).fill(0) // Level in the comment hierarchy (comments have kids and so on)

    for (let i = 0; i < idCommentsToFetch.length; i++) {
      const comment = await hackerNewsServices.getItemInfo(idCommentsToFetch[i])

      // Level in the comment hierarchy
      const currentLevel = levels[i]
      comment.level = currentLevel

      comments.push(comment)

      if (comment.kids) {
        // Level in the comment hierarchy
        levels = insertKids(i, new Array(comment.kids.length).fill(currentLevel + 1), levels)
        // Comments to be fetched
        idCommentsToFetch = insertKids(i, comment.kids, idCommentsToFetch)
      }
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
 * @param   {Number}              currPos Position to insert the list
 * @param  {Number[]}             listToInsert List to insert in the initial list of elements
 * @param  {Object[] | Number[]}  listToBeInserted List to be inserted the 'listToInsert'
 * @return {Object[] | Number[]}  List already modified
 */
const insertKids = (currPos, listToInsert, listToBeInserted) => {
  const finishIndexFirstSlice = currPos + 1
  const startIndexSecondSlice = finishIndexFirstSlice + listToInsert.length
  const finishIndexSecondSlice = listToBeInserted.length

  return [...listToBeInserted.slice(0, finishIndexFirstSlice), ...listToInsert, ...listToBeInserted.slice(startIndexSecondSlice, finishIndexSecondSlice)]
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
