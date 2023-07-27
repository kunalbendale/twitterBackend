import { Router } from "express";

const router = Router();

//TWEET CRUD Operations

// Create a new tweet
router.post("/", (req, res) => {
  res.status(501).json({ error: "Not Implemented" });
});

// List the tweets
router.get("/", (req, res) => {
  res.status(501).json({ error: "Not Implemented" });
});

// get single tweet
router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.status(501).json({ error: `Not Implemented ${id}` });
});

// Update a tweet
router.put("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.status(501).json({ error: `Not Implemented ${id}` });
});

// delete a tweet
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.status(501).json({ error: `Not Implemented ${id}` });
});

export default router;
