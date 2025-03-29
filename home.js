import navbar from "./navbar/navbar.js";

$(document).ready(function () {
  navbar.create();
  $("#selectResumeTemplate").on("click", function () {
    openTemplates();
  });
});

function openTemplates() {
  let container = $("#templateContainer");

  if (container.length === 0) {
    $("body").append('<div id="templateContainer"></div>'); // Create if not exists
    container = $("#templateContainer");
  }

  container.load("./templateTypes.html", function (response, status, xhr) {
    if (status === "error") {
      console.error("Error loading template:", xhr.status, xhr.statusText);
      return;
    }

    $(this).dialog({
      modal: true,
      width: 1200,
      position: { my: "top", at: "top", of: window },
      title: "Select Template",
      open: function (event, ui) {
        $("#templates-bucket .card").on("click", function () {
          $("#templates-bucket .card").removeClass("select-item");
          $(this).addClass("select-item");
        });
      },
      buttons: [
        {
          text: "Select",
          class: "btn btn-primary",
          click: function () {
            window.open("./templateform.html", "_blank");
            $(this).dialog("close");
          },
        },
        {
          text: "close",
          class: "btn btn-outline-primary",
          click: function () {
            $(this).dialog("close");
          },
        },
      ],
    });
  });
}
