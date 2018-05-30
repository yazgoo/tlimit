if(window.localStorage.getItem("tlimit_count") == undefined)
  window.localStorage.setItem("tlimit_count", "" + 10)
browser.tabs.onCreated.addListener(t=> {
  browser.tabs.query({currentWindow: true}).then( tabs => {
    var val = parseInt(window.localStorage.getItem("tlimit_count"))
    if(tabs.length > val) browser.tabs.remove(t.id)
  })
})
