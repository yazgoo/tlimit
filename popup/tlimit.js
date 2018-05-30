browser.runtime.getBackgroundPage().then(win => {
  function showVal() {
    var val = document.getElementById("val")
    val.value = "" + win.tlimit_count
    val.size = val.value.length
  }
  function updateVal() {
    var val = document.getElementById("val")
    var value = parseInt(val.value)
    if (isNaN(value)) {
      showVal()
    } else {
      win.tlimit_count = value
    }
  }
  function limit(increment) {
    if ((win.tlimit_count + increment) > 1)
      win.tlimit_count += increment
    showVal()
  }
  document.getElementById("minus").addEventListener("click", e => limit(-1))
  document.getElementById("plus").addEventListener("click", e => limit(1))
  document.getElementById("val").addEventListener("change", e => updateVal())
  showVal()
})
