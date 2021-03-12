const express = require('express')
const fetch = require('node-fetch')

const app = express()
app.set('view engine', 'ejs')

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

const contents = []

app.get("/", (req, res) => {
    res.render("index", {contents});
})

app.post('/', (req, res) => {
    const url = "https://api.shrtco.de/v2/shorten?url=";
    const inputUrl = req.body.shorten;
    const postUrl = url + inputUrl;

    (async () => {
        try {
            const response = await fetch(postUrl)
            const data = await response.json()
            let result = ""
            if (inputUrl.indexOf("https") === 0) {
                result = {startingUrl: data.result.original_link, shortened: "https://rafet/" + data.result.code}
            } else {
                result = {startingUrl: data.result.original_link, shortened: "http://rafet/" + data.result.code}
            }
            contents.push(result);
        } finally {
            res.render("index", {contents})
        }
    })()
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})