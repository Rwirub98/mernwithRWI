import express from "express";
import {allNotes, createdNotes, updateNotes, deletedNotes} from "../controller/notesController.js" 

const router = express.Router();

router.get("/",allNotes);
router.post("/:id",createdNotes);
router.put("/:id",updateNotes);
router.delete("/:id",deletedNotes);

export default router;
