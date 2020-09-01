const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Listening at http://localhost:3000");
});
