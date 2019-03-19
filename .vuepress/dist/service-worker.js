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
    "revision": "5a5f71c2fdbdaba7175d9142bae82526"
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
    "url": "assets/js/app.e072c250.js",
    "revision": "344297d282bfe43b1dff33219c8ef8b2"
  },
  {
    "url": "guide/index.html",
    "revision": "134485a37b3be854eb3dc7e231598837"
  },
  {
    "url": "guide/More Informations.html",
    "revision": "5db8e909c79800cf75b9ea73dba582ea"
  },
  {
    "url": "index.html",
    "revision": "60dd20896a5563e46ae508fde1efa9c4"
  },
  {
    "url": "mongodb/index.html",
    "revision": "3745b62eaf31b5a170eaaf11f53da24a"
  },
  {
    "url": "mongodb/Introduction.html",
    "revision": "73c6534c7212ae259dfe1dd7c3788373"
  },
  {
    "url": "mongodb/Test Informations.html",
    "revision": "db24da17059e5bd94acee81fff3237bd"
  },
  {
    "url": "setup-project/create-jenkins.html",
    "revision": "7031a55b156d98a03974e9e0c30e0bbc"
  },
  {
    "url": "setup-project/create-repository.html",
    "revision": "d7973d77edec875dd26a337c74e886c8"
  },
  {
    "url": "setup-project/gitlab-integrate-webhook.html",
    "revision": "9d808ac53808515c4162ebc01773e726"
  },
  {
    "url": "setup-project/index.html",
    "revision": "f77e4cbfd122a482f875adf92be68ffd"
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
