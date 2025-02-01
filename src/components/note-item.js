class NoteItem extends HTMLElement {
    constructor () {
        super();

        this._note = {
            id: 'notes-5678-abcd-efgh',
            title: 'Project Deadline',
            body: 'Complete project tasks by the deadline on October 1st.',
            createdAt: '2022-09-28T14:00:00.000Z',
            archived: false,
        };
        
        this._style = document.createElement('style');
    }

    setNote (value) {
        this._note['id'] = value.id;
        this._note['title'] = value.title;
        this._note['body'] = value.body;
        this._note['createdAt'] = value.createdAt;
        this._note['archived'] = value.archived;

        this.render();

    }

    connectedCallback() {
        this.render();
    }


    updateStyle() {
        this._style.textContent = `
            note-item {
                display:flex;
                flex-direction:column;
                justifiy-content:space-between;
                text-align: left;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
            }

            .note-item .button-wrap {
                align-self:flex-end;
                display: flex;
                justify-content: flex-start;
                gap: 10px;
            }


            .button-wrap button {
                border:1px solid #3674B5;
                color : #3674B5;
                padding:10px;
                background-color:transparent;

            }

            .button-wrap button:hover {
                border:none;
                color : white;
                padding:10px;
                background-color:#3674B5;
                font-weight:bold;
            }
                
            `;
    }

    render() {
        this.updateStyle();

        this.setAttribute('data-id', this._note.id);

        this.innerHTML = `
            ${this._style.outerHTML}
            
            <div class="note-item">
                <h1>${this._note.title}</h1>
                <p>${this._note.body}</p>
                <div class="button-wrap">
                    <button class="archived-btn" id="archivedBtn">Archived</button>
                    <button class="delete-btn" id="deleteBtn">Delete</button>
                </div>
            </div>
        `;
    }

    archived () {
        const archiveBtn = this.querySelector('#archivedBtn');

        archiveBtn.addEventListener('click', ()=>{
            this._note['archived'] = !this._note['archived'];
            this.render();
        })
    }

    
    
}

customElements.define('note-item', NoteItem);