const express = require('express')
const authRoutes = require("./routes/auth-routes")
const app = express()
const passportSetup = require("./config/passport-setup")


app.set('view engine', 'ejs')

app.use('/auth', authRoutes)

app.get("/", (req, res) => {
    res.render("home")
})

app.listen(3000, () => {
    console.log("server started")
})