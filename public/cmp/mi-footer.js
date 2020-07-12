class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Hinojosa Sanchez Shadanni Lissette..`;
    }
}
customElements.define("mi-footer", MiFooter);