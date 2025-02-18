const express = require('express')
const router = express.Router()
const articleController = require('../controllers/articles')

router.get('/', articleController.getAllArticles)
router.get('/articles/:slug', articleController.getArticleBySlug)
router.post('/articles/:slug/comment', articleController.addComment)

module.exports = router