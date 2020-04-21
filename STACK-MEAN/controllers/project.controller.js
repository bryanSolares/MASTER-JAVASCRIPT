
const projectModel = require("../models/project")
const fs = require("fs");
const path = require("path");

var controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: "Recibido HOME"
        });
    },
    saveProject: function (req, res) {
        let project = new projectModel({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            year: req.body.year,
            langs: req.body.langs,
            image: req.body.image
        });

        project.save((error, project) => {
            if (error) return res.status(500).send({
                message: `Error al guardar proyecto: ${error}`
            })
            res.status(201).send({
                message: "Proyecto almacenado correctamente",
                project: project
            });
        });
    },
    getProject: function (req, res) {
        let id = req.params.id;
        projectModel.findById(id, (error, project) => {
            if (error) return res.status(500).send({
                message: `Ha ocurrido un error: ${error}`
            });
            if (!project) return res.status(404).send({
                message: "No se encontrado el proyecto indicado"
            });
            return res.status(200).send({
                message: "Proyecto encontrado",
                project
            })
        });
    },
    getProjects: function (req, res) {
        projectModel.find((error, projects) => {
            if (error) return res.status(500).send({
                message: `Ha ocurrido un error: ${error}`
            });
            if (!projects) return res.status(404).send({
                message: "No se han encontrado proyectos"
            });
            return res.status(200).send({message:"Busqueda realizada con éxito",projects})
        });
    },
    updateProject: function(req,res){
        let id = req.params.id;
        projectModel.findByIdAndUpdate(id,req.body, {new:true}, (error,project)=>{
            if (error) return res.status(500).send({
                message: `Ha ocurrido un error: ${error}`
            });
            if (!project) return res.status(404).send({
                message: "No se han podido encontrar o actualizar el proyecto"
            });
            res.status(202).send({message:"Proyecto modificado con éxito",project});
        });
    },
    deleteProject: function(req,res){
        let id = req.params.id;
        projectModel.findByIdAndRemove(id,(error,project)=>{
            if (error) return res.status(500).send({
                message: `Ha ocurrido un error: ${error}`
            });
            if (!project) return res.status(404).send({
                message: "No se han podido encontrar o eliminar el proyecto"
            });
            return res.status(200).send({message:"Proyecto eliminado con éxito",project})
        });
    },
    uploadImage: function(req,res){
        let id = req.params.id;
        if(req.files){

            let filePath = req.files.image.path;
            let fileSplit = filePath.split("\\");
            let fileName = fileSplit[0];
            let extFile = fileName.split("\.")[1];

            if(extFile == "png"||extFile=="jpg" || extFile == "jpeg" || extFile == "gif"){
                projectModel.findByIdAndUpdate(id,{image:fileName},{new:true},(error,project)=>{
                    if (error) return res.status(500).send({
                        message: `Ha ocurrido un error: ${error}`
                    });
                    if (!project) return res.status(404).send({
                        message: "No se han podido encontrar o actualizar el proyecto"
                    });
                    
                    res.status(200).send({message:"Imagen de proyecto modificada con éxito",project})
                });
            }else{
                fs.unlink(filePath,(error)=>{
                    return res.status(500).send({message:"La extención no es válida"});
                });
            }
        }
    },
    getImageFile: function(req, res){
        let file = req.params.file;
        let path_file = "./uploads/".concat(file);
        console.log(path_file)
        fs.exists(path_file,(exists)=>{
            if(exists){
                console.log(path_file)
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(404).send({message:"No existe la imagen"});
            }
        });
    }
}


module.exports = controller;