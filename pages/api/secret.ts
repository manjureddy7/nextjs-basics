import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';

const KEY = "CVHCKJABCAKC";

export default function secret(req: NextApiRequest,res: NextApiResponse) {
    if(!req.body){
        res.statusCode = 404;
        res.end("Error");
        return;
    }
    const { token } = req.body;
    const { admin } = jwt.decode(token, KEY) as {[key: string]: boolean};
    if(admin) {
        res.json({secretKey: 123456})
    } else {
        res.json({admin: false})
    }
}