class NoteList extends HTMLElement {
    constructor() {
        super();

        this._noteList = [];
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');
    }

    // Ambil semua catatan dari Notes class
    setNoteList(value) {
        this._noteList = value;
        this.render();
    }

    connectedCallback() {
        // Mengambil data catatan dari kelas Notes dan menampilkan
        this.render();
    }

    updateStyle() {
        this._style.textContent = `
            :host  {
                display:grid;
                grid-template-columns: repeat(1, minmax(200px, 1fr));
                text-align: center;
                gap: 20px;
            }
                
            @media(min-width: 768px) {
                :host {
                    display:grid;
                    grid-template-columns: repeat(2, 1fr);
                }
            }

            @media(min-width: 1024px) {
                :host {
                    display:grid;
                    grid-template-columns: repeat(3, 1fr);
                }
            }
        `;
    }

    render() {
        this.updateStyle();

        // Menghapus slot dan menambahkan note-item untuk setiap catatan
        this._shadowRoot.innerHTML = ''; // Menghapus isi sebelumnya
        this._shadowRoot.appendChild(this._style);

        this._noteList.forEach(note => {
            const noteItem = document.createElement('note-item');
            noteItem.setNote(note); // Kirimkan data ke note-item
            this._shadowRoot.appendChild(noteItem);
        });
    }
}

customElements.define('note-list', NoteList);
