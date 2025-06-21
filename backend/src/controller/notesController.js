import Note from "../model/Note.js";

export async function allNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); //-1 will sort in desc . order (newest first)
    res.status(200).json(notes);

  } catch (error) {
    console.log("error in allNotes", error);
    res.status(500).json({ message: "internal server error" });

  }
}

export async function allNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "message not found" })
    res.json(note)
  } catch (error) {
    console.log("error in allNotes", error);
    res.status(500).json({ message: "internal server error" });
  }
}


export async function createdNotes(req, res) {
  try {
    const { title, content } = req.body
    const note = new Note({ title, content })

    const savedNote = await note.save()
    res.status(201).json(savedNote);
  } catch (error) {
    console.log("error in createdNotes", error);
    res.status(500).json({ message: "internal server error" });
  }
}


export async function updateNotes(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content },
      { new: true }
    )
    if (!updatedNote) return res.status(404).json({ message: "not found" });

    res.status(200).json(updatedNote)
  } catch (error) {
    console.log("error in updatedNotes", error);
    res.status(500).json({ message: "internal server error" });

  }

}

export async function deletedNotes(req, res) {
  try {
    const { title, content } = req.body;
    const deletedNote = await Note.findByIdAndDelete(req.params.id, { title, content },
      { New: true });
    if (!deletedNote) return res.status(404).json({ message: "not found" })
    res.status(200).json({ message: "note deleted successfully" })
  } catch (error) {
    console.log("error in deletedNotes", error);
    res.status(500).json({ message: "internal server error" });
  }
}