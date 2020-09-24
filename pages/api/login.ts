import handleToken from './middleware/handleToken';

const login = (req,res) => {
    const token = req.token;
    res.json({token})
}

export default handleToken(login);

// handleToken is a middleware which will run