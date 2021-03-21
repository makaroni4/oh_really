(function() {
  var initMenu = function() {
    const body = document.querySelector("body");
    const anchor = document.createElement("div");
    anchor.id = "oh-really-mega-app";

    document.body.appendChild(anchor);

    var app = new Vue({
      el: "#oh-really-mega-app",
      computed: {
        popupIsActive() {
          return true;
        }
      },
      template: `
        <div
          v-if="popupIsActive"
          class="oh-really-popup">
          HELLO WORLD
        </div>
      `
    });
  }

  initMenu();
})();
