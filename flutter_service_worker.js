'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1e38ec89bb5320a8a02e9e03df0d6241",
".git/config": "4bfddf084e467d699590ce01fa30ccf8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b9898d52d719c6c1b8fa9d66f1f1d052",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "5d431b5f68c42257d19246c91c3bf06d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4379cfdc020b51b8c9eb983d7e48a709",
".git/logs/refs/heads/main": "ae723ee9a3185929329ff10682767ec1",
".git/logs/refs/remotes/origin/main": "17eea66bcf18c7eb407a94de02473a5f",
".git/objects/01/9fcd0b58957441c3fde88cff71bbaba483d2c9": "e2ed13afce09dc95893b395453e56d2c",
".git/objects/02/a07193f8a9ed737427c413619dca7517e2699a": "84ca6058eb1c40e35586f70f03b60c3a",
".git/objects/06/eb9cba86464ad5b9110d98b5331bc23c350a88": "502f32df7b49ca48d35209b4f634b239",
".git/objects/07/6f6fcad341c20f36a1904e112fb47ac2f92a17": "2f0f5da99970ef0eded6b40053b00100",
".git/objects/0c/44fc19928a7ba64035f39ec130fc6841851c64": "967336a4a29594851148dd30266daf3c",
".git/objects/0c/522956f23b91845406b8ffcc1ac30a7d56ec10": "616d2a06f1dc58742aef741c0bb41bee",
".git/objects/0c/98ec6d420a2624e67f83ed3d015681a2c5ba3b": "7f7bb539a72fbddadec2395959ea2b77",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/11/bc016c95e6e5ad9a5d41cade51303d745ddde3": "dc2b8f044e9251174326475c3323847c",
".git/objects/16/8ea93576b47a638e998dcdd652d8555b9f1d99": "17eb66d6ef5030b46ae41e0b2e596d74",
".git/objects/1b/95db906fa6c2842b2c4f776aba35e985558d37": "c4745aebc2a33029ca95ece17508ffbb",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/6758f1d7987faa43b956f192492441228e6e8b": "1d70c41330a6f79e08f3efca2fcc7bf5",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/432750fb7093d83a9c019719d01c0d542b9207": "2aec49344e3bb12a0bfa6ab5d35410a1",
".git/objects/2a/5121bf8c3ea1020167b0fecac4337cf78d7bc3": "30f74ae8c021b96d50c6e978829c6ad8",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/bd71b8d5ad232ebfe9a4f2b93af1f31af02c97": "d23ccfd3cfa729bd2350547dd71b8cee",
".git/objects/39/c760d1bb8e752eb0bbce3c0a24d5dcd3b7a5a7": "3dc60f328e23af38094b48d1e47f2969",
".git/objects/3c/81e80d14ef98f590cceb1451fa7722d64f4f94": "63a3ef2ce62a4ecfa08bc2c3c5092923",
".git/objects/3e/aef506c344e0679effdb89d0ae97dfce0918c8": "c5f9df3ae404d4900af301c10d5524ec",
".git/objects/44/158bcf3067f8f0433d978f19ac8d3c13ada283": "09d5a885f4d68c466965466c81bf3b7a",
".git/objects/45/c2d77460d3ba3e286d1e2255bed552d82fc0f2": "067a3a09b52cd7a690b931c06a710602",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/d94d58a413ab6749b77503479e4e585620c5ad": "a0d757bbb32ecef80cd91ade7f76e170",
".git/objects/4d/8e6f05ca6867d48d9c63536156f8714bd4c0d2": "17946be5fd571095a12cc3120eafef0d",
".git/objects/4e/037807cb1432440473892b2ca231b0ff7a3e86": "f6128ffb58a4d30d0a0046b8039e380a",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/99e331cc1177a1e4d170fb0632537700ae6aa1": "7cc6fa459753bfe443f51b6b41c870f8",
".git/objects/51/59b3cc276be4fed29336b87112b13b6cedb141": "26b2c618883e196bb53a2b00d19d85e7",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/54/6382b3ee8f60b09413a32e2f3931c5b0004976": "8c10c2ac9383ed86fc8f7656c1b03613",
".git/objects/56/c5ae97f58c5c283445a45262896c45d8c8113a": "fb3c78079f86e3a4558f937a0c5b34e7",
".git/objects/65/29bd038d658d6ce3bb1e35b4eea4ed8541bf02": "4c9d37e623db325034dccc3bb8a53c93",
".git/objects/67/b607a021a2eda219a893bbe81f09fd586217ed": "4c9e10512c8d3a0107c689678099f7b8",
".git/objects/68/1c6caae3aa775d45477c4744ff490a2a5359ed": "53472f21b322535b34b358dc4586646c",
".git/objects/6b/0ba9a35380b1cfb6c40135a77ba7f1cdd09c92": "812d713482cd41689ac9059dda94bcff",
".git/objects/6e/5599ffc5079184bc0d1ac200a7f1623d969548": "3e91b6cf58733fb1815f8193578d21c2",
".git/objects/6e/73ca3afc5c2aca777bb67ba053837fbe7459f5": "54ba24f79dc5610ba7e70550bc9c5e8a",
".git/objects/71/8772aa3c14547e6abf1ab7891bca6bec7505d9": "82dfca5fdd873ba3f0faa8f0a04fa927",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/27abe478efadcc3902f835486f458c6b89a4f2": "01e8a6ffe339fd65c5e2d9df4e0a70e4",
".git/objects/78/325c40cd6669609873620413afa4c25fe5955a": "4e6cc46fc2fd41b63a283ae90c6d2abd",
".git/objects/79/1713137ee8702e260f83e04c9fd4f114db1ad4": "05145c67503b86d593b52887a43d034d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/e8f845eacfa3cf528265a34243165771437e20": "ea3e84adc30fdf72df117e134628ed39",
".git/objects/82/564a216e17ed45c740468453fcb6bda82e7249": "23cff0b9621a66e689e9bf2cd2fb85b5",
".git/objects/83/c8866838e7e3c8856774fd6779511b9262acd2": "781abf27aec2be4c8f9a7ebad7558332",
".git/objects/83/ea3f86be37370766e010a4d219fd4e1cf2c90a": "ebd0df71c9bd95fd64d098d0f8410e05",
".git/objects/85/1cfd402a4b4e9da27ce9255c49f8f1e6c80d3e": "b37cdaacf06997e538ced040bea16985",
".git/objects/88/65213c8c3abc0f3602a841cdd8a4909e7f91ee": "fa530aa52ac7bef63713339c9a85f4ef",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0a69d2a8cb6e50d7a0fb37d039540e71c9c42c": "addb32690f4a7381a857ee599bf305d3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d0a38da4ed5ad00bb25ce9ab6520cf768b4e94": "1ea6e4ab06c4418be1bd74782a2fd6f5",
".git/objects/98/4ce29a9040da825b97a126cff4bfb911e1052d": "5da404eed12819b05e7b99a285491bfd",
".git/objects/9b/87ba5cefa48e149ffc560109500d171877d815": "8fe6242b6066d072f07b8de879bd8eda",
".git/objects/9b/f38de71234a23881117ff4e7de5a4eb901994c": "3a789386fa6d6ac062fe219a88428865",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/c6ecfe469ffe75ebf612e7df7d34aa028ff2be": "62b2f45a4a913caf2cba902d6def6d4d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/12952398ec1c4118323f51eeac173636b4c9bf": "d2ffdcb73963840caa60dcb16977a97d",
".git/objects/bf/a0d4f41b1477121c1bb5242008a4c0baceb8a4": "4154e4dcf03b9df1b05d851e74362adf",
".git/objects/bf/a43b4724e138faed518d8911c1178a69946ef1": "1cc6be8025ad10fec952f429518ce80e",
".git/objects/c1/65635d566a836fa58980c67f73087d3e8b4f95": "d082bd07b08a767714c628d7ded82dc7",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c3/fbf3887b1979fec20b78f36e3bf4d4fd91aee0": "0567e26ff7fa2b9a7b52bbc66f4e7410",
".git/objects/c7/db7b6106826e0fd576dfbbc9e57dbcef7d6b01": "c4475bf952921ab089d8c26cac218242",
".git/objects/c9/3ff7158587da9bc1764866b91bc3ee17b24564": "6c923a239f4948650017bccc4836e0e7",
".git/objects/c9/b645e360597fc0cf7c5c45b8d4c831d3153090": "c3db6270a4b09d2f2ce07f30e21e47c0",
".git/objects/cd/495e16137d440622d5123e0211f4ecb76549fe": "26b722a324afad77bbf4c297de035535",
".git/objects/d3/e42618f0e5b432db277ac7b08eb6abdd88de47": "8b0234fb2138d3007928a9f36d4d4281",
".git/objects/d6/7e2be13f31445d875f52df57832240ef01b9c2": "ff2f2017a591b7ee2886b8ebe99017ed",
".git/objects/e3/a37a3f76f00828f186646f0ed8079a193d3a4b": "3b43eec9605cd0fc3ddfdd6148a9af09",
".git/objects/e3/a6776164e017ce8b5c74dcf7ada0e5dd03deee": "24f176e63cf1942b897a166ef3d904d6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/1bb8052d046a75d8d89174e8e4bf56bb7473fb": "fb745c0c879f8bea7a9fc4080e871e4e",
".git/objects/e9/a3c66c0a9470810e421831b787dc4abcf9ef20": "2f312ff0dcf06fb321ba58f73ced9f64",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ed/f31b72734f41d3bbffded87fc2bf97775781a7": "56586d761f7a76392e462f4f1d889065",
".git/objects/ee/9ec9ad502c849ce03f9c1a38907c3feab0849f": "349a653bddb40c592ce4fed333123fa5",
".git/objects/f8/6502a6aa4a6efe2eeb21c3711d2cb0a3c6a2a3": "09ad458c7f409509fb56239652933ce6",
".git/objects/fc/144481dd26bfd5ac02c1ed29756133bd78e44d": "c3df88ffb0dab29c8a20ac0b9eab062c",
".git/objects/fc/4bcb2515f01ab17be237896d73821922b137a6": "725668b7bdc6021b42f4f754415434bd",
".git/refs/heads/main": "e029d1104e9222443a78a7fc636c760c",
".git/refs/remotes/origin/main": "e029d1104e9222443a78a7fc636c760c",
"assets/AssetManifest.json": "ea5535e2c12be2606290777f60920a2f",
"assets/assets/aruco.json": "a1a96250d2b89422a53bf5d1a6f8194c",
"assets/assets/logo.png": "2e2998ae55bec34baea31150775ed252",
"assets/assets/plant_error.png": "be999efc87c80cd811be86a62586d1f5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "b5eb88c3a949a1cdcbf980be3dfefa36",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"cors.json": "72a0a758a5a9fee3897ea1d62a003055",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a67aeb64dd5e86870e8115d145de9f94",
"/": "a67aeb64dd5e86870e8115d145de9f94",
"main.dart.js": "ca440d8ec6b30b3365a0906eb909e7ac",
"manifest.json": "c2d164294dfea0863c95c704c33c16b9",
"version.json": "f825b5c9ed4b3a000aa98f7132610ba3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
