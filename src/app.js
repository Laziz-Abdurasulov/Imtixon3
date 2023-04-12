const express = require("express")
require("dotenv").config()
const { router } = require("../router/index");
const PORT = process.env.PORT || 8000;


const app = express();
app.use(express.json());
app.use(router)






app.listen(PORT, () => console.log(`Server run on port ${PORT}`))








