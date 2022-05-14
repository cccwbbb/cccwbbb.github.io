/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "77be20dda522ee4e775f12cf03a19004"
  },
  {
    "url": "accumulate/css.html",
    "revision": "740f24c51759b407976449d5f2050c89"
  },
  {
    "url": "accumulate/index.html",
    "revision": "5a398fa0a8be29a618f4e92536b76e78"
  },
  {
    "url": "algorithm/index.html",
    "revision": "c704dab6016ac6de22d77f472981af03"
  },
  {
    "url": "assets/css/0.styles.2aa6dd87.css",
    "revision": "dc334ac593018ecdcb8407de29d2621e"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/2.858e80da.js",
    "revision": "59b9e09855a16d382db7d8ff58d74b0d"
  },
  {
    "url": "assets/js/3.3ede1f01.js",
    "revision": "9b7caca6b3a043c92a0bb63cc1c94984"
  },
  {
    "url": "assets/js/4.1c53ea03.js",
    "revision": "3da301e45285bd306ef5507a2456b29f"
  },
  {
    "url": "assets/js/5.43448822.js",
    "revision": "d8edf14b4b928c74b78fdcadb12300f7"
  },
  {
    "url": "assets/js/6.fc00f5f8.js",
    "revision": "fcd40563bfd2a52cf3bb9b417a7954a9"
  },
  {
    "url": "assets/js/7.542829af.js",
    "revision": "6fb630d29f61b3e28358ee009214e4f2"
  },
  {
    "url": "assets/js/8.352fbec7.js",
    "revision": "3d58ad578e8bc0c4fbc6901932dfd88d"
  },
  {
    "url": "assets/js/9.15149801.js",
    "revision": "1f7d64e683db05eb1dc587b15591d76d"
  },
  {
    "url": "assets/js/app.38e596ac.js",
    "revision": "eafa436da58ef2ced2fade1095a26dcb"
  },
  {
    "url": "guide.html",
    "revision": "97ac734e6a643ce59db7dc602833d58d"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "ea0b66f3f6851cfbfd1ed382fa06d8f4"
  },
  {
    "url": "others/index.html",
    "revision": "87fa613f04e88d3cbd4bed21727ff536"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
