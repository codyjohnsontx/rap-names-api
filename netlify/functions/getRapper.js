const rappers = require("./rappers");

function capitalizeName(name) {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

exports.handler = async (event, context) => {
  const rapperName = event.queryStringParameters.name.toLowerCase();

  const foundRapper = Object.keys(rappers).find(
    (key) => key.toLowerCase() === rapperName
  );

  if (foundRapper) {
    const responseRapper = { ...rappers[foundRapper] };
    responseRapper.name = capitalizeName(foundRapper);
    return {
      statusCode: 200,
      body: JSON.stringify(responseRapper),
    };
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify(rappers["unknown"]),
    };
  }
};
