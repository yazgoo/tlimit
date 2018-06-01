browser.runtime.getBackgroundPage().then(win => {
  function showVal() {
    var val = document.getElementById("val")
    val.value = "" + win.localStorage.getItem("tlimit_count")
    win.drawIcon(val.value)
    val.size = val.value.length
  }
  function updateVal() {
    var val = document.getElementById("val")
    var value = parseInt(val.value)
    if (isNaN(value)) {
      showVal()
    } else {
      win.localStorage.setItem("tlimit_count", "" + value)
    }
  }
  function limit(increment) {
    var val = parseInt(win.localStorage.getItem("tlimit_count"))
    if ((val + increment) > 1)
    {
      val += increment
      win.localStorage.setItem("tlimit_count", "" + val)
    }
    showVal()
  }
  document.getElementById("minus").addEventListener("click", e => limit(-1))
  document.getElementById("plus").addEventListener("click", e => limit(1))
  document.getElementById("val").addEventListener("change", e => updateVal())
  showVal()
})
