var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "http://www.thisav.com/video/*",
  //contentScript: cs
  contentScriptFile: "./my-script.js"
});