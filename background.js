// Listen for a click on the camera icon.
chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript(null, { file: "remove_jira_board_frame.js" });
});
