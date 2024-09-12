var url = require('url')
const getPath = (req) =>{
    return req.url;
}
const getParamsURL = (req) =>{
    return JSON.stringify((url.parse(req.url, true)).query);
}
module.exports ={getPath,getParamsURL}