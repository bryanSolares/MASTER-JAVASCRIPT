const {Router} = require("express")
const multipar = require("connect-multiparty");
const projectController = require("../controllers/project.controller")

const router = Router();
const multipartMiddleware = multipar({uploadDir:"./uploads"});

router.get("/",projectController.home);
router.post("/save-project",projectController.saveProject);
router.get("/project/:id",projectController.getProject);
router.get("/projects",projectController.getProjects);
router.put("/project/:id",projectController.updateProject);
router.delete("/project/:id",projectController.deleteProject);
router.post("/project/upload-image/:id", multipartMiddleware, projectController.uploadImage);

module.exports = router