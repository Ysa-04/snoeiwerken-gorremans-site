import express, {Router} from "express";
const router:Router = express.Router();

router.get("/", (req, res) => {
    res.render('index');
});

// meerdere routers invoegen hieronder zoals router.get hierboven

export default router;
