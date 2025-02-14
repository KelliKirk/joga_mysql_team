const db = require('../utils/db')

const getAllArticles = (req, res) => {
    let sql = 'SELECT * FROM article'
    db.query(sql, (error, result) => {
        res.render('index',{
            articles: result
        })
    }) 
} 

const getArticleBySlug = (req, res) => {
    const sql = `SELECT * FROM article WHERE slug="${req.params.slug}"`
    db.query(sql, (error, result) => {
        const article = result[0]
        const author_id = result[0].author_id
        
        // Get author details
        const authorSql = `SELECT * FROM author WHERE id="${author_id}"`
        db.query(authorSql, (error, authorResult) => {
            const author = authorResult[0]
            article['author_name'] = author.name
            
            // Get comments for this article
            const commentsSql = `SELECT * FROM comments WHERE article_id=${article.id} ORDER BY created_at DESC`
            db.query(commentsSql, (error, commentsResult) => {
                res.render('article', {
                    article: article,
                    comments: commentsResult
                })
            })
        })
    })
}

const addComment = (req, res) => {
    const articleSql = `SELECT id FROM article WHERE slug="${req.params.slug}"`
    db.query(articleSql, (error, result) => {
        if (error || !result[0]) {
            res.redirect('/')
            return
        }

        const article_id = result[0].id
        const { author_name, content } = req.body
        
        const sql = `INSERT INTO comments (article_id, author_name, content) 
                    VALUES (?, ?, ?)`
        
        db.query(sql, [article_id, author_name, content], (error, result) => {
            if (error) {
                console.error(error)
            }
            res.redirect(`/article/${req.params.slug}`)
        })
    })
}

module.exports = {
    getAllArticles,
    getArticleBySlug,
    addComment
}
