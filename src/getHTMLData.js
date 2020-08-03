const host = this
console.log(host)

chrome.tabs.query({
  active: true,
  currentWindow: true
}, (tabs) => {
  const tabID = tabs.length ? tabs[0].id : null
  chrome.tabs.executeScript(tabID, { file: './recommend.js' }, () => {
    chrome.tabs.sendMessage(tabID, { message: 'GET_TOPIC_DATA' }, (res) => {

    })
  })
})
