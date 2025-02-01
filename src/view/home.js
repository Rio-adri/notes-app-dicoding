import notes from "../data/notes.js";
import filterNotes from "../controller/filterNotes.js";
import "../components/navbar.js";
import "../components/modal-tambah.js";
import "../components/note-item.js";
import "../components/note-list.js"

const home = () => {
    const addBtn = document.querySelector('#addBtn');
    const modal = document.querySelector('modal-component');
    const noteList = document.querySelector('note-list');

    addBtn.addEventListener('click', function () {
        modal.showModal();
    });

    noteList.setNoteList(filterNotes(notes.all(), false));
}

document.addEventListener('DOMContentLoaded', ()=>{
    home();
});