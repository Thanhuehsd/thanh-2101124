import express from 'express';
import dotenv from 'dotenv/config';
import viewEngine from './viewEngine.js'; 
import { getPath, getParamsURL } from './getURL.js'; 
import initWebRoute from './route/webRoute.js';
const app = express();
const port = process.env.PORT || 3000;


viewEngine(app);
initWebRoute(app)





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});