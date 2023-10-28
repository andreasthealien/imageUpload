import express from "express";
import mongoose from "mongoose";
import ejs from "ejs";

import path from "path";
import multer from "multer"; //https://www.npmjs.com/package/multer

const port = 3000;
const app = express();
const filePath = process.cwd();

const storage = multer.diskStorage({
    destination: './uploads/', // Choose your upload directory
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.post("/image/upload", upload.single('image'), (req, res)=>{
    const img = req.file;

    console.log(img);

    res.redirect("/");
});

app.listen(port, ()=>{
    console.log(`Server is running on -----> port: ${port} <-----`)
});
