class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <nav class="navbar navbar-expand-lg p-0 sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand mx-lg-5" href="home.html"><i class="bi bi-cassette-fill"></i>Metal Wood</a>
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
              <a href="gallery.html" class="nav-link">Gallery</a>
            </li>
          </ul>
          <div class="col-lg-4 d-flex justify-content-evenly p-3 py-lg-0">
            <a href="https://www.facebook.com/" target="_blank"><i class="bi bi-facebook h4"></i></a>
            <a href="https://www.twitter.com/" target="_blank"><i class="bi bi-twitter h4"></i></a>

            <a href="https://www.instagram.com/" target="_blank"> <i class="bi bi-instagram h4"></i></a>
            <a href="https://www.youtube.com/watch?v=ZeMlQEWEg2Q" target="_blank">
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
     <footer class="container-fluid py-5">
      <div class="row h-100">
      <div class="col-lg-4">
          <ul
            class="navbar-nav me-auto mb-2 mb-lg-0 col-lg-8 p-0 d-flex flex-column justify-content-center h-100 "
          >
            <li class="nav-item container-fluid">
              <a class="nav-link" href="home.html"><b>Home</b></a>
            </li>
            <li class="nav-item container-fluid">
              <a class="nav-link" href="ticket.html"><b>Ticket</b></a>
            </li>
            <li class="nav-item container-fluid">
              <a href="getting_here.html" class="nav-link"><b>Getting Here</b></a>
            </li>
            <li class="nav-item container-fluid">
              <a href="line_up.html" class="nav-link"><b>Line-Up</b></a>
            </li>
            <li class="nav-item container-fluid">
              <a href="gallery.html" class="nav-link"><b>Gallery</b></a>
            </li>
            <li class="nav-item container-fluid">
              <a href="contact.html" class="nav-link"><b>Contact us</b></a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 d-flex align-items-center justify-content-center flex-column gap-3">
         <h3><b>Contact us</b></h3>
          <form>
            <label for="fname">Name:</label><br />
            <input type="text" id="name" name="name" placeholder="Name" class="w-100" /><br />
            <label for="email" class="mt-1">Email</label><br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              class="w-100"
            /><br />
            <textarea name="message" id="message" cols="30" rows="5" class="mt-2"></textarea
            ><br />
            
            <input type="submit" value="Submit" class="w-100 bg-warning"/>
            
          </form>
          <div class="" id="copyright"></div>
        </div>
        
        <div class="col-lg-4 d-flex justify-content-center align-items-center ">
          <img src="Images/welsh-icon.png" alt="" width="100" height="100" />
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

function viewLineup() {
  document.location.href = "line_up.html";
}

function viewTicket() {
  document.location.href = "ticket.html";
}
