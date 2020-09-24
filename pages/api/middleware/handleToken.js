import jwt from 'jsonwebtoken';
const KEY = "CVHCKJABCAKC";


export const handleToken = (handler) => (req,res) => {
    if(!req.body){
        res.statusCode = 404;
        handler(res.end("Error"));
        return;
    }
    const { username, password } = req.body;
    const token = jwt.sign({
        username,
        admin: username === 'admin' && password === 'admin'
    }, KEY)
    req.token = token;
    handler(req,res)
}

export default handleToken;