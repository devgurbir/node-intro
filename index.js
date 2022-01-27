const sum = require("./sum.js")
const http = require("http");
const { rejects } = require("assert");

// console.log(sum(2)(3)(4)())

const users = [
    "Zeus",
    "Adam",
    "Eve",
    "Thor",
    "Odin",
    "Poseidon",
    "Hades",
    "Hermes",
    "Cronos",
    "Athena"
]

const server = http.createServer( (req, res) => {

    if(req.url == "/users" && req.method == "GET"){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users))
        return;
    }

    if(req.url.startsWith("/user/") && req.method == "GET"){
        res.writeHead(200, {'Content-Type': 'application/json'});
        let id = Number(req.url.split("/")[2])
        res.end(JSON.stringify(users[id]));
        return;
    }

    if(req.method == "POST" && req.url.startsWith("/users")){
        res.writeHead(201, {'Content-Type': 'application/json'});

        const searchParams = new URLSearchParams(req.url.split("?")[1]);
        const name = searchParams.get("name");

        users.push(name)

        res.end(JSON.stringify(users));

        return;
    }

    res.end(JSON.stringify({
        data: "Hello World"
    }))
})

server.listen(3001)
