const filterNotes = (notes, isArchived) =>{
    return notes.filter((note)=>note.archived === isArchived);
}

export default filterNotes;