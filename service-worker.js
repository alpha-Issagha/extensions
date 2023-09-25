
chrome.runtime.onInstalled.addListener(() => {
    
    //receiving a messag
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
        console.log(request.greeting);
        console.log(sender.tab ?
                    "from the content script:" + sender.tab.url :
                    "from the extension");
        sendResponse({farewell: "On est en "+request.greeting});
    });
});



chrome.tabs.onActivated.addListener(function (tab) {
  chrome.tabs.query ({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    //Sending message to the active tab
    chrome.tabs.sendMessage(activeTab.id, {msg:"from the background"}, function(response){
      console.log(response);
    });
    console.log(activeTab);
  });
});
