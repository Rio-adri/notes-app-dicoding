class NavbarComponent extends HTMLElement{
    constructor () {
        super();

        
        this._style = document.createElement('style');
    }

    connectedCallback() {
        this.render();
    }

    updateStyle() {
        this._style.textContent = `
            .navbar {
                position:sticky;
                top:10px;
                background-color:#3674B5 ;
                color: white;
                margin: 0 auto;
                padding: 0;
                display: flex;
                justify-content: space-between;
                padding: 10px;
                padding-right: 20px;
                border-radius: 10px;
                box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
                transition: all;
                margin-bottom: 20px;
            }

            .navbar .wrap-menu ul{
                display: flex;
                gap: 20px;
            }
            .navbar .wrap-menu ul li {
                list-style-type: none;
            }

            .navbar .wrap-menu ul li a {
                text-decoration:none;
                color: white;
            }

            .navbar .wrap-menu ul li a:hover {
                cursor: pointer;
                font-weight: bold;
            }`;
    }

    render() {
        this.updateStyle();

        this.innerHTML = `
            ${this._style.outerHTML}

            <nav class="navbar" id="navbar">
                <div class="wrap-menu">
                    <ul>
                        <li><a href="../../index.html">Home</a></li>
                        <li><a href="../../archived.html">Archived</a></li>
                    </ul>
                </div>

                <div>
                    <p>logo</p>
                </div>
            </nav>`;
    }
}

customElements.define('navbar-component', NavbarComponent);