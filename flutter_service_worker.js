'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "65de65883181aa0c6d0dd4266b3fb462",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c451bf5e2b902172f53825321b3c7a34",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1ef4691748f9f5d44be181e54cdc9687",
".git/logs/refs/heads/main": "0b5ff8557dc41f05edb6553dbf3d0821",
".git/logs/refs/remotes/origin/main": "de784534d31da969fe8b0902b3a627e8",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/1858129b42e0fa6572e8a118fd0a65c8945fb6": "db7c1bb34aa15748f98e72562a1381cd",
".git/objects/07/5c5391cd9e8256363331ad8ad2418833bd9f8f": "a9519112f26143c5e989f598eb561389",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/12/fcc70bb4ddf3ddf12d81f67310110fc205ed5c": "dd61f483e2463288c7a3bbab69e78352",
".git/objects/13/ee73b2cbfadbf76e12a6222509bc25e7af1ed2": "fac2e5e2cef7a40175bff7f23b4f37c3",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1c/cb2aaaced84793aaa8f2d69973ccafc67545c0": "55953d0fc13248969adb63d2e8fee06d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/b8d9db67cb969241894399bb5fb23b849b833f": "f55f655711a06991cc94a0eb0fe64798",
".git/objects/38/e48f1eeaa5de460a5b457f1105c27eeb98a03d": "fcd4b617821eebe8411b03d0a4eb2e3b",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4c/a8a727241d1405941df01f319192492c9fb5ef": "315ad7fbef7eb731de5a20f922b57045",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/73ed0988fd58eafeb6f988892e320526de2b52": "aa6b2816324e9bd2e78d111eac009328",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/e91f2984b54a523814e80fa4c9931d73e1bf05": "9b43bfe8f307e16275d4d8c15bc1e930",
".git/objects/5d/cacf3a034b66c15612c0b2e709c9b51446ce68": "aeb83b536c0558b4352ea80f6ab669ab",
".git/objects/72/d0d4bc8cab13421acc12858df2f8566cca347d": "61fbfbc2a3e80f989c864b00a70025d5",
".git/objects/7b/1105a8eb1018261e093882d20063ed842a745e": "a616135a5421e11cbe7fc8f6a7efde0a",
".git/objects/7f/a043312b67cd83d052d1be0708420a7b7cbff1": "3b7390e2c608ba732b9407ff272e9ff2",
".git/objects/81/3de4a6112a74ade6d1631601ff842f48235cf7": "2f579471fa1a40116ca5e47326357ea8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0622f233471006bb066e4571f05c8ac1820a23": "d950c0212f652994ee2b36b1afcc2550",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/b13b4bb76886caff8707c56b217fe522c20485": "4a64cc659f820cddcbff5b47c2adaf68",
".git/objects/92/30af38c23b214f5ac502dcd839b5b3d7a1c68f": "2aa073cb5d4b91456d4536e667219d02",
".git/objects/92/7d73adf61a159c1b76fed2a47a9b116caca3a4": "59e9ad367faa81c7513897e83b8a09c5",
".git/objects/96/de13b7527b511efb843f77ce348ee6476201da": "3ea242bf56c69ed434c5c11d648648ce",
".git/objects/a6/34f3a1cc55db3ed9cc569c2e22dfacf0726b39": "0a0754ed1cbae1c1cececbb8ead1e98b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d3/75065c644ac511be5795ea3c53baafc9826cca": "05b6ba2915730e654e6183613d923c06",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/5ae83bfca987ee1860f266e4547729e2018c87": "56ccdf5ddc3364b7b547047c656ee085",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fa/41ef079dc0eb1a03722beff66bb0133dafeb60": "0a95ff2eff8ce5d8aeac51b55ac81813",
".git/objects/fe/0ecc1933070472790ed056427b0ce8bc929502": "f43a76b2ecd2e7c190ac21abac7e8c93",
".git/refs/heads/main": "6fd277d2053662d510f9ae4b79725a6b",
".git/refs/remotes/origin/main": "6fd277d2053662d510f9ae4b79725a6b",
"assets/AssetManifest.bin": "735a1122b907d8e55676ee700b3f138b",
"assets/AssetManifest.bin.json": "d164e530709c941b5505aff61e36bb7b",
"assets/AssetManifest.json": "007696e0b56381929d70475dc54ce8ee",
"assets/assets/images/icons8-teaching-100%2520(1).png": "9a83e6fcefd7dedef72349dd04c90ce2",
"assets/assets/images/icons8-teaching-100.png": "83c252a9f2e044257299723774c94048",
"assets/assets/images/logo.png": "9a83e6fcefd7dedef72349dd04c90ce2",
"assets/FontManifest.json": "70db17499e39ade70d28ccfdc4b3d741",
"assets/fonts/Exo2-Bold.ttf": "6ff0dac2e0aa119ce343985a2d2135ea",
"assets/fonts/Exo2-Light.ttf": "d9fc9c9d09bcbd4ba7744ce7a21f41fe",
"assets/fonts/Exo2-Medium.ttf": "485e55408ec1891ffa770f531615969c",
"assets/fonts/Exo2-Regular.ttf": "6c0711b329df8e1d98bc14007fbf6013",
"assets/fonts/Exo2-Thin.ttf": "fcb398376549cb21a116c190f7bae970",
"assets/fonts/MaterialIcons-Regular.otf": "3e18a86759bd27f3ed1f7b9c960497bc",
"assets/NOTICES": "65f08ee84043608dbb4afd9bdffea4fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ae2418c4dfab025e2fee8d4c87206e76",
"/": "ae2418c4dfab025e2fee8d4c87206e76",
"main.dart.js": "0cb968d17ca5a435a362465732064dca",
"manifest.json": "a2d85f355cbc1458e6da6092a4c4302e",
"version.json": "f122b5838abbc0f81ff8b50ef50d82d2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
