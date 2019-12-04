/* eslint-disable no-undef */
chrome.runtime.setUninstallURL("http://www.addiyos.com/uninstall/");
chrome.runtime.onInstalled.addListener(function(object) {
  chrome.tabs.create(
    {
      url: "http://www.addiyos.com/install"
    },
    function(tab) {}
  );
});
// Opens new tab when clicked on extension icon
chrome.browserAction.onClicked.addListener(function(activeTab) {
  var newURL = "chrome://newtab";
  chrome.tabs.create({
    url: newURL
  });
});
chrome.runtime.onMessage.addListener(function(request) {
  if (request.do === "uninstall") {
    chrome.management.uninstallSelf({
      showConfirmDialog: true
    });
  }
});
