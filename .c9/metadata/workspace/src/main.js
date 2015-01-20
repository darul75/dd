{"changed":true,"filter":false,"title":"main.js","tooltip":"/src/main.js","value":"var path = require('path');\n\nfunction Fetcher() {\n  this.init();\n}\n\nFetcher.prototype.init = function() {\n  return this;\n};\n\nFetcher.prototype.fetch = function(options, next) {\n  // Directory path\n  var d = new Date();\n  var path = 'data'+path.sep+d.getUTCFullYear()+path.sep+d.getUTCMonth()+path.sep+d.getUTCDay();\n  \n  //\n  \n  \n  \n};\n\nvar fetcher = new Fetcher();\nmodule.exports = fetcher;","undoManager":{"mark":-7,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":9,"column":0},"end":{"row":9,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":2},"end":{"row":9,"column":3},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":3},"end":{"row":9,"column":4},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":5},"end":{"row":9,"column":6},"action":"insert","lines":["C"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":6},"end":{"row":9,"column":7},"action":"insert","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":6},"end":{"row":9,"column":7},"action":"remove","lines":["R"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":5},"end":{"row":9,"column":6},"action":"remove","lines":["C"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":5},"end":{"row":9,"column":6},"action":"insert","lines":["D"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":6},"end":{"row":9,"column":7},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":7},"end":{"row":9,"column":8},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":12},"end":{"row":9,"column":13},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":19},"end":{"row":9,"column":21},"action":"remove","lines":["  "]},{"start":{"row":9,"column":19},"end":{"row":10,"column":0},"action":"insert","lines":["",""]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":2},"end":{"row":10,"column":30},"action":"insert","lines":["Date.prototype.getFullYear()"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":19},"end":{"row":10,"column":0},"action":"insert","lines":["",""]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":2},"end":{"row":11,"column":31},"action":"insert","lines":["var aujd = new Date();","var année = aujd.getFullYear();"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":6},"end":{"row":10,"column":7},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":6},"end":{"row":10,"column":7},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":6},"end":{"row":10,"column":7},"action":"remove","lines":["j"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":6},"end":{"row":11,"column":11},"action":"remove","lines":["année"]},{"start":{"row":11,"column":6},"end":{"row":11,"column":7},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":7},"end":{"row":11,"column":8},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":8},"end":{"row":11,"column":9},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":9},"end":{"row":11,"column":10},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"remove","lines":["j"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":14},"end":{"row":11,"column":15},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":29},"end":{"row":12,"column":0},"action":"insert","lines":["",""]},{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":6},"end":{"row":11,"column":10},"action":"remove","lines":["year"]},{"start":{"row":11,"column":6},"end":{"row":11,"column":7},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":7},"end":{"row":11,"column":8},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":8},"end":{"row":11,"column":9},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":9},"end":{"row":11,"column":10},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"insert","lines":["'"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":14},"end":{"row":11,"column":15},"action":"insert","lines":["'"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"remove","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":14},"end":{"row":11,"column":15},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":16},"end":{"row":11,"column":17},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":17},"end":{"row":11,"column":18},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":19},"end":{"row":11,"column":20},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"insert","lines":["+"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":21},"end":{"row":11,"column":22},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":36},"end":{"row":11,"column":37},"action":"insert","lines":["+"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":15},"action":"insert","lines":["require('path')"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["v"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":26},"end":{"row":0,"column":27},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"remove","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":21},"end":{"row":13,"column":22},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":22},"end":{"row":13,"column":23},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":25},"end":{"row":13,"column":26},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":25},"end":{"row":13,"column":26},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":25},"end":{"row":13,"column":28},"action":"insert","lines":["sep"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":28},"end":{"row":13,"column":29},"action":"insert","lines":["+"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":44},"end":{"row":13,"column":45},"action":"remove","lines":["+"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":44},"end":{"row":13,"column":70},"action":"insert","lines":["+path.sep+d.getFullYear()+"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":69},"end":{"row":13,"column":70},"action":"remove","lines":["+"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":69},"end":{"row":13,"column":95},"action":"insert","lines":["+path.sep+d.getFullYear()+"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":31},"end":{"row":13,"column":42},"action":"remove","lines":["getFullYear"]},{"start":{"row":13,"column":31},"end":{"row":13,"column":45},"action":"insert","lines":["getUTCFullYear"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":62},"end":{"row":13,"column":63},"action":"insert","lines":["U"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":63},"end":{"row":13,"column":64},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":63},"end":{"row":13,"column":64},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":59},"end":{"row":13,"column":71},"action":"remove","lines":["getUFullYear"]},{"start":{"row":13,"column":59},"end":{"row":13,"column":70},"action":"insert","lines":["getUTCMonth"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":87},"end":{"row":13,"column":88},"action":"insert","lines":["U"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":88},"end":{"row":13,"column":89},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":88},"end":{"row":13,"column":89},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":84},"end":{"row":13,"column":96},"action":"remove","lines":["getUFullYear"]},{"start":{"row":13,"column":84},"end":{"row":13,"column":93},"action":"insert","lines":["getUTCDay"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":95},"end":{"row":13,"column":96},"action":"remove","lines":["+"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":2},"end":{"row":15,"column":0},"action":"insert","lines":["",""]},{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":2},"end":{"row":16,"column":30},"action":"remove","lines":["Date.prototype.getFullYear()"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":2},"end":{"row":15,"column":0},"action":"insert","lines":["",""]},{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"insert","lines":["  "]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"insert","lines":["/"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":3},"end":{"row":15,"column":4},"action":"insert","lines":["/"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":15,"column":4},"end":{"row":15,"column":4},"isBackwards":true},"options":{"tabSize":2,"useSoftTabs":true,"guessTabSize":false,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1421748541403}