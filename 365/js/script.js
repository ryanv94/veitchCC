var width = window.screen.width;
var height = window.screen.height;

//Convert to string for concatenation
var strWidth = width.toString();
var strHeight = height.toString();
var concatRes = strWidth.concat('x', strHeight);

if (typeof newrelic == 'object') {
newrelic.setCustomAttribute('screenWidth', width);
newrelic.setCustomAttribute('screenHeight', height);
newrelic.setCustomAttribute('screenResolution', concatRes);
newrelic.setCustomAttribute('referrer', document.referrer)
}

new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP candidate:', entry.startTime, entry);
    newrelic.setCustomAttribute('lcpEntry', entry.startTime);
  }
}).observe({type: 'largest-contentful-paint', buffered: true});

