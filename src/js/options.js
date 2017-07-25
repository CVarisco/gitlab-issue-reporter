import Storage from "./storage";

const GIR = {
  init() {
    $(window).on("load", () => {});
  }
};

$("#submit").on("click", () => {
  chrome.storage.sync.set(
    {
      apikey: $("#apikey").val(),
      projectName: $("#projectName").val(),
      gitlabUrl: $("#gitlabUrl").val()
    },
    function() {
      console.log("asd");
    }
  );
});

GIR.init();