const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

//Define paths for Express config
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views') 
const partialsPath = path.join(__dirname,'../templates/partials')

//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title: 'Short bio',
        name:  'Luis C González'
    })

})

app.get('/publications',(req,res)=>{
    res.render('publications',{
        title: 'Journals/conferences',
        name: 'Luis C. González'
    })
})



app.get('/students',(req,res)=>{
    res.render('students',{
        title: 'Students',
        name: 'Luis C. González'
    })
})


app.get('/others',(req,res)=>{
    res.render('others',{
        title: 'Other stuff',
        name: 'Luis C. González'
    })
})



app.get('*',(req,res)=>{
    res.render('404',{
    title: 'This Page does not exist, but you can always return to my website!',
    name: 'Luis C. González'
    })
})

app.listen(port,()=> {
    console.log('Server is up on port '+ port)
})

