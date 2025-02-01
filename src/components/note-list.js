class NoteList extends HTMLElement {
    constructor () {
        super();

        this._noteList = [];
        this._style = document.createElement('style');
    }

    setNoteList(value) {
        this._noteList = value;

        this.render();
    }


    connectedCallback() {
        this.render();
    }

    updateStyle() {
        this._style.textContent = `
            note-list {
                display:grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));;
                text-align: center;
                gap: 20px;
            }
                
            @media(min-width: 768px) {
                note-list {
                    display:grid;
                    grid-template-columns: repeat(2, 1fr);
                }
            }

            @media(min-width: 1024px) {
                note-list {
                    display:grid;
                    grid-template-columns: repeat(3, 1fr);
                }
            }
            `;


    }

    render() {
        this.updateStyle();

        const noteElements = this._noteList.map((elemen)=>{
            const note = document.createElement('note-item');
            note.setNote(elemen);

            return note;
        });

        this.innerHTML = '';
        this.append(this._style,...noteElements);
    }
}

customElements.define('note-list', NoteList);