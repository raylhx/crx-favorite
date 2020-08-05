console.log('------recommend load')
chrome.runtime.onMessage.addListener((request, render, sendResponse) => {
  if (request.message === 'GET_TOPIC_DATA') {
    const title = document.getElementsByTagName('title')[0].textContent
    const descriptionElement = document.querySelectorAll('meta[name=description]')[0]
    const description = descriptionElement ? descriptionElement.getAttribute('content') : title
    const link = location.href

    sendResponse({
      title,
      link,
      description
    })
  }
})
