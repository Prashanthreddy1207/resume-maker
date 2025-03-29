var navbar = {
  create: function () {
    var navbarContainer = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
        <img src="./Resources/images/logo.avif"/>
        <h1>Resume Builder</h1>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto mr-5">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    `;
    // Inject the Bootstrap navbar into the #navbar container
    $("#navbar").html(navbarContainer);

    // Add click event to navbar items to toggle the 'active' class
    $(".nav-item").click(function () {
      // Remove active class from all items
      $(".nav-item").removeClass("active");
      // Add active class to the clicked item
      $(this).addClass("active");
    });
  },
};

export default navbar;
