const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const rappers = {
  "21 savage": {
    age: 29,
    birthName: "Sheyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
  },
  "50 cent": {
    age: 48,
    birthName: "Curtis Jackson",
    birthLocation: "Queens",
  },
  "chance the rapper": {
    age: 29,
    birthName: "Chancelor Bennett",
    birthLocaion: "Chicago, Illinois",
  },
  unknown: {
    age: 0,
    birthName: "unknown",
    birthLocation: "unknown",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
  const rapperName = request.params.name.toLowerCase();
  if (rappers[rapperName]) {
    response.json(rappers[rapperName]);
  } else {
    response.json(rappers["unknown"]);
  }
});

app.listen(PORT, function (err) {
  if (err) console.log(`Error in server setup ${err}`);
  console.log(`Server is listening on Port ${PORT}`);
});
