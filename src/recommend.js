console.log('------recommend load')
const dom = document
chrome.runtime.onMessage.addListener((request, render, sendResponse) => {
  if (request.message === 'GET_TOPIC_DATA') {
    const title = dom.getElementsByTagName('title')[0].textContent
    const descriptionElement = dom.querySelectorAll('meta[name=description]')[0]
    const description = descriptionElement ? descriptionElement.getAttribute('content') : title
    const link = location.href

    sendResponse({
      title,
      link,
      description
    })
  }
})
