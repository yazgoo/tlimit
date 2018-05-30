if(window.tlimit_count == undefined)
  window.tlimit_count = 10
browser.tabs.onCreated.addListener(t=> {
  browser.tabs.query({currentWindow: true}).then( tabs => {
    if(tabs.length > window.tlimit_count) browser.tabs.remove(t.id)
  })
})
