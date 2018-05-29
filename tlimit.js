if(window.tlimit_count == undefined)
  window.tlimit_count = 10
browser.tabs.onCreated.addListener(t=> {
  if(t.index > window.tlimit_count) browser.tabs.remove(t.id)
} )
