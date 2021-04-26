import express from "express";

const port = 3000;

const app = express();

app.get("/", (_req: express.Request, res: express.Response) => {
  res.send("Well Done!");
});

app.listen(port, () => console.log(`The server is listening on port ${port}`));
