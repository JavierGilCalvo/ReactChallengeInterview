const router = require('express').Router()
const hackerNewsController = require('../controller/hacker-news.js')

router.get('/topstories', hackerNewsController.getTopStories)

router.get('/story', hackerNewsController.getStoryInfo)

module.exports = router
