class NoteList extends HTMLElement {
    constructor() {
        super();

        this._noteList = [] ;
        this._shadowRoot = this.attachShadow({ mode: 'open' });
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
            :host  {
                display:grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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

        
        this._shadowRoot.innerHTML = ''; 
        this._shadowRoot.appendChild(this._style);

        this._noteList.forEach(note => {
            const noteItem = document.createElement('note-item');
            noteItem.setAttribute('data-id',note.id);
            noteItem.innerHTML = `
                <h2 slot="title">${note.title}</h2>
                <p slot="body">${note.body}</p>
            `;
            this._shadowRoot.appendChild(noteItem);
        });
    }

}

customElements.define('note-list', NoteList);
