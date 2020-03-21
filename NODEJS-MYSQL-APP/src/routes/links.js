const express = require("express");
const router = express.Router();
const pool = require("../database");
const { route } = require(".");

router.get("/add",(req, resp)=>{
    resp.render("links/add")
}); 

router.post("/add",async(req, res)=>{
    const {title, url, description} =  req.body;
    const newLink = {
        title,
        url,
        description
    }; 
    await pool.query("INSERT INTO links SET ?",[newLink]);
    req.flash("success","Link saved successfully");
    res.redirect("/links");
}); 

router.get("/",async(req, res)=>{
    const links = await pool.query("SELECT * FROM links");
    console.log(links)
    res.render("links/list",{links});
})

router.get("/delete/:id",async(req,res)=>{
    const {id} = req.params;
    await pool.query("DELETE FROM links WHERE id = ?",[id]);
    req.flash("success","Link removed successfully")
    res.redirect("/links");
});

router.get("/edit/:id",async(req,res)=>{
    const {id} = req.params;
    const link = await pool.query("SELECT * FROM links WHERE id = ?",[id]);
    res.render("links/edit",{link:link[0]});
});

router.post("/edit/:id",async(req,res)=>{
    const {id} = req.params;
    const {title, url, description} = req.body;
    const newLinks ={
        title,
        description,
        url
    };
    await pool.query("UPDATE links set ? WHERE id = ?",[newLinks,id]);
    req.flash("success","Link updated successfully")
    res.redirect("/links");    
});

module.exports = router;