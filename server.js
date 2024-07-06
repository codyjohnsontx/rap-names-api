const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = 8000;
const rappers = require("./netlify/functions/rappers");

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

function capitalizeName(name) {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/:name", (request, response) => {
  const rapperName = request.params.name.toLowerCase();

  const foundRapper = Object.keys(rappers).find(
    (key) => key.toLowerCase() === rapperName
  );

  if (foundRapper) {
    const responseRapper = { ...rappers[foundRapper] };
    responseRapper.name = capitalizeName(foundRapper);
    response.json(responseRapper);
  } else {
    response.json(rappers["unknown"]);
  }
});

app.listen(PORT, function (err) {
  if (err) console.log(`Error in server setup ${err}`);
  console.log(`Server is listening on Port ${PORT}`);
});
