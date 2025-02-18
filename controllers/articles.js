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
    console.log('Requested slug:', req.params.slug) 
    const sql = `SELECT * FROM article WHERE slug=?`
    db.query(sql, [req.params.slug], (error, result) => {
        if (error) {
            console.error('Database error:', error) 
            res.redirect('/')
            return
        }
        if (!result[0]) {
            console.log('No article found with slug:', req.params.slug) 
            res.redirect('/')
            return
        }
        
        const article = result[0]
        article.slug = result[0].slug
        const author_id = article.author_id

        // Get author details
        const authorSql = `SELECT * FROM author WHERE id=?`
        db.query(authorSql, [author_id], (error, authorResult) => {
            if (error) {
                console.error('Author query error:', error) 
                res.redirect('/')
                return
            }
            if (!authorResult[0]) {
                console.log('No author found for id:', author_id) 
                res.redirect('/')
                return
            }
            const author = authorResult[0]
            article.author_name = author.name
            
            // Get comments for this article
            const commentsSql = `SELECT * FROM comments WHERE article_id=? ORDER BY created_at DESC`
            db.query(commentsSql, [article.id], (error, commentsResult) => {
                if (error) {
                    console.error('Comments query error:', error) 
                    commentsResult = []
                }
                res.render('article', {
                    article: article,  
                    comments: commentsResult
                })
            })
        })
    })
}

const addComment = (req, res) => {
    const articleSql = `SELECT id FROM article WHERE slug=?`
    db.query(articleSql, [req.params.slug], (error, result) => {
        if (error || !result[0]) {
            res.redirect('/')
            return
        }

        const article_id = result[0].id
        const { author_name, content } = req.body

        const sql = `INSERT INTO comments (article_id, author_name, content) VALUES (?, ?, ?)`
        db.query(sql, [article_id, author_name, content], (error, result) => {
            if (error) {
                console.error(error)
                res.redirect('/')
                return
            }
            res.redirect(`/articles/${req.params.slug}`)
        })
    })
}

module.exports = {
    getAllArticles,
    getArticleBySlug,
    addComment
}