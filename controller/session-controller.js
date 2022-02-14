const fs = require("fs")

function login(req,res){
    res.write("Login")
    res.end()
}

function signup(req,res){
    let signupHtml = fs.readFileSync("./views/Signup.html")
    res.write(signupHtml)
    res.end()
}
function saveUser(req,res){
    console.log(req.body)

    res.write("data saved")
    res.end()
}
module.exports.login = login
module.exports.signup = signup
module.exports.saveUser = saveUser
 