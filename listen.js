const app = require("./app");

const { PORT = 9004 } = process.env;

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));
