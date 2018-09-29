
chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = chrome.extension.getURL('dist/index.html');
  chrome.tabs.create({ url: newURL });
});
