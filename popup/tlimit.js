browser.runtime.getBackgroundPage().then(win => {
  function showVal() {
    document.getElementById("val").innerHTML = "" + win.tlimit_count
  }
  function limit(increment) {
    if ((win.tlimit_count + increment) > 1)
      win.tlimit_count += increment
    showVal()
  }
  document.getElementById("minus").addEventListener("click", e => limit(-1))
  document.getElementById("plus").addEventListener("click", e => limit(1))
  showVal()
})
