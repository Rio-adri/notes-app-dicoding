class NavbarComponent extends HTMLElement{
    static observedAttribute = ['href'];
    constructor () {
        super();

        this._href = this.getAttribute('href');
        this._shadowRoot = this.attachShadow({mode:'open'});
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

            ::slotted(a) {
                text-decoration:none;
                color: white;
            }

            ::slotted(a):hover {
                cursor: pointer;
                font-weight: bold;
            }`;
    }

    render() {
        this.updateStyle();

        const template= `
            ${this._style.outerHTML}

            <nav class="navbar" id="navbar">
                <div class="wrap-menu">
                    <ul>
                        <li><slot name="home" href=${this._href }>Home</slot></li>
                        <li><slot name="archived" href=${this._href }>Archived</slot></</li>
                    </ul>
                </div>

                <div>
                    <p>logo</p>
                </div>
            </nav>`;

        this._shadowRoot.innerHTML = template;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[`_${name}`] = newValue;

        this.render();
    }
}

customElements.define('navbar-component', NavbarComponent);