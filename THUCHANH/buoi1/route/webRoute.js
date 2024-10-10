import express from 'express'
import getHomePage from '../controller/HomeController'
import aboutPage from '../controller/AboutController'
import contactPage from '../controller/ContactController'
const router = express.Router()
const initWebRoute = (app) => {
    router.get('/', getHomePage)
    router.get('/about', aboutPage)
    router.get ('/contact', contactPage)
    router.get('/date', (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write(getCurrentDate() + "<br/>");
        res.end();
    });
    
    router.get('/geturl', (req, res) => {
        const path = getPath(req);
        const params = getParamsURL(req);
        res.send(`Path: ${path} <br/> Params: ${params}`);
    });
    return app.use('/', router)

}
export default initWebRoute