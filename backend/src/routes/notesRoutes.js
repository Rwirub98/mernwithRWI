import express from "express";
import {
allNotes,
createdNotes,
updateNotes,
deletedNotes,
allNoteById
}
  from "../controller/notesController.js"

const router = express.Router();

router.get("/", allNotes);
router.get("/:id", allNoteById);
router.post("/", createdNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deletedNotes);

export default router;

