!window._bd_share_is_recently_loaded&&window._bd_share_main.F.use("base/min_tangram",function(e){function n(e,t,n){var r=new e(n);r.setView(new t(n)),r.init(),n&&n._handleId&&(_bd_share_main.api=_bd_share_main.api||{},_bd_share_main.api[n._handleId]=r)}function r(e,r){window._bd_share_main.F.use(e,function(e,i){t.isArray(r)?t.each(r,function(t,r){n(e.Api,i.View,r)}):n(e.Api,i.View,r)})}function i(e){var n=e.common||window._bd_share_config&&_bd_share_config.common||{},r={like:{type:"like"},share:{type:"share",bdStyle:0,bdMini:2,bdSign:"on"},slide:{type:"slide",bdStyle:"1",bdMini:2,bdImg:0,bdPos:"right",bdTop:100,bdSign:"on"},image:{viewType:"list",viewStyle:"0",viewPos:"top",viewColor:"black",viewSize:"16",viewList:["qzone","tsina","huaban","tqq","renren"]},selectShare:{type:"select",bdStyle:0,bdMini:2,bdSign:"on"}},i={share:{__cmd:"",__buttonType:"",__type:"",__element:null},slide:{__cmd:"",__buttonType:"",__type:"",__element:null},image:{__cmd:"",__buttonType:"",__type:"",__element:null}};return t.each(["like","share","slide","image","selectShare"],function(s,o){e[o]&&(t.isArray(e[o])&&e[o].length>0?t.each(e[o],function(s,u){e[o][s]=t.extend({},r[o],n,u,i[o])}):e[o]=t.extend({},r[o],n,e[o],i[o]))}),e}var t=e.T;_bd_share_main.init=function(e){e=e||window._bd_share_config||{share:{}};if(e){var t=i(e);t.like&&r(["share/like_api","view/like_view"],t.like),t.share&&r(["share/share_api","view/share_view"],t.share),t.slide&&r(["share/slide_api","view/slide_view"],t.slide),t.selectShare&&r(["share/select_api","view/select_view"],t.selectShare),t.image&&r(["share/image_api","view/image_view"],t.image)}},window._bd_share_main._LogPoolV2=[],window._bd_share_main.n1=(new Date).getTime(),t.domready(function(){window._bd_share_main.n2=(new Date).getTime()+1e3,_bd_share_main.init(),setTimeout(function(){window._bd_share_main.F.use("trans/logger",function(e){e.nsClick(),e.back(),e.duration()})},3e3)})});
