console.log("Test");
// Content Script

function sendToServiceWorker() {
    chrome.runtime.sendMessage({greeting: 2023}, function(response){
    console.log(response.farewell);
  });
}

window.addEventListener("load", function() {
  console.log("Page web complètement chargée");
  // Créez un bouton dans la page web
  const button = document.createElement("button");
  button.textContent = "Envoyer un message";
  button.id = "my-button";
  button.addEventListener("click", function() {
    sendToServiceWorker();
  });

  document.body.append(button);
});

//receive message
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
   console.log(message);
   sendResponse({message: "response de la tab active"});
});
