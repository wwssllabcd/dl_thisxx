var pageMod = require("sdk/page-mod");
pageMod.PageMod({
  include: "http://www.thisav.com/video/*",
  contentScriptFile: "./my-script.js"
});
