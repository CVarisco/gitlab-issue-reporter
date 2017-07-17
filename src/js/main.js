import Storage from "./storage";

const GIR = {
  init() {
    $(window).on("load", () => {
      $("select.dropdown").dropdown();
    });
  }
};

$("#submit").on("click", () => {
  chrome.storage.sync.get(
    {
      apikey: null,
      projectName: null,
      gitlabUrl: null
    },
    function(items) {
      console.log(items);
    }
  );
});

GIR.init();
