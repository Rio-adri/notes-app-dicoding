class ModalTambah extends HTMLElement{
    constructor () {
        super();

        this._style = document.createElement('style');
    }

    connectedCallback() {
        this.render();

        this.closeEvent();

    }

    updateStyle() {
        this._style.textContent = `
            /* modal */
            .modal-outer {
                display:none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background: rgba(0, 0, 0, 0.1); 
                backdrop-filter: blur(2px); 
                justify-content: center;
                align-items: center;
            }

            .modal-outer.active {
                display: flex; 
            }

            .modal-container{
                position:absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                display:flex;
                justify-content: center;
                align-items: center;
            }

            .modal-wrap {
                border-radius:10px;
                position: relative;
                background-color: white;
                padding: 50px;
            }


            .modal-wrap form div {
                display: flex;
                flex-direction: column; 
                gap: 10px;
                margin-bottom:10px;

            }

            .modal-wrap form div input,textarea, button {
                border:1px solid gray;
                padding: 10px;
                border-radius: 10px;
            }

            .modal-wrap .close-btn {
                position: absolute;
                top: 20px;
                right: 20px;
                font-weight:bold;
                font-size:large;

            }
            
            .modal-wrap .close-btn:hover {
                cursor: pointer;
                color:#3674B5;
            }

            .modal-wrap .submit-btn {
                border:none;
                background-color:#3674B5 ;
                color: white;
            }`;
    }

    render() {
        this.updateStyle();

        this.innerHTML = `
            ${this._style.outerHTML}

            <!-- tambah modal -->
            <div class="modal-outer" id="modalOuter">
                <div class="modal-container" id="modalContainer">
                    <div class="modal-wrap">
                        <span class="close-btn" id="closeButton">&times;</span>
                        <h2>Tambah Catatan</h2>
                        <form action="">
                            <div>
                                <label for="title">Tambahkan Judul</label>
                                <input type="text" name="titleInput" id="titleInput" class="input-title" required>
                            </div>
                            <div>
                                <label for="body">Tambahkan Catatan</label>
                                <textarea  name="bodyInput" id="bodyInput" class="input-body"
                                cols="40"
                                rows="10" 
                                required></textarea>
                            </div>
                            <div>
                                <button type="submit" class="submit-btn" id="submitBtn">Tambah</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>`;
    }

    showModal() {
        this.querySelector("#modalOuter").style.display='flex';
    }

    hideModal() {
        this.querySelector("#modalOuter").style.display='none';
    }

    closeEvent () {
        const closeButton = this.querySelector("#closeButton");
        const modalOuter = this.querySelector("#modalOuter");

        closeButton.addEventListener("click", () => this.hideModal());
        
        modalOuter.addEventListener("click", (e) => {
           if (e.target == modalOuter) {
            this.hideModal();
           }
            
        });
    }
}

customElements.define('modal-component', ModalTambah);