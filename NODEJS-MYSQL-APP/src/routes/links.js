const express = require("express");
const router = express.Router();
const pool = require("../database");
const {isLoggedIn} = require("../lib/auth")



/**
 * SOLICITUD PARA IR A AGREGAR UN ENLACE
 */
router.get("/add", isLoggedIn, (req, resp)=>{
    resp.render("links/add")
}); 

/**
 * PETICION PARA AGREGAR UN NUEVO ENLACE
 */
router.post("/add", isLoggedIn, async(req, res)=>{
    const {title, url, description} =  req.body;
    const newLink = {
        title,
        url,
        description,
        user_id: req.user.id
    }; 
    await pool.query("INSERT INTO links SET ?",[newLink]);
    req.flash("success","Link saved successfully");
    res.redirect("/links");
}); 

/*
 * SOLICITUD PARA VISUALIZAR TODOS LOS ENLACES
 */
router.get("/", isLoggedIn, async(req, res)=>{
    const links = await pool.query("SELECT * FROM links WHERE user_id = ?",[req.user.id]);
    res.render("links/list",{links});
})

/**
 * SOLICITUD PARA ELIMINAR UN ENLACE
 */
router.get("/delete/:id", isLoggedIn, async(req,res)=>{
    const {id} = req.params;
    await pool.query("DELETE FROM links WHERE id = ?",[id]);
    req.flash("success","Link removed successfully")
    res.redirect("/links");
});

/**
 * SOLICITUD PARA LLAMAR AL ENLACE QUE SE DESEA MODIFICAR
 */
router.get("/edit/:id", isLoggedIn, async(req,res)=>{
    const {id} = req.params;
    const link = await pool.query("SELECT * FROM links WHERE id = ?",[id]);
    res.render("links/edit",{link:link[0]});
});

/**
 * SOLICITUD PARA MODIFICAR EN ENLACE
 */
router.post("/edit/:id", isLoggedIn, async(req,res)=>{
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