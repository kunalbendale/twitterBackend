import { Router } from "express";

const router= Router();

//USER CRUD Operations

// Create a new user
router.post("/", (req, res) => {
  res.status(501).json({ error: "Not Implemented" });
});

// List the users
router.get("/", (req, res) => {
  res.status(501).json({ error: "Not Implemented" });
});

// get single user
router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.status(501).json({ error: `Not Implemented ${id}` });
});

// Update a user
router.put("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.status(501).json({ error: `Not Implemented ${id}` });
});

// delete a user
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.status(501).json({ error: `Not Implemented ${id}` });
});

export default router;