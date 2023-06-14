const axios = require('axios')
require('dotenv').config()

/**
 * Get the top stories.
 * @return {Number[]}   List of ids of top stories.
 */
exports.getStories = async () => {
  const response = await axios.get(process.env.ENDPOINT_TOP_STORIES)
  const { data } = response
  return data
}

/**
 * Get the information from an item (comment, story).
 * @param  {Number} id Id of the item.
 * @return {Object}    Item information (title, by, time, kids...).
 */
exports.getItemInfo = async (id) => {
  const response = await axios.get(`${process.env.ENDPOINT_ITEM}${id}.json`)
  const { data } = response
  return data
}
