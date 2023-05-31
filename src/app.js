const express = require("express");
const app  = express();
const router = require("./router/olympicrouter");
const port = process.env.PORT || 8000;
require("./db/conn");
app.use(express.json());
app.use(router);
app.listen(port,()=>{
    console.log(`Connection successfully ${port}`);
})

