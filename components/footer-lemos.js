class Footer_L extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="footer-lemos-nifme">
        <div class="pt-1 pb-2 px-md-5 container-fluid">
            <div class="row">
                <div class="col-auto col-md-5 align-middle">
                    <p class="mb-0 small" style="color: #DBE2EF;">Academic Portfolio • Last updated ©2025</p> 
                </div>
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define('footer-component-lemos', Footer_L);
