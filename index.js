const express = require("express")
const app = express();
const PORT = 3001

app.set ("view engine", "ejs")

// middleware
app.use(express.static("public"))


app.get("/", (req, res) => {
    res.status(200).render("index", {pageTitle : "Blog Page"})
})


app.listen(3001, () => {
    console.log(`server is running at port ${PORT}`)
})