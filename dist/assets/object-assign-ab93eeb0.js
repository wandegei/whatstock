function r(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var t=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;const o=r(function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(r){return t[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(r,o){for(var a,c,i=function(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}(r),f=1;f<arguments.length;f++){for(var l in a=Object(arguments[f]))e.call(a,l)&&(i[l]=a[l]);if(t){c=t(a);for(var s=0;s<c.length;s++)n.call(a,c[s])&&(i[c[s]]=a[c[s]])}}return i});export{r as g,o};
