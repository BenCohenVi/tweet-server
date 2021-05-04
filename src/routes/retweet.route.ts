import express from "express";
import RetweetController from "../controllers/retweet.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const allRetweets = await RetweetController.getAll();
    res.send(allRetweets);
  } catch {
    res.send("couldn't get all retweets");
  }
});

export default router;
