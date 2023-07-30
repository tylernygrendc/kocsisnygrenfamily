import express from "express";
import functions from "firebase-functions";

const router = express();

router.set('view engine', 'pug');

router.get('/', (req, res) => {
    res.status(200)
        .render("index");
});

router.get('/genealogy', (req, res) => {
    res.status(200)
        .render("genealogy");
});

router.get('/scrapbook', (req, res) => {
    res.status(200)
        .render("scrapbook");
});

export const routes = functions.https.onRequest(router);
