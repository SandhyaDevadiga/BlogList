const express = require('express');
const router = express.Router();
const path = require('path');
const blogs = require('../data/blogs');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/blog', (req, res) => {
    res.render('blogHome', { blogs: blogs });
});

router.get('/blogpost/:slug', (req, res) => {
    const myBlog = blogs.find(e => e.slug === req.params.slug);
    res.render('blogpage', { 
        title: myBlog.title,
        content: myBlog.content
    });
});

module.exports = router;




// const express =require("express")
// const router=express.Router()
// const path=require('path')
// const blogs=require('../data/blogs')

// router.get('/', (req,res)=>{
//     // res.sendFile(path.join(__dirname, '../templates/index.html'))
//     res.render('home');
// })

// router.get('/blog', (req,res)=>{
//     // blogs.forEach(e=>{
//     //     console.log(e.title)
//     // })
//     // res.sendFile(path.join(__dirname, '../views/blogHome.html'))
//     res.render('blogHome', { blogs: blogs });
// })

// router.get('/blogpost/:slug', (req,res)=>{
//    myBlog= blogs.filter((e)=>{
//         e.slug==req.params.slug
//     })
//     console.log(myBlog)
//     // res.sendFile(path.join(__dirname, '../views/blogpage.html'))
//     res.render('blogpage', { 
//         title:myBlog[0].title,
//         content:myBlog[0].content
//      });

    
// })


// module.exports =router