class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <nav class="navbar navbar-expand-lg p-0 navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand mx-lg-5" href="home.html"><i class="bi bi-cassette-fill"></i> Metal Wood</a>
        <button
          class="navbar-toggler my-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse row p-0"
          id="navbarSupportedContent"
        >
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0 col-lg-8 d-flex justify-content-md-around p-0"
          >
            <li class="nav-item container-fluid">
              <a class="nav-link" href="home.html">Home</a>
            </li>
            <li class="nav-item container-fluid">
              <a class="nav-link" href="ticket.html">Ticket</a>
            </li>
            <li class="nav-item container-fluid">
              <a href="getting_here.html" class="nav-link text-center">Getting Here</a>
            </li>
            <li class="nav-item container-fluid">
              <a href="line_up.html" class="nav-link">Line-Up</a>
            </li>
            <li class="nav-item container-fluid">
              <a href="info.html" class="nav-link">Info</a>
            </li>
          </ul>
          <div class="col-lg-4 d-flex justify-content-evenly p-3 py-lg-0">
            <a href="#"><i class="bi bi-facebook h4"></i></a>
            <a href="#"><i class="bi bi-twitter h4"></i></a>

            <a href="#"> <i class="bi bi-instagram h4"></i></a>
            <a href="#">
              <i class="bi bi-youtube h4"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
   `;
  }
}

customElements.define("my-header", myHeader);

class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
     <footer class="container-fluid">
      <div class="row h-100">
        <div class="col-lg-4 d-flex align-items-center justify-content-center">
          <div class="" id="copyright"></div>
        </div>
        <div class="col-lg-4 d-flex align-items-center justify-content-center">
          <a class="navbar-brand mx-lg-5 footer-brand" href="home.html"
            ><i class="bi bi-cassette-fill"></i> Metal Wood</a
          >
        </div>
        <div class="col-lg-4 d-flex align-items-center justify-content-center">
          <img src="Images/welsh-icon.png" alt="" width="50" />
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define("my-footer", myFooter);

const paragraph = `
      <p class="m-0">
        Copyright &copy; ${new Date().getFullYear()} Metal Wood 
      </p>
    `;

document.getElementById("copyright").innerHTML = paragraph;
