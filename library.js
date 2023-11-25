var BrowserDetect = (function() {
  function detectBrowser() {
    var userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes('chrome')) {
      console.log('You are using Chrome.');
    } else if (userAgent.includes('firefox')) {
      console.log('You are using Firefox.');
    } else if (userAgent.includes('safari')) {
      console.log('You are using Safari.');
    } else if (userAgent.includes('edge')) {
      console.log('You are using Microsoft Edge.');
    } else if (userAgent.includes('msie') || userAgent.includes('trident')) {
      console.log('You are using Internet Explorer.');
    } else if (userAgent.includes('opera') || userAgent.includes('opr')) {
      console.log('You are using Opera.');
    } else if (userAgent.includes('brave')) {
      console.log('You are using Brave.');
    } else if (userAgent.includes('vivaldi')) {
      console.log('You are using Vivaldi.');
    } else if (userAgent.includes('ucbrowser')) {
      console.log('You are using UC Browser.');
    } else if (userAgent.includes('yabrowser')) {
      console.log('You are using Yandex Browser.');
    } else if (userAgent.includes('maxthon')) {
      console.log('You are using Maxthon.');
    } else if (userAgent.includes('puffin')) {
      console.log('You are using Puffin.');
    } else if (userAgent.includes('seamonkey')) {
      console.log('You are using SeaMonkey.');
    } else if (userAgent.includes('silk')) {
      console.log('You are using Amazon Silk.');
    } else if (userAgent.includes('edgeios')) {
      console.log('You are using Edge (iOS).');
    } else if (userAgent.includes('edgios')) {
      console.log('You are using Edge (iOS).');
    } else if (userAgent.includes('samsungbrowser')) {
      console.log('You are using Samsung Internet.');
    } else if (userAgent.includes('midori')) {
      console.log('You are using Midori.');
    } else if (userAgent.includes('epiphany')) {
      console.log('You are using Epiphany.');
    } else if (userAgent.includes('konqueror')) {
      console.log('You are using Konqueror.');
    } else if (userAgent.includes('iceweasel')) {
      console.log('You are using Iceweasel.');
    } else if (userAgent.includes('palemoon')) {
      console.log('You are using Pale Moon.');
    } else if (userAgent.includes('waterfox')) {
      console.log('You are using Waterfox.');
    } else if (userAgent.includes('sleipnir')) {
      console.log('You are using Sleipnir.');
    } else if (userAgent.includes('blackberry')) {
      console.log('You are using BlackBerry Browser.');
    } else if (userAgent.includes('qupzilla')) {
      console.log('You are using QupZilla.');
    } else if (userAgent.includes('otter')) {
      console.log('You are using Otter Browser.');
    } else if (userAgent.includes('palemoon')) {
      console.log('You are using Pale Moon.');
    } else if (userAgent.includes('falkon')) {
      console.log('You are using Falkon.');
    } else if (userAgent.includes('seamonkey')) {
      console.log('You are using SeaMonkey.');
    } else if (userAgent.includes('avantbrowser')) {
      console.log('You are using Avant Browser.');
    } else if (userAgent.includes('iridium')) {
      console.log('You are using Iridium.');
    } else if (userAgent.includes('baidubrowser')) {
      console.log('You are using Baidu Browser.');
    } else if (userAgent.includes('coc_coc_browser')) {
      console.log('You are using Cốc Cốc Browser.');
    } else if (userAgent.includes('swing')) {
      console.log('You are using Swing Browser.');
    } else if (userAgent.includes('cyberfox')) {
      console.log('You are using Cyberfox.');
    } else if (userAgent.includes('dragon')) {
      console.log('You are using Comodo Dragon.');
    } else if (userAgent.includes('iceweasel')) {
      console.log('You are using Iceweasel.');
    } else if (userAgent.includes('yuzu')) {
      console.log('You are using Yuzu Browser.');
    } else if (userAgent.includes('greenbrowser')) {
      console.log('You are using GreenBrowser.');
    } else if (userAgent.includes('sputnikbrowser')) {
      console.log('You are using Sputnik Browser.');
    } else if (userAgent.includes('palemoon')) {
      console.log('You are using Pale Moon.');
    } else if (userAgent.includes('chromium')) {
      console.log('You are using Chromium.');
    } else if (userAgent.includes('whale')) {
      console.log('You are using Whale Browser.');
    } else if (userAgent.includes('qutebrowser')) {
      console.log('You are using Qutebrowser.');
    } else {
      console.log('Unknown browser.');
    }
  }

  // Public API
  return {
    detect: detectBrowser
  };
})();

// Example of usage
BrowserDetect.detect();
