const jwt = require("jsonwetoken")
const jwtpassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passworschema = zod.string().min(6);

function signJwt(username, password) {
    const signature = jwt.sign({ username }, jwtpassword);
    return signature;
}

function verifyjwt(token) {

}

function decodeJwt(token) {

}