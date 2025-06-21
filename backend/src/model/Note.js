import mongoose from "mongoose";

// create schema
// and create model based off that schema

const noteSchema = new mongoose.Schema(
  {
    title:{
      type:String,
      required:true,
    },
    content:{
      type:String,
      required:true,
    },
  },
  {timestamps:true}// mongoose allows createdAt, updateAt by default
);

const Note = mongoose.model("Note", noteSchema)

export default Note;