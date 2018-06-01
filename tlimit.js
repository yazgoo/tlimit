if(window.localStorage.getItem("tlimit_count") == undefined)
  window.localStorage.setItem("tlimit_count", "" + 10)
if(window.canvas == undefined)
  window.canvas = document.createElement('canvas');
function drawIcon(value) {

  var ctx = window.canvas.getContext('2d');
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  var lines = [
    {width: 0, color: "black", action: () => {ctx.lineTo(100,100); ctx.closePath(); ctx.clip();}},
    {width: 20, color: "#46a3ae", action: () => ctx.stroke()},
    {width: 5, color: "#235055", action: () => ctx.stroke()}
  ]

  for(i in lines) {
    ctx.beginPath();
    ctx.lineWidth="" + lines[i].width;
    ctx.strokeStyle=lines[i].color;
    ctx.moveTo(0,100);
    ctx.lineTo(30,0);
    ctx.lineTo(100,0);
    lines[i].action()
  }

  var grd=ctx.createLinearGradient(0,0,100,100);
  grd.addColorStop(0,"#9de2ea");
  grd.addColorStop(1,"#235055");
  ctx.fillStyle=grd;
  ctx.fillRect(0, 0, 100, 100);

  ctx.textAlign = "center"
  ctx.font="70px Arial, Helvetica, sans-serif";
  ctx.lineWidth="1"
  ctx.fillStyle="#ffffff";
  ctx.strokeStyle="#134045";
  ctx.fillText(value,60,70);
  ctx.strokeText(value,60,70);

  browser.browserAction.setIcon({imageData: ctx.getImageData(0, 0, 100, 100)})
}
window.drawIcon = drawIcon
window.drawIcon(window.localStorage.getItem("tlimit_count"))
browser.tabs.onCreated.addListener(t=> {
  browser.tabs.query({currentWindow: true}).then( tabs => {
    var val = parseInt(window.localStorage.getItem("tlimit_count"))
    if(tabs.length > val) browser.tabs.remove(t.id)
  })
})
