import express, {Router} from "express";
import { appendFile } from "fs";
const router:Router = express.Router();

router.get("/", (req, res) => {
    res.render('index');
});
router.get("/contact", (req, res) => {
    res.render('contact');
});
router.get("/snoeien-en-vellen", (req,res) => {
  res.render('snoeien-en-vellen');
});
router.get("/klimwerk-bomen", (req,res) => {
  res.render('klimwerk-bomen');
});
router.get("/verhakselen", (req,res) => {
  res.render('verhakselen');
});
router.get("/klieven-brandhout", (req,res) => {
  res.render('klieven-brandhout');
});
router.get("/klepelmaaien", (req,res) => {
  res.render('klepelmaaien');
});
router.get("/frezen-boomstronken", (req,res) => {
  res.render('frezen-boomstronken');
});
router.get("/stormschade", (req,res) => {
  res.render('stormschade');
});

export default router;