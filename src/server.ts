import * as express from "express";

import * as handlers from "./handlers";
import * as constants from "./constants";


const app = express();

app.use(express.json());

app.get("/", handlers.index)

app.listen(constants.port, () => {
  console.log(`Server running at http://127.0.0.1:${constants.port}/`);
})
