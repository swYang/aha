!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxColorPicker=t():e.vuxColorPicker=t()}(this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var s=o[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(12)},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(15),l=r(s),n=o(14),i=r(n),c=o(13),p=r(c),u={large:40,middle:30,small:20};t["default"]={components:{Icon:l["default"],Flexbox:i["default"],FlexboxItem:p["default"]},props:{colors:{type:Array,required:!0},size:{type:String,"default":"large"},value:{type:String,twoWay:!0}},computed:{width:function(){return u[this.size]}},methods:{change:function(e){this.value=e,this.$dispatch("change",e)}}}},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(4),l=r(s);t["default"]={created:function(){this.supported=l["default"].flex},ready:function(){if(!this.supported){var e=this.$el.querySelectorAll(".vux-flexbox-item");this.$el.classList.remove("vux-flexbox"),this.$el.classList.add("vux-flexbox-unsupport");for(var t=e.length,o=100/t+"%",r=0;t>r;r++)e[r].style.width=o,e[r].style["box-sizing"]="border-box",e[r].style["margin-left"]=0,e[r].style["float"]="left"}},props:{marginLeft:{type:Number,"default":8},orient:{type:String,"default":"horizontal"}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{type:String},computed:{className:function(){return"weui_icon weui_icon_"+this.type}}}},function(e,t){"use strict";function o(e,t){var o=document.createElement("div");o.style.cssText=r(e),n[t]=!!o.style.length,s.className+=" "+(n[t]?"":"no-")+t}function r(e){for(var t="",o=0;o<l.length;o++)t+=l[o]+e;return t}Object.defineProperty(t,"__esModule",{value:!0});var s=document.documentElement,l=["-webkit-","-moz-","-ms-","-o-",""],n={};o("flex-basis: 1px;","flexbox"),o("box-direction: reverse;","flexboxlegacy"),o("flex-align: end;","flexboxtweener"),o("flex-wrap: wrap;","flexwrap"),n.flex=n.flexbox,n.legacy=n.flexboxlegacy,n.tweener=n.flexboxtweener,n.wrap=n.flexwrap,t["default"]=n},function(e,t){},function(e,t){},function(e,t){},function(e,t){e.exports="<div class=vux-color-picker> <flexbox> <flexbox-item v-for=\"color in colors\" class=vux-color-box> <span class=vux-color-item :style=\"{borderRadius: width/2 + 'px',backgroundColor: color, width: width + 'px', height: width + 'px'}\" @click=change(color) :class=\"{'vux-color-white': color === '#fff' || color === '#fff', 'vux-color-picker-small': size === 'small', 'vux-color-picker-middle': size === 'middle'}\"> <icon v-if=\"color === value\" class=vux-color-checked :style=\"{lineHeight: width + 'px'}\" type=success_no_circle></icon> </span> </flexbox-item> </flexbox> </div>"},function(e,t){e.exports="<div class=vux-flexbox-item :style=\"{marginLeft: $parent.supported ? $parent.marginLeft + 'px' : 0}\"> <slot></slot> </div>"},function(e,t){e.exports="<div class=vux-flexbox :class=\"{'flex-col': orient == 'vertical', 'flex-row': orient == 'horizontal'}\"> <slot></slot> </div>"},function(e,t){e.exports="<i class={{className}}></i>"},function(e,t,o){var r,s;o(5),r=o(1),s=o(8),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var r,s;s=o(9),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var r,s;o(6),r=o(2),s=o(10),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var r,s;o(7),r=o(3),s=o(11),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)}])});