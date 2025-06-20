export function allNotes(req, res){
res.status(200).send(" i did created");
}

export function createdNotes(req, res){
  res.status(201).json({message:"succecfully created"});
}

export function updateNotes(req, res){
  res.status(201).json({message:"successfully updated"});
}

export function deletedNotes(req, res){
res.status(201).json({message:"successfully deleted"});
}