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
    "revision": "1ffc447b002f540cd6913db01d05993a"
  },
  {
    "url": "assets/css/0.styles.0b4e2a02.css",
    "revision": "953c09c24339f27c6651e249f59a94eb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2e79e07e.js",
    "revision": "0278569c9d894b8bb8350710b1684c50"
  },
  {
    "url": "assets/js/11.94bc83f6.js",
    "revision": "2d13d126d87b7c6c6b737c911097a866"
  },
  {
    "url": "assets/js/12.01843291.js",
    "revision": "5c1feedb7e9429dc9e00f014f754acf5"
  },
  {
    "url": "assets/js/13.82c3e404.js",
    "revision": "8b97faad765d1672d730f12da54f1b7f"
  },
  {
    "url": "assets/js/2.134f017b.js",
    "revision": "48330e6cd43f4ab19848edbf2bc9e538"
  },
  {
    "url": "assets/js/3.9b8d7d59.js",
    "revision": "e3e727e3c07db2088586c76d7ee18aa2"
  },
  {
    "url": "assets/js/4.f0ea4ccb.js",
    "revision": "e7525193201b8ce90424cb48d6677c1b"
  },
  {
    "url": "assets/js/5.d6291e0b.js",
    "revision": "a3e8c2a2d114520f919ec0bcca3f82ea"
  },
  {
    "url": "assets/js/6.df4027ad.js",
    "revision": "c0e6a94a0854bf8b0a24a7583c452581"
  },
  {
    "url": "assets/js/7.6c255831.js",
    "revision": "d8097c457c193059e867281b756065a4"
  },
  {
    "url": "assets/js/8.123076cf.js",
    "revision": "7dda8efb36d4bca89723f5fce802a5bf"
  },
  {
    "url": "assets/js/9.cce04ca2.js",
    "revision": "2735f517faa5b145ea082509473a9aee"
  },
  {
    "url": "assets/js/app.3f2fa6e9.js",
    "revision": "fbe54f8dcfe668e9bcc1c69c7262badd"
  },
  {
    "url": "guide/index.html",
    "revision": "29d2fc166acbccaf931d2754cdb04a8f"
  },
  {
    "url": "guide/More Informations.html",
    "revision": "86e0cd89228777559fe95e938c6414d4"
  },
  {
    "url": "index.html",
    "revision": "d7a25f15c6a84d5cbdf0e175b19e0dfa"
  },
  {
    "url": "mongodb/index.html",
    "revision": "9568edfb55094ea1c2d7ff6f8446cc94"
  },
  {
    "url": "mongodb/Introduction.html",
    "revision": "3bb45032272eb2f61d0e5e687d8f7b74"
  },
  {
    "url": "mongodb/Test Informations.html",
    "revision": "71624fc86a0c1b913bc20e3699a4ddf7"
  },
  {
    "url": "setup-project/create-jenkins.html",
    "revision": "6350f739b8aa2083bbf44841a8f45de1"
  },
  {
    "url": "setup-project/create-repository.html",
    "revision": "3c48719382a86059aa1783a4db8441bc"
  },
  {
    "url": "setup-project/gitlab-integrate-webhook.html",
    "revision": "8b3209708e6b65163e5cc0a74ddeeefd"
  },
  {
    "url": "setup-project/index.html",
    "revision": "19313cdb2c5affad67ac19ae0363176d"
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
