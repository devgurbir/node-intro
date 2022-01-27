const sum = require("./sum.js")
const http = require("http")

// console.log(sum(2)(3)(4)())

const server = http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({
        data: "Hello World"
    }))
})

server.listen(3001)
