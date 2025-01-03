'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0f23be2ec59c9a5c6c976d3863721e7c",
"assets/AssetManifest.bin.json": "1022f0acf62fa2f7067da0ee978ca67d",
"assets/AssetManifest.json": "ac805f75ede637cfe5abf9a4975d8225",
"assets/assets/delimg/1.png": "a30b69efc65a2a2be85aa9bbb911b44e",
"assets/assets/delimg/2.png": "3a99c296b04e9c2d5e78b84e4757f8a9",
"assets/assets/delimg/3.png": "b859867641eb3ad1532c98ee67cdb2da",
"assets/assets/delimg/4.png": "182ee7b20a73355be03aa6f5725d75ff",
"assets/assets/gif_load.gif": "3558bda305cbd4125699e5d771fa54b2",
"assets/assets/icons/douyin.png": "76b8b1ac7070a4d4e9ba9a934605b381",
"assets/assets/icons/douyin_selected.png": "588dad5b2bad367c238dc2a2ae83ac3b",
"assets/assets/icons/home.png": "511b18b63892ac7596b4822349bd1d9b",
"assets/assets/icons/home_selected.png": "5c98087ebceb71490038472897c7325c",
"assets/assets/icons/logo.png": "0b593eecd7c24857ff3b853c0d28ee51",
"assets/assets/icons/qwbk.png": "7e05235e0e7c120460e81cf1332cfe87",
"assets/assets/icons/qwbk_selected.png": "77d666a20f291354442b88af1866c735",
"assets/assets/icons/tequan.png": "e5eeb7baa81babf78ec147082e970198",
"assets/assets/icons/tequan_selected.png": "a6e9785e5521c32e556b43db21f91ace",
"assets/assets/icons/video.png": "48b9d793ed2a2a0979c2fd9bb2eb81e3",
"assets/assets/icons/video_selected.png": "5f1575a4ebc7daabe67a091f5b6c514e",
"assets/assets/icons/wode.png": "e86f2350d78d8e1eae3065e66cff30fb",
"assets/assets/icons/wode_selected.png": "446c0848a3b0316f5084c764d0b0fc75",
"assets/assets/images/ai.png": "ced1ef20ddb868452be605d634f629be",
"assets/assets/images/bbjc.png": "fdc6e66349b98face701a51a301b32e1",
"assets/assets/images/bdyqr.png": "f67b6f9e1762881737774a85d6aad974",
"assets/assets/images/dianzan.png": "24c37926ee8633416b5508afb6cc169b",
"assets/assets/images/flzx.png": "4b36017228dc8c67813a22d2bf5b5f1d",
"assets/assets/images/follow+.png": "574bb9a711299acd55eb21d38fee984c",
"assets/assets/images/gmjl.png": "f4203bc3817f44c5a579a1248f6718e9",
"assets/assets/images/guanzhu.png": "6db6fbf814bb486fdbb572f915ad0d69",
"assets/assets/images/heikeji.png": "0892f55016edc233b63add0b77560d11",
"assets/assets/images/icon_back.png": "62ac9d8716fc7084b38cdea682922ee4",
"assets/assets/images/icon_comment.png": "a8e1cccdabf3921a4a3c60c62f54fed2",
"assets/assets/images/icon_like.png": "1ea8dc284d69c7955b2d8e37a9e5aab0",
"assets/assets/images/icon_play.png": "55e807ecfe7c01d86c0bcb07e67d7ce6",
"assets/assets/images/icon_search.png": "a4482d8a044d404433ca7dd7de7e3f20",
"assets/assets/images/icon_share.png": "b4c52a789b890163d697089b401c8922",
"assets/assets/images/icon_watch.png": "39e3d5733e92d031bcea3de22227603b",
"assets/assets/images/jfsc.png": "d463e3b58195b047e79d238090c2448f",
"assets/assets/images/kefu.png": "a98d01ca37c662e286c9a4fe0cff186e",
"assets/assets/images/kefu_btn.png": "4117137036c770fafceea4bf08617964",
"assets/assets/images/lanch/lanch.png": "2eaaa3a9a8dd0f8e99f6833b08ceb691",
"assets/assets/images/meitu.png": "ee7532c4a700aabf635f37a5d8dd45c4",
"assets/assets/images/message_icon.png": "6f02306667e49f6192953c5473014869",
"assets/assets/images/qr_icon.png": "fa48d6268c33c03307929ccad4dd28b5",
"assets/assets/images/sfpz.png": "1c06c8feed9d03f5be8e03a7757c13be",
"assets/assets/images/share.png": "ee32525310ea53d3e2cc3824cbc48463",
"assets/assets/images/shoucang.png": "8687f9473ef577958f5694be228b8c6c",
"assets/assets/images/swhz.png": "716420c853fe809ccdcd9a139e01fcec",
"assets/assets/images/unfollow.png": "b6aa6ed050939791aea153e469257573",
"assets/assets/images/update_icon.png": "0ce12be2bd73b873a0cee83878485881",
"assets/assets/images/update_user_info.png": "33bc69043a1d64f2a45f4ff30ba1a66e",
"assets/assets/images/xfbp.png": "db868178f585fb94a20c8b50af85c6be",
"assets/assets/images/xydcj.png": "c0187fa33a9a941faffb99cc5e15fae0",
"assets/assets/images/yhdy.png": "ea370161c156fe014a2dbbb22eeb7c31",
"assets/assets/pages/arrow_down.png": "6e53bcef7fa15b2409df7e29bb0b346b",
"assets/assets/pages/arrow_left.png": "2908475be6645efec318cde54c44f750",
"assets/assets/pages/arrow_left_white.png": "4b45cd510fa7627dc512b617bd3e1235",
"assets/assets/pages/arrow_right.png": "e55073c3724f928a30cf23601b7ca031",
"assets/assets/pages/backtotop.png": "7f595f06b3b61f1480fd3a7ac3cd02e2",
"assets/assets/pages/close.png": "7f3906a10084f5dc2f009343f253f702",
"assets/assets/pages/edit.png": "b07e3985b11b2be5ce5abd1fc0ba96e7",
"assets/assets/pages/home/03_remen.png": "34bf0f9517687c7aa2beaeb720b6864c",
"assets/assets/pages/home/homeBg.png": "725d209b043a13df8c31098707a8fb6a",
"assets/assets/pages/iconset/group1@2x.png": "93367a228edf39137d86c7150ff8d08e",
"assets/assets/pages/iconset/group2@2x.png": "3e44c3b07d28e18d2f5bf356b102ac9d",
"assets/assets/pages/iconset/group3@2x.png": "92d6e0f8fa59b42cfbb2f5e7894bbea3",
"assets/assets/pages/iconset/group4@2x.png": "09c6c55f52ac029c45efb2cf16dd3f0b",
"assets/assets/pages/iconset/group5@2x.png": "22b2263cd80edb8f999f9deb35714b58",
"assets/assets/pages/iconset/group6@2x.png": "052dd523ffa196addc282ac9a76382d1",
"assets/assets/pages/iconset/sysIcon.png": "bae210e0ad23c87ebb9784e03f7ac2a9",
"assets/assets/pages/mine/06_01@3x.png": "56b0ad032af62516b072dda5d5c29825",
"assets/assets/pages/mine/06_02@3x.png": "c4df9b08e794e29b06734cd595a21a18",
"assets/assets/pages/mine/06_03@3x.png": "e87e9a32231663d7555df62ed7b7d678",
"assets/assets/pages/mine/06_04@3x.png": "0f7e3524449f19032f86a4f38aef42ea",
"assets/assets/pages/mine/06_05@3x.png": "febfb8079606239594728d2ea81d61dc",
"assets/assets/pages/mine/06_06@3x.png": "70d6db3cca6a10c923348363439d4372",
"assets/assets/pages/mine/06_07@3x.png": "d48d254b9f80b86310097592166503d2",
"assets/assets/pages/mine/06_08@3x.png": "eef8c45bf646dd8e5a03fee14a168757",
"assets/assets/pages/mine/06_09@3x.png": "684bac1cfa4c3ba6d948a08fa8ce25f3",
"assets/assets/pages/mine/06_10@3x.png": "c81fc12833a14f0e05b8b54f9760f1dd",
"assets/assets/pages/mine/06_11@3x.png": "967e38cc2c479c9de1816610c50b1e3e",
"assets/assets/pages/mine/06_12@3x.png": "e034394f842c223c75768995a258cdcb",
"assets/assets/pages/mine/06_13@3x.png": "3f08886a08a1b6f87a84ea9b762e4d56",
"assets/assets/pages/mine/06_czbeijin.png": "f797c922820835dec6781ab5f2e47b19",
"assets/assets/pages/mine/06_czhuiyuanne@2x.png": "becf58ae5438160e1953f17006a18b3e",
"assets/assets/pages/mine/06_huiycz.png": "e57f3c2e0d232371214417a72e4ebbcf",
"assets/assets/pages/mine/06_jinbubj.png": "e61d02b221db65561f21f88c0582a5fe",
"assets/assets/pages/mine/06_sfrzbj.png": "0afd7f90176cdc18de1722e987a0ab4c",
"assets/assets/pages/mine/06_xiaoxi1.png": "f39197c1e20b0f290e5e52c55682c809",
"assets/assets/pages/mine/rectangle_68.png": "5141d649108023d4cc4ce549c4f6ae86",
"assets/assets/pages/mine/shareBg.jpg": "a47a5787cca276da55ae52462f84a3d6",
"assets/assets/pages/mine/shareTag.png": "7386914f91a619bbb7cfe95d1cf679fc",
"assets/assets/pages/mine/shareTit.png": "6c0baedcc23f1cfe32a6ab3da6ada6a8",
"assets/assets/pages/mine/shareTit2.png": "851ecd77d529b3edc21ef8b078b13cc7",
"assets/assets/pages/score/04_fuzi@2x.png": "4351bceabd607553dbc46cf3adb8c1be",
"assets/assets/pages/score/04_guankan@2x.png": "24e30b356ba275bf157ce9bbed5475e1",
"assets/assets/pages/score/04_yaoqing@2x.png": "929700c07e39f64fa68887573d654b3f",
"assets/assets/pages/score/04_yingpian@2x.png": "2ded1b9333ccf313090ef7c40935d3eb",
"assets/assets/pages/score/recommand.png": "d7eda47bb9bb5948f4ae462b8f5375f5",
"assets/assets/pages/search_icon.png": "ff15ac2f9c02257921f5afc42eab620c",
"assets/assets/pages/select.png": "333742e238066928733d0019eb4efdb0",
"assets/assets/pages/selected.png": "1d6cfc119c6667ae7ba0c3115ef52fd7",
"assets/assets/pages/selected_square.png": "b9dd377df469d697f01283c6b14a575b",
"assets/assets/pages/status_empty.png": "5d72d374488b5918161d354813357b0c",
"assets/assets/pages/status_net_error.png": "b9d0954cfddba2e9099f618e42d521ac",
"assets/assets/pages/status_nothing.png": "a99c8d60e634e3be77c207b7155f842f",
"assets/assets/pages/tiktok/02_fenxiang.png": "1471a50b8e9f8988b0b21b7cf9197043",
"assets/assets/pages/tiktok/02_guanzhued.png": "72637ab72ffd7087bbe846d717613fe9",
"assets/assets/pages/tiktok/02_guanzuj.png": "ad54e05aa87583f7259ccb6c427550a3",
"assets/assets/pages/tiktok/02_heikj.png": "ad2ef0049159f647dbdeae2894a3db70",
"assets/assets/pages/tiktok/02_kefu.png": "26cf722b8323c336893471f91d13b9bd",
"assets/assets/pages/tiktok/02_laba.png": "5dc7135733d7be43a0c6c27888d78d34",
"assets/assets/pages/tiktok/02_laba1.png": "8def4ccf1163c13c59dd92670f3c7292",
"assets/assets/pages/tiktok/02_labas.png": "bb8dbcb705d03b87c8297ae309c079e5",
"assets/assets/pages/tiktok/02_meitu.png": "02b15067577972bae5ee07fd19447924",
"assets/assets/pages/tiktok/02_shangyibu.png": "86b4122155a8d7ed3df33b57f8c0404a",
"assets/assets/pages/tiktok/02_shoucang1.png": "4b82d18305c47592a870e8ebff9d6e87",
"assets/assets/pages/tiktok/02_shoucang2.png": "3ee28f8c94a119379dcc6d79f4506757",
"assets/assets/pages/tiktok/02_xihuan1.png": "41b8b1d68aae75d3c76183aa61fd4c0a",
"assets/assets/pages/tiktok/02_xihuan2.png": "04e669a3e346804c54b753425b25bb3e",
"assets/assets/pages/tiktok/02_zant.png": "0e48be4b33a030bdfba8b050470508d2",
"assets/assets/pages/tiktok/05_huore.png": "5002c9f44c8880f944baee5bf369c6d5",
"assets/assets/pages/tiktok/05_shichang@2x.png": "f22b01f39c921c7a92da91fa328b9bb3",
"assets/assets/pages/tiktok/searchIcon.png": "3b0703d2ee98cbbfa9a82431015b4141",
"assets/assets/pages/topup/06_czbeijin@2x.png": "bd74e617d1ebf0cec86cfc94324e545c",
"assets/assets/pages/topup/06_jinbi1@2x.png": "8711fedac65ae4193fab92ab766087d0",
"assets/assets/pages/topup/06_weixin@2x.png": "2c48dae51cd914166b9b3e96cf75fd52",
"assets/assets/pages/topup/06_wxuanzhongha@2x.png": "053ecdc48eb2345638692f1746d0640b",
"assets/assets/pages/topup/06_xuanzhongha@2x.png": "a47f31d06f4b17dd74525c66cb6c0c7d",
"assets/assets/pages/topup/06_zhifubao@2x.png": "f1e104ff6897faa0ad38aca9c45d0e51",
"assets/assets/picture/addIcons.png": "5dc2408e46f16b423ae691e52771c195",
"assets/assets/picture/ai.png": "bb77bccf4753e69341339b43ddfed129",
"assets/assets/picture/playArrow.png": "0e48be4b33a030bdfba8b050470508d2",
"assets/assets/picture/select.png": "333742e238066928733d0019eb4efdb0",
"assets/assets/picture/selected.png": "1d6cfc119c6667ae7ba0c3115ef52fd7",
"assets/assets/picture/tips1.png": "c4abfdb25086fccaade6982d70149642",
"assets/assets/picture/tips2.png": "574f1b5670dfe385939dc2c04f10616c",
"assets/assets/picture/tips3.png": "e3c9947c28ce8388b45b48c0486d44e2",
"assets/assets/picture/tk.png": "d7d15197af46101d657d2ecb97ded025",
"assets/assets/picture/wz.png": "f29a39b0239a0c2ee3ea8a5d5b867b23",
"assets/assets/tequan/02_gengyiha@3x.png": "53302ce7bc000d15ce0bf244bf56d80a",
"assets/assets/tequan/02_jiazaiz@2x.png": "7d7d5a3134b1fabc2be0d806870dc242",
"assets/assets/tequan/02_shipha@3x.png": "bbbe48f59d41ead8ffe4e44d8251a956",
"assets/assets/tequan/02_tupianha@3x.png": "637035c5d8a4af7c57642ca14672474a",
"assets/assets/tequan/04_jbt1@3x.png": "06483790a481a5637777b08fde2717b3",
"assets/assets/tequan/image_10@3x.png": "51ed6663bc25021bae2e9079be642dcb",
"assets/assets/tequan/image_7@3x.png": "02a0980607d939732e6e873ff1deed31",
"assets/assets/tequan/image_8@3x.png": "dbf30f773007aa53b7bf8e5e19762f9b",
"assets/assets/tequan/image_9@3x.png": "6d0a08979dfb73a8064b1f9e59912633",
"assets/assets/tequan/tk+.png": "7a9c2b9624c4b7eaa8e540abe551283d",
"assets/assets/tequan/tk.png": "cfaca6a6a0b2ecb3045a924f6b608180",
"assets/assets/tequan/tkbg.png": "12a99a2f1b80f4d813bcca9c1f3d9c77",
"assets/assets/tequan/toutu2@3x.png": "356c87cb2352b875ff8015167da570c4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9d842ff034fb0cf2b1f5d2738fde494f",
"assets/NOTICES": "36bf47a02eb0632ecb867a4c09f8fa2e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "961abee8a087fa947d5a02c65436d518",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "d4fb35886505b1a4e53f69f61f47e6f4",
"favicon.png": "1be54f70f413fc83799c2e3f06b5b7b1",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "1a1313a18c4f28034e2ede8174baea5d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "889454826d2d61eb4835b4ee328ddc39",
"/": "889454826d2d61eb4835b4ee328ddc39",
"main.dart.js": "934b18b89df5d6fb8eb68ebd17a6941d",
"manifest.json": "fc77f3fca8692b94b45eb5bf472d7876",
"version.json": "8a636112d21146170a9ee699b7729139"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
