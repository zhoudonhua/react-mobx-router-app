(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{207:function(e,t,n){"use strict";n.r(t);var r,i,o,a=n(6),s=n(7),l=n(32),c=n(31),u=n(33),m=n(2),d=n.n(m),f=function(e){var t=e.appName;return e.token?null:d.a.createElement("div",{className:"banner"},d.a.createElement("div",{className:"container"},d.a.createElement("h1",{className:"logo-font"},t.toLowerCase()),d.a.createElement("p",null,"A place to share your knowledge.")))},p=n(211),h=n(12),g=n(5),v=n(11),S=function(e){return e.currentUser?d.a.createElement("li",{className:"nav-item"},d.a.createElement(g.Link,{className:"nav-link ".concat("feed"===e.tab?"active":null),view:v.a.home,store:e.store,queryParams:{tab:"feed"}},"Your Feed")):null},y=function(e){return d.a.createElement("li",{className:"nav-item"},d.a.createElement(g.Link,{className:"nav-link ".concat("all"===e.tab?"active":""),view:v.a.home,store:e.store,queryParams:{tab:"all"}},"Global Feed"))},b=function(e){return e.tag?d.a.createElement("li",{className:"nav-item"},d.a.createElement("a",{href:"/",className:"nav-link active"},d.a.createElement("i",{className:"ion-pound"})," ",e.tag)):null},E=Object(h.inject)("articlesStore","commonStore","userStore","store")(r=Object(h.observer)(r=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleSetPage=function(e){n.props.articlesStore.setPage(e),n.props.articlesStore.loadArticles()},e.articlesStore.setPredicate(e.articlesStore.getPredicate(e)),e.articlesStore.loadArticles(),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.userStore.currentUser,t=this.props.articlesStore,n=t.articles,r=t.isLoading,i=t.page,o=t.totalPagesCount,a=t.getParams,s=a(this.props,"tab","all"),l=a(this.props,"tag","");return d.a.createElement("div",{className:"col-md-9"},d.a.createElement("div",{className:"feed-toggle"},d.a.createElement("ul",{className:"nav nav-pills outline-active"},d.a.createElement(S,Object.assign({},this.props,{currentUser:e,tab:s})),d.a.createElement(y,Object.assign({},this.props,{tab:s})),d.a.createElement(b,{tag:l}))),d.a.createElement(p.a,{articles:n,loading:r,totalPagesCount:o,currentPage:i,onSetPage:this.handleSetPage}))}}]),t}(d.a.Component))||r)||r,O=n(209),I=Object(h.inject)("store")(i=Object(h.observer)(i=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.tags;return t?d.a.createElement("div",{className:"tag-list"},t.map(function(t){return d.a.createElement(g.Link,{className:"tag-default tag-pill",view:v.a.home,store:e.props.store,queryParams:{tab:"tag",tag:t},key:t},t)})):d.a.createElement(O.a,null)}}]),t}(d.a.Component))||i)||i,z=Object(h.inject)("commonStore")(o=Object(h.observer)(o=function(e){function t(){return Object(a.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.commonStore.loadTags()}},{key:"render",value:function(){var e=this.props.commonStore,t=e.tags,n=e.token,r=e.appName;return d.a.createElement("div",{className:"home-page"},d.a.createElement(f,{token:n,appName:r}),d.a.createElement("div",{className:"container page"},d.a.createElement("div",{className:"row",style:{maxWidth:990,margin:"0 auto"}},d.a.createElement(E,null),d.a.createElement("div",{className:"col-md-3"},d.a.createElement("div",{className:"sidebar"},d.a.createElement("p",null,"Popular Tags"),d.a.createElement(I,{tags:t}))))))}}]),t}(d.a.Component))||o)||o;t.default=z},209:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n(6),i=n(7),o=n(32),a=n(31),s=n(33),l=n(2),c=n.n(l),u={borderRadius:"50%",width:"40px",height:"40px",margin:"90px auto",position:"relative",borderTop:"3px solid rgba(0, 0, 0, 0.1)",borderRight:"3px solid rgba(0, 0, 0, 0.1)",borderBottom:"3px solid rgba(0, 0, 0, 0.1)",borderLeft:"3px solid #818a91",transform:"translateZ(0)",animation:"loading-spinner 0.5s infinite linear"},m=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(a.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"loading-spinner",style:u},c.a.createElement("style",null,"\n        @keyframes loading-spinner {\n          0% { transform : rotate(0deg); }\n          100% { transform : rotate(360deg); }\n        }\n        "))}}]),t}(c.a.Component)},211:function(e,t,n){"use strict";var r,i=n(6),o=n(7),a=n(32),s=n(31),l=n(33),c=n(2),u=n.n(c),m=n(12),d=n(5),f=n(11),p=Object(m.inject)("articlesStore","store")(r=Object(m.observer)(r=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(n=Object(a.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).handleClickFavorite=function(e){e.preventDefault();var t=n.props,r=t.articlesStore,i=t.article;i.favorited?r.unmakeFavorite(i.slug):r.makeFavorite(i.slug)},n}return Object(l.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.article,t=e.favorited?"btn btn-sm btn-primary":"btn btn-sm btn-outline-primary";return u.a.createElement("div",{className:"article-preview"},u.a.createElement("div",{className:"article-meta"},u.a.createElement(d.Link,{view:f.a.profile,params:{username:e.author.username},store:this.props.store,key:e.author.image},u.a.createElement("img",{src:e.author.image,alt:""})),u.a.createElement("div",{className:"info"},u.a.createElement(d.Link,{className:"author",view:f.a.profile,params:{username:e.author.username},store:this.props.store,key:e.author.image},e.author.username),u.a.createElement("span",{className:"date"},new Date(e.createdAt).toDateString())),u.a.createElement("div",{className:"pull-xs-right"},u.a.createElement("button",{className:t,onClick:this.handleClickFavorite},u.a.createElement("i",{className:"ion-heart"})," ",e.favoritesCount))),u.a.createElement(d.Link,{className:"preview-link",style:{display:"block",overflow:"auto",zoom:1},view:f.a.article,params:{id:e.slug},store:this.props.store,key:e.slug},u.a.createElement("h1",null,e.title),u.a.createElement("p",null,e.description),u.a.createElement("span",null,"Read more..."),u.a.createElement("ul",{className:"tag-list"},e.tagList.map(function(e){return u.a.createElement("li",{className:"tag-default tag-pill tag-outline",key:e},e)}))))}}]),t}(u.a.Component))||r)||r,h=n(209),g=n(101),v=function(e,t){return(v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var S,y,b,E=function(){return(E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};!function(e){e.AUTO="auto",e.START="start",e.CENTER="center",e.END="end"}(S||(S={})),function(e){e.HORIZONTAL="horizontal",e.VERTICAL="vertical"}(y||(y={})),function(e){e.OBSERVED="observed",e.REQUESTED="requested"}(b||(b={}));var O,I,z,C,T,x=((O={})[y.VERTICAL]="scrollTop",O[y.HORIZONTAL]="scrollLeft",O),A=((I={})[y.VERTICAL]="height",I[y.HORIZONTAL]="width",I),N=((z={})[y.VERTICAL]="top",z[y.HORIZONTAL]="left",z),R=((C={})[y.VERTICAL]="marginTop",C[y.HORIZONTAL]="marginLeft",C),j=((T={})[y.VERTICAL]="marginBottom",T[y.HORIZONTAL]="marginRight",T),P=function(){function e(e){var t=e.itemCount,n=e.itemSizeGetter,r=e.estimatedItemSize;this.itemSizeGetter=n,this.itemCount=t,this.estimatedItemSize=r,this.itemSizeAndPositionData={},this.lastMeasuredIndex=-1}return e.prototype.updateConfig=function(e){var t=e.itemCount,n=e.itemSizeGetter,r=e.estimatedItemSize;null!=t&&(this.itemCount=t),null!=r&&(this.estimatedItemSize=r),null!=n&&(this.itemSizeGetter=n)},e.prototype.getLastMeasuredIndex=function(){return this.lastMeasuredIndex},e.prototype.getSizeAndPositionForIndex=function(e){if(e<0||e>=this.itemCount)throw Error("Requested index "+e+" is outside of range 0.."+this.itemCount);if(e>this.lastMeasuredIndex){for(var t=this.getSizeAndPositionOfLastMeasuredItem(),n=t.offset+t.size,r=this.lastMeasuredIndex+1;r<=e;r++){var i=this.itemSizeGetter(r);if(null==i||isNaN(i))throw Error("Invalid size returned for index "+r+" of value "+i);this.itemSizeAndPositionData[r]={offset:n,size:i},n+=i}this.lastMeasuredIndex=e}return this.itemSizeAndPositionData[e]},e.prototype.getSizeAndPositionOfLastMeasuredItem=function(){return this.lastMeasuredIndex>=0?this.itemSizeAndPositionData[this.lastMeasuredIndex]:{offset:0,size:0}},e.prototype.getTotalSize=function(){var e=this.getSizeAndPositionOfLastMeasuredItem();return e.offset+e.size+(this.itemCount-this.lastMeasuredIndex-1)*this.estimatedItemSize},e.prototype.getUpdatedOffsetForIndex=function(e){var t=e.align,n=void 0===t?S.START:t,r=e.containerSize,i=e.currentOffset,o=e.targetIndex;if(r<=0)return 0;var a,s=this.getSizeAndPositionForIndex(o),l=s.offset,c=l-r+s.size;switch(n){case S.END:a=c;break;case S.CENTER:a=l-(r-s.size)/2;break;case S.START:a=l;break;default:a=Math.max(c,Math.min(l,i))}var u=this.getTotalSize();return Math.max(0,Math.min(u-r,a))},e.prototype.getVisibleRange=function(e){var t=e.containerSize,n=e.offset,r=e.overscanCount;if(0===this.getTotalSize())return{};var i=n+t,o=this.findNearestItem(n);if("undefined"===typeof o)throw Error("Invalid offset "+n+" specified");var a=this.getSizeAndPositionForIndex(o);n=a.offset+a.size;for(var s=o;n<i&&s<this.itemCount-1;)s++,n+=this.getSizeAndPositionForIndex(s).size;return r&&(o=Math.max(0,o-r),s=Math.min(s+r,this.itemCount-1)),{start:o,stop:s}},e.prototype.resetItem=function(e){this.lastMeasuredIndex=Math.min(this.lastMeasuredIndex,e-1)},e.prototype.findNearestItem=function(e){if(isNaN(e))throw Error("Invalid offset "+e+" specified");e=Math.max(0,e);var t=this.getSizeAndPositionOfLastMeasuredItem(),n=Math.max(0,this.lastMeasuredIndex);return t.offset>=e?this.binarySearch({high:n,low:0,offset:e}):this.exponentialSearch({index:n,offset:e})},e.prototype.binarySearch=function(e){for(var t=e.low,n=e.high,r=e.offset,i=0,o=0;t<=n;){if(i=t+Math.floor((n-t)/2),(o=this.getSizeAndPositionForIndex(i).offset)===r)return i;o<r?t=i+1:o>r&&(n=i-1)}return t>0?t-1:0},e.prototype.exponentialSearch=function(e){for(var t=e.index,n=e.offset,r=1;t<this.itemCount&&this.getSizeAndPositionForIndex(t).offset<n;)t+=r,r*=2;return this.binarySearch({high:Math.min(t,this.itemCount-1),low:Math.floor(t/2),offset:n})},e}(),w={overflow:"auto",willChange:"transform",WebkitOverflowScrolling:"touch"},k={position:"relative",width:"100%",minHeight:"100%"},L={position:"absolute",top:0,left:0,width:"100%"},M=E({},L,{position:"sticky"}),D=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.itemSizeGetter=function(e){return function(n){return t.getSize(n,e)}},t.sizeAndPositionManager=new P({itemCount:t.props.itemCount,itemSizeGetter:t.itemSizeGetter(t.props.itemSize),estimatedItemSize:t.getEstimatedItemSize()}),t.state={offset:t.props.scrollOffset||null!=t.props.scrollToIndex&&t.getOffsetForIndex(t.props.scrollToIndex)||0,scrollChangeReason:b.REQUESTED},t.styleCache={},t.getRef=function(e){t.rootNode=e},t.handleScroll=function(e){var n=t.props.onScroll,r=t.getNodeOffset();r<0||t.state.offset===r||e.target!==t.rootNode||(t.setState({offset:r,scrollChangeReason:b.OBSERVED}),"function"===typeof n&&n(r,e))},t}return function(e,t){function n(){this.constructor=e}v(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.scrollOffset,n=e.scrollToIndex;this.rootNode.addEventListener("scroll",this.handleScroll,{passive:!0}),null!=t?this.scrollTo(t):null!=n&&this.scrollTo(this.getOffsetForIndex(n))},t.prototype.componentWillReceiveProps=function(e){var t=this.props,n=t.estimatedItemSize,r=t.itemCount,i=t.itemSize,o=t.scrollOffset,a=t.scrollToAlignment,s=t.scrollToIndex,l=e.scrollToIndex!==s||e.scrollToAlignment!==a,c=e.itemCount!==r||e.itemSize!==i||e.estimatedItemSize!==n;e.itemSize!==i&&this.sizeAndPositionManager.updateConfig({itemSizeGetter:this.itemSizeGetter(e.itemSize)}),e.itemCount===r&&e.estimatedItemSize===n||this.sizeAndPositionManager.updateConfig({itemCount:e.itemCount,estimatedItemSize:this.getEstimatedItemSize(e)}),c&&this.recomputeSizes(),e.scrollOffset!==o?this.setState({offset:e.scrollOffset||0,scrollChangeReason:b.REQUESTED}):"number"===typeof e.scrollToIndex&&(l||c)&&this.setState({offset:this.getOffsetForIndex(e.scrollToIndex,e.scrollToAlignment,e.itemCount),scrollChangeReason:b.REQUESTED})},t.prototype.componentDidUpdate=function(e,t){var n=this.state,r=n.offset,i=n.scrollChangeReason;t.offset!==r&&i===b.REQUESTED&&this.scrollTo(r)},t.prototype.componentWillUnmount=function(){this.rootNode.removeEventListener("scroll",this.handleScroll)},t.prototype.scrollTo=function(e){var t=this.props.scrollDirection,n=void 0===t?y.VERTICAL:t;this.rootNode[x[n]]=e},t.prototype.getOffsetForIndex=function(e,t,n){void 0===t&&(t=this.props.scrollToAlignment),void 0===n&&(n=this.props.itemCount);var r=this.props.scrollDirection,i=void 0===r?y.VERTICAL:r;return(e<0||e>=n)&&(e=0),this.sizeAndPositionManager.getUpdatedOffsetForIndex({align:t,containerSize:this.props[A[i]],currentOffset:this.state&&this.state.offset||0,targetIndex:e})},t.prototype.recomputeSizes=function(e){void 0===e&&(e=0),this.styleCache={},this.sizeAndPositionManager.resetItem(e)},t.prototype.render=function(){var e,t=this,n=this.props,r=(n.estimatedItemSize,n.height),i=n.overscanCount,o=void 0===i?3:i,a=n.renderItem,s=(n.itemCount,n.itemSize,n.onItemsRendered),l=(n.onScroll,n.scrollDirection),u=void 0===l?y.VERTICAL:l,m=(n.scrollOffset,n.scrollToIndex,n.scrollToAlignment,n.stickyIndices),d=n.style,f=n.width,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n}(n,["estimatedItemSize","height","overscanCount","renderItem","itemCount","itemSize","onItemsRendered","onScroll","scrollDirection","scrollOffset","scrollToIndex","scrollToAlignment","stickyIndices","style","width"]),h=this.state.offset,g=this.sizeAndPositionManager.getVisibleRange({containerSize:this.props[A[u]]||0,offset:h,overscanCount:o}),v=g.start,S=g.stop,b=[],O=E({},w,d,{height:r,width:f}),I=E({},k,((e={})[A[u]]=this.sizeAndPositionManager.getTotalSize(),e));if(null!=m&&0!==m.length&&(m.forEach(function(e){return b.push(a({index:e,style:t.getStyle(e,!0)}))}),u===y.HORIZONTAL&&(I.display="flex")),"undefined"!==typeof v&&"undefined"!==typeof S){for(var z=v;z<=S;z++)null!=m&&m.includes(z)||b.push(a({index:z,style:this.getStyle(z,!1)}));"function"===typeof s&&s({startIndex:v,stopIndex:S})}return Object(c.createElement)("div",E({ref:this.getRef},p,{style:O}),Object(c.createElement)("div",{style:I},b))},t.prototype.getNodeOffset=function(){var e=this.props.scrollDirection,t=void 0===e?y.VERTICAL:e;return this.rootNode[x[t]]},t.prototype.getEstimatedItemSize=function(e){return void 0===e&&(e=this.props),e.estimatedItemSize||"number"===typeof e.itemSize&&e.itemSize||50},t.prototype.getSize=function(e,t){return"function"===typeof t?t(e):Array.isArray(t)?t[e]:t},t.prototype.getStyle=function(e,t){var n=this.styleCache[e];if(n)return n;var r,i,o=this.props.scrollDirection,a=void 0===o?y.VERTICAL:o,s=this.sizeAndPositionManager.getSizeAndPositionForIndex(e),l=s.size,c=s.offset;return this.styleCache[e]=t?E({},M,((r={})[A[a]]=l,r[R[a]]=c,r[j[a]]=-(c+l),r.zIndex=1,r)):E({},L,((i={})[A[a]]=l,i[N[a]]=c,i))},t.defaultProps={overscanCount:3,scrollDirection:y.VERTICAL,width:"100%"},t.propTypes={estimatedItemSize:g.number,height:Object(g.oneOfType)([g.number,g.string]).isRequired,itemCount:g.number.isRequired,itemSize:Object(g.oneOfType)([g.number,g.array,g.func]).isRequired,onScroll:g.func,onItemsRendered:g.func,overscanCount:g.number,renderItem:g.func.isRequired,scrollOffset:g.number,scrollToIndex:g.number,scrollToAlignment:Object(g.oneOf)([S.AUTO,S.START,S.CENTER,S.END]),scrollDirection:Object(g.oneOf)([y.HORIZONTAL,y.VERTICAL]),stickyIndices:Object(g.arrayOf)(g.number),style:g.object,width:Object(g.oneOfType)([g.number,g.string])},t}(c.PureComponent);t.a=function(e){return e.loading&&0===e.articles.length?u.a.createElement(h.a,null):0===e.articles.length?u.a.createElement("div",{className:"article-preview"},"No articles are here... yet."):u.a.createElement(u.a.Fragment,null,u.a.createElement(D,{height:600,itemCount:e.articles.length,itemSize:200,renderItem:function(t){var n=t.index,r=t.style;return null!==e.articles[n]?u.a.createElement("div",{style:r,key:n},u.a.createElement(p,{article:e.articles[n],key:n})):u.a.createElement("div",{key:n},"Loading \u2026")},onItemsRendered:function(t){t.startIndex;var n=t.stopIndex;!e.isLoading&&n-10*e.currentPage>5&&e.currentPage<e.totalPagesCount&&e.onSetPage(e.currentPage+1)}}))}}}]);
//# sourceMappingURL=3.92c6e446.chunk.js.map