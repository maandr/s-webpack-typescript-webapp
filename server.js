const express = require("express")

const port = parseInt(process.env.PORT || "3000")
const app = express()

app.use(express.static(__dirname + "/dist"))
app.get("*", function(request, response) {
    response.sendFile(path.join(__dirname, "dist/index.html"))
})
app.listen(port, function(error) {
    if(error) return console.error(error)
    console.info("Application is listening on port %s.", port)
})