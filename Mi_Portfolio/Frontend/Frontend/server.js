const express = require("express")
const path = require("path");

const app = express();

app.use(express.static('./dist/mi-portfolio'));
app.get('/*', (req,res) => 
res.sendFile("index.html",{root:"/dist/mi-portfolio"})
)

app.listen(process.env.PORT || 8080)