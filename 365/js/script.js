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
}

