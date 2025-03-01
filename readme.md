# Yoga Blog Project

This is a web application for a yoga blog built with Node.js, Express, MySQL, and Handlebars. The application allows users to view yoga articles and interact through comments.

## Required Software

### Prerequisites
* Node.js (v14 or newer)
* MySQL (v8.0 or newer)
* npm (comes with Node.js)

### Installation Steps
express - https://www.npmjs.com/package/express 
express-handlebars - https://www.npmjs.com/package/express-handlebars 
mysql2 - https://www.npmjs.com/package/mysql2 

## Getting Started

### Clone the Project
```bash
git clone git@github.com:KelliKirk/joga_mysql_team.git

cd joga_mysql_team
```

### Database Setup
1. Log into MySQL:
```bash
mysql -u root -p
```

### Project Setup
1. Install dependencies:
```bash
npm install express express-handlebars mysql2
```

2. Configure database connection:
   - Open `utils/db.js`
   - Update MySQL connection details if needed:
```javascript
{
    host: 'localhost',
    user: 'root',
    password: 'your-password',
    database: 'joga_mysql'
}
```
CREATE DATABASES

### Running the Project
1. Start the server:
```Npm start
2. Open your browser and navigate to:
```
http://localhost:3012
```

## How to Use

### Viewing Articles
- Visit the homepage to see all articles
- Click on any article to view its full content
- Each article displays:
  - Title
  - Author
  - Publication date
  - Content
  - Comments section

### Adding Comments
1. Navigate to any article
2. Scroll to the comments section
3. Fill in:
   - Your name
   - Comment content
4. Click "Add Comment" to submit

## Project Structure
```
├── controllers/
│   └── articles.js
├── routes/
│   └── articles.js
├── utils/
│   ├── app.js
│   └── db.js
├── views/
│   ├── layouts/
│   │   └── main.hbs
│   ├── article.hbs
│   └── index.hbs
├── public/
│   └── style/
│       └── app.css
└── index.js
```

## Developer(s)

Kelli Kirk
- Email: Kelli Kirk
Küllike Annuk
- Email: Küllike Annuk

## Resources Used
- [Express.js Documentation](https://expressjs.com/)
- [Handlebars Documentation](https://handlebarsjs.com/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Node.js Documentation](https://nodejs.org/docs/)

