import express, {Router} from "express";
import { appendFile } from "fs";
const router:Router = express.Router();

router.get("/", (req, res) => {
    res.render('index');
});
router.get("/contact", (req, res) => {
    res.render('contact');
});


// meerdere routers invoegen hieronder zoals router.get hierboven

export default router;
