function isNumber(t){return/^\d+/.test(t)}function pushDataToParam(t,e){e=e||"";var r=[];for(var n in t){var a=e&&""!=e?e+"["+n+"]":n;"array"==typeof t[n]||"object"==typeof t[n]?r=jQuery.merge(r,pushDataToParam(t[n],a)):r.push(a+"="+t[n])}return r}function str_replace(t,e,r){return t.split(e).join(r)}function pps_str_replace(t,e,r){return t.split(e).join(r)}function nameToClassId(t){return str_replace(str_replace(t,"]",""),"[","")}function strpos(t,e,r){var n=t.indexOf(e,r);return n>=0&&n}function extend(t,e){var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t,t.superclass=e.prototype}function toeRedirect(t,e){if(e){var r=window.open(t,"_blank");r?r.focus():document.location.href=t}else document.location.href=t}function toeReload(t){t&&toeRedirect(t),document.location.reload()}function toeInArray(t,e){if("object"==typeof e){for(var r in e)if(e[r]==t)return r}else if("array"==typeof e)return jQuery.inArray(t,e);return-1}function toeTextIncDec(t,e){var r=parseInt(jQuery("#"+t).val());isNaN(r)&&(r=0),e<0&&r<1||(r+=e),jQuery("#"+t).val(r)}function toeStrFirstUp(t){return(t+="").charAt(0).toUpperCase()+t.substr(1)}function parseStr(t,e){var r,n,a,i,o,s,u,c,l,h,p,f,g,d=String(t).replace(/^&/,"").replace(/&$/,"").split("&"),m=d.length,y=function(t){return decodeURIComponent(t.replace(/\+/g,"%20"))};for(e||(e={}),r=0;r<m;r++){for(l=y((c=d[r].split("="))[0]),h=c.length<2?"":y(c[1]);" "===l.charAt(0);)l=l.slice(1);if(l.indexOf("\0")>-1&&(l=l.slice(0,l.indexOf("\0"))),l&&"["!==l.charAt(0)){for(f=[],p=0,n=0;n<l.length;n++)if("["!==l.charAt(n)||p){if("]"===l.charAt(n)&&p&&(f.length||f.push(l.slice(0,p-1)),f.push(l.substr(p,n-p)),p=0,"["!==l.charAt(n+1)))break}else p=n+1;for(f.length||(f=[l]),n=0;n<f[0].length&&(" "!==(u=f[0].charAt(n))&&"."!==u&&"["!==u||(f[0]=f[0].substr(0,n)+"_"+f[0].substr(n+1)),"["!==u);n++);for(s=e,n=0,g=f.length;n<g;n++)if(l=f[n].replace(/^['"]/,"").replace(/['"]$/,""),n!==f.length-1,o=s,""!==l&&" "!==l||0===n)void 0===s[l]&&(s[l]={}),s=s[l];else{for(i in a=-1,s)s.hasOwnProperty(i)&&+i>a&&i.match(/^\d+$/g)&&(a=+i);l=a+1}o[l]=h}}return e}function toeListablePps(t){this.params=jQuery.extend({},t),this.table=jQuery(this.params.table),this.paging=jQuery(this.params.paging),this.perPage=this.params.perPage,this.list=this.params.list,this.count=this.params.count,this.page=this.params.page,this.pagingCallback=this.params.pagingCallback;var e=this;this.draw=function(t,r){this.table.find("tr").not(".ppsExample, .ppsTblHeader").remove();var n=this.table.find(".ppsExample");for(var a in t){var i=n.clone();for(var o in t[a]){var s=i.find("."+o);if(s.length){var u=s.attr("valueTo");if(u){var c=t[a][o],l=s.attr(u);l&&(c=l+" "+c),s.attr(u,c)}else s.html(t[a][o])}}i.removeClass("ppsExample").show(),this.table.append(i)}if(this.paging&&(this.paging.html(""),r&&r>t.length&&this.perPage))for(a=1;a<=Math.ceil(r/this.perPage);a++){var h=a-1,p=h==this.page?jQuery("<b/>"):jQuery("<a/>");h!=this.page&&p.attr("href","#"+h).click(function(){if(e.pagingCallback&&"function"==typeof e.pagingCallback)return e.pagingCallback(parseInt(jQuery(this).attr("href").replace("#",""))),!1}),p.addClass("toePagingElement").html(a),this.paging.append(p),a%20==0&&a&&this.paging.append("<br />")}},this.list&&this.draw(this.list,this.count)}function setCookiePps(t,e,r){var n=new Date;n.setDate(n.getDate()+r);var a="";a="array"==typeof e||"object"==typeof e?"_JSON:"+JSON.stringify(e):e;var i=escape(a)+(null==r?"":"; expires="+n.toUTCString())+"; path=/";document.cookie=t+"="+i}function getCookiePps(t){var e=document.cookie.split(t+"=");if(2==e.length){var r=unescape(e.pop().split(";").shift());return 0===r.indexOf("_JSON:")&&(r=JSON.parse(r.split("_JSON:").pop())),r}return null}function delCookiePps(t){document.cookie=t+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"}function callUserFuncArray(cb,parameters){var func;if("string"==typeof cb?func="function"==typeof this[cb]?this[cb]:func=new Function(null,"return "+cb)():"[object Array]"===Object.prototype.toString.call(cb)?func="string"==typeof cb[0]?eval(cb[0]+"['"+cb[1]+"']"):func=cb[0][cb[1]]:"function"==typeof cb&&(func=cb),"function"!=typeof func)throw new Error(func+" is not a valid function");return"string"==typeof cb[0]?func.apply(eval(cb[0]),parameters):"object"!=typeof cb[0]?func.apply(null,parameters):func.apply(cb[0],parameters)}function toeGetImgAttachId(t){var e=jQuery(t).attr("class"),r=0;if(e&&""!=e){var n=e.match(/wp-image-(\d+)/);n&&n[1]&&(r=parseInt(n[1]))}return r}function toeGetHashParams(){var t=window.location.hash.split("#"),e=[];for(var r in t)t[r]&&""!=t[r]&&e.push(t[r]);return e}function getDataLcs(t){return this.data,this.dataChecked,this.dataChecked||(window.location.search&&(this.data=parseStr(window.location.search.substr(1))),this.dataChecked=!0),void 0!==t&&this.data?this.data[t]:this.data}function traverseElement(t,e,r,n){if(!/^(script|style)$/.test(t.tagName))for(var a=t.lastChild;a;)1==a.nodeType?traverseElement(a,e,r,n):3==a.nodeType&&r(a,e,n),a=a.previousSibling}function textReplacerFunc(t,e,r){t.data=t.data.replace(e,r)}function replaceWords(t,e){var r=document.createElement("div");for(var n in r.innerHTML=t,e)traverseElement(r,new RegExp(n,"g"),textReplacerFunc,e[n]);return r.innerHTML}function toeSelectText(t){var e,r,n=document,a=jQuery(t).get(0);n.body.createTextRange?((e=n.body.createTextRange()).moveToElementText(a),e.select()):window.getSelection&&(r=window.getSelection(),(e=n.createRange()).selectNodeContents(a),r.removeAllRanges(),r.addRange(e))}function ppsStrToMs(t){var e=t.split(" ");if(2==e.length){t=e[0]+" ";for(var r=e[1].split(":"),n=0;n<3;n++)t+=r[n]?r[n]:"00",n<2&&(t+=":")}var a=new Date(str_replace(t,"-","/")),i=0;return a&&(i=a.getTime()),i}function isMobilePps(){var t=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(t=!0),t}function isNumericPps(t){return jQuery.isNumeric?jQuery.isNumeric(t):!isNaN(parseFloat(t))&&isFinite(t)}function disableScrollPps(t){var e=jQuery(t);e.data("prev-overflow",e.css("overflow")).css("overflow","hidden")}function enableScrollPps(t){var e=jQuery(t),r=e.data("prev-overflow");r&&""!=r||(r="visible"),e.css("overflow",r)}function randPps(t,e,r){var n=Math.random()*(e-t)+t;return r?n:Math.round(n)}jQuery.fn.nextInArray=function(t){for(var e=0,r=0;r<this.length;r++)if(this[r]==t){e=r+1;break}return e>this.length-1&&(e=0),this[e]},jQuery.fn.clearForm=function(){return this.each(function(){var t=this.type,e=this.tagName.toLowerCase();if("form"==e)return jQuery(":input",this).clearForm();"text"==t||"password"==t||"textarea"==e?this.value="":"checkbox"==t||"radio"==t?this.checked=!1:"select"==e&&(this.selectedIndex=-1)})},jQuery.fn.tagName=function(){return this.get(0).tagName},jQuery.fn.exists=function(){return jQuery(this).length>0},jQuery.fn.serializeAnythingPps=function(t,e){var r=e?{}:[],n=jQuery(this).find(":input").get();return jQuery.each(n,function(){if(this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password/i.test(this.type))){var t=jQuery(this).val();e?r[this.name]=t:r.push(encodeURIComponent(this.name)+"="+encodeURIComponent(t))}}),void 0!==t&&t&&(r=jQuery.merge(r,pushDataToParam(t))),e?r:r.join("&").replace(/%20/g,"+")},jQuery.fn.serializeAssoc=function(){var t=[];return jQuery.each(this.serializeArray(),function(e,r){var n=r.name.match(/(.*?)\[(.*?)\]/);if(null!==n){var a=n[1],i=n[2];t[a]||(t[a]=[]),t[a][i]?jQuery.isArray(t[a][i])?t[a][i].push(r.value):(t[a][i]=[],t[a][i].push(r.value)):t[a][i]=r.value}else t[r.name]?jQuery.isArray(t[r.name])?t[r.name].push(r.value):(t[r.name]=[],t[r.name].push(r.value)):t[r.name]=r.value}),t},jQuery.fn.toeRebuildSelect=function(t,e,r){if("SELECT"==jQuery(this).tagName()&&"object"==typeof t&&jQuery(t).length>0){void 0===r&&(r=!1),jQuery(this).children("option").length&&jQuery(this).children("option").remove(),void 0===e&&(e=!1);var n="";for(var a in t)n="",r&&(e&&a==r||t[a]==r)&&(n="selected"),jQuery(this).append('<option value="'+(e?a:t[a])+'" '+n+">"+t[a]+"</option>")}},jQuery.fn.setReadonly=function(){jQuery(this).addClass("toeReadonly").attr("readonly","readonly")},jQuery.fn.unsetReadonly=function(){jQuery(this).removeClass("toeReadonly").removeAttr("readonly","readonly")},jQuery.fn.getClassId=function(t,e){var r=jQuery(this).attr("class");return r=r.substr(strpos(r,t+"_")),strpos(r," ")&&(r=r.substr(0,strpos(r," "))),r=(r=r.split("_"))[1]},jQuery.fn.zoom=function(t,e){return e=e||"center center",jQuery(this).data("zoom",t),jQuery(this).css({"-moz-transform-origin":e,"-o-transform-origin":e,"-webkit-transform-origin":e,"transform-origin":e})},jQuery.fn.ppsZoom=function(t,e){return e=e||"center center",jQuery(this).data("zoom",t),jQuery(this).css({"-moz-transform-origin":e,"-o-transform-origin":e,"-webkit-transform-origin":e,"transform-origin":e})},jQuery.fn.scrollWidth=function(){var t=document.createElement("p");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.visibility="hidden",e.style.width="200px",e.style.height="150px",e.style.overflow="hidden",e.appendChild(t),document.body.appendChild(e);var r=t.offsetWidth;e.style.overflow="scroll";var n=t.offsetWidth;return r==n&&(n=e.clientWidth),document.body.removeChild(e),r-n},jQuery.fn.animationDuration=function(t,e){e&&(t=parseFloat(t)/1e3);var r=t+"s";return jQuery(this).css({"webkit-animation-duration":r,"-moz-animation-duration":r,"-o-animation-duration":r,"animation-duration":r})},Date.prototype.format=function(t){for(var e="",r=Date.replaceChars,n=0;n<t.length;n++){var a=t.charAt(n);n-1>=0&&"\\"==t.charAt(n-1)?e+=a:r[a]?e+=r[a].call(this):"\\"!=a&&(e+=a)}return e},Date.replaceChars={shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longDays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],d:function(){return(this.getDate()<10?"0":"")+this.getDate()},D:function(){return Date.replaceChars.shortDays[this.getDay()]},j:function(){return this.getDate()},l:function(){return Date.replaceChars.longDays[this.getDay()]},N:function(){return this.getDay()+1},S:function(){return this.getDate()%10==1&&11!=this.getDate()?"st":this.getDate()%10==2&&12!=this.getDate()?"nd":this.getDate()%10==3&&13!=this.getDate()?"rd":"th"},w:function(){return this.getDay()},z:function(){var t=new Date(this.getFullYear(),0,1);return Math.ceil((this-t)/864e5)},W:function(){var t=new Date(this.getFullYear(),0,1);return Math.ceil(((this-t)/864e5+t.getDay()+1)/7)},F:function(){return Date.replaceChars.longMonths[this.getMonth()]},m:function(){return(this.getMonth()<9?"0":"")+(this.getMonth()+1)},M:function(){return Date.replaceChars.shortMonths[this.getMonth()]},n:function(){return this.getMonth()+1},t:function(){var t=new Date;return new Date(t.getFullYear(),t.getMonth(),0).getDate()},L:function(){var t=this.getFullYear();return t%400==0||t%100!=0&&t%4==0},o:function(){var t=new Date(this.valueOf());return t.setDate(t.getDate()-(this.getDay()+6)%7+3),t.getFullYear()},Y:function(){return this.getFullYear()},y:function(){return(""+this.getFullYear()).substr(2)},a:function(){return this.getHours()<12?"am":"pm"},A:function(){return this.getHours()<12?"AM":"PM"},B:function(){return Math.floor(1e3*((this.getUTCHours()+1)%24+this.getUTCMinutes()/60+this.getUTCSeconds()/3600)/24)},g:function(){return this.getHours()%12||12},G:function(){return this.getHours()},h:function(){return((this.getHours()%12||12)<10?"0":"")+(this.getHours()%12||12)},H:function(){return(this.getHours()<10?"0":"")+this.getHours()},i:function(){return(this.getMinutes()<10?"0":"")+this.getMinutes()},s:function(){return(this.getSeconds()<10?"0":"")+this.getSeconds()},u:function(){var t=this.getMilliseconds();return(t<10?"00":t<100?"0":"")+t},e:function(){return"Not Yet Supported"},I:function(){for(var t=null,e=0;e<12;++e){var r=new Date(this.getFullYear(),e,1).getTimezoneOffset();if(null===t)t=r;else{if(r<t){t=r;break}if(r>t)break}}return this.getTimezoneOffset()==t|0},O:function(){return(-this.getTimezoneOffset()<0?"-":"+")+(Math.abs(this.getTimezoneOffset()/60)<10?"0":"")+Math.abs(this.getTimezoneOffset()/60)+"00"},P:function(){return(-this.getTimezoneOffset()<0?"-":"+")+(Math.abs(this.getTimezoneOffset()/60)<10?"0":"")+Math.abs(this.getTimezoneOffset()/60)+":00"},T:function(){var t=this.getMonth();this.setMonth(0);var e=this.toTimeString().replace(/^.+ \(?([^\)]+)\)?$/,"$1");return this.setMonth(t),e},Z:function(){return 60*-this.getTimezoneOffset()},c:function(){return this.format("Y-m-d\\TH:i:sP")},r:function(){return this.toString()},U:function(){return this.getTime()/1e3}};
