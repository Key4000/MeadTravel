const handlers = require('./lib/handlers')


const express = require('express')
const {engine} = require('express-handlebars')

const  app = express()

const port = process.env.PORT || 3000


// Настройка механизма представлений Handlebars
app.engine('handlebars', engine({ defaultLayout: 'main'})) 
 
 app.set('view engine', 'handlebars')
 
 app.use(express.static(__dirname + '/public'))

//Домашняя страница
app.get('/', handlers.home )


//О нас
app.get('/about', handlers.about)

// Пользовательская страница 404
app.use(handlers.notFound)

//Пользовательская страница 500
app.use(handlers.serverError)

if(require.main === module){
    app.listen(port, () => console.log(
    `Express запущен на http://localhost:${port};` + `\nНажмите Ctrl + C для завершения.`
))
}else {
    module.exports = app
}



