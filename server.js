const express = require("express");
require("dotenv").config();

const app = express();

const data = require("./data/weather.json");

app.get("/weathers", (request, response) => {
	response.json(data);
});

PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log("listening on port: " + PORT));
