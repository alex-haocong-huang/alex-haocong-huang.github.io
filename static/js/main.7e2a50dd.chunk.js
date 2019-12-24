(this["webpackJsonpe-risk"]=this["webpackJsonpe-risk"]||[]).push([[0],{339:function(e,t,a){e.exports=a(742)},546:function(e,t,a){},547:function(e,t,a){},548:function(e,t,a){},677:function(e,t,a){},741:function(e,t,a){},742:function(e,t,a){"use strict";a.r(t);a(340),a(349);var n=a(0),r=a.n(n),o=a(5),c=a.n(o),i=(a(546),a(79)),l=a(80),s=a(109),u=a(107),d=a(110),m=(a(547),a(82)),p=a.n(m),h=a(746);a(548);var f=function(e){return null===e||null===e.dataSource||void 0===e.dataSource?r.a.createElement("div",null,r.a.createElement("h1",null,"Today's trades"),r.a.createElement("label",null,r.a.createElement("span",null,"There is no data")," ")):r.a.createElement("div",null,r.a.createElement("h1",null,"Today's trades"),r.a.createElement(h.a,{rowKey:"key",size:"middle","data-testid":"trades-list",rowClassName:function(e,t){var a="light-row";return t%2===1&&(a="dark-row"),a},bordered:!0,pagination:{pageSize:5,hideOnSinglePage:!0},dataSource:e.dataSource,columns:e.columns}))},v=a(750),y=a(747),b=a(748),w=a(749),E=a(93);a(677);var k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields((function(e,t){e||(console.log("Received values of form: ",t),a.props.addNewTrade(t),a.openNotificationWithIcon("success"))}))},a.state={data:[],value:"",quantities:0,fetching:!1},a.handleChange=function(e){a.setState({value:e,data:[],fetching:!1})},a.quantitiesValidator=function(e,t,a){0===t?a("0 is not allowed."):t?parseFloat(t)?parseFloat(t)>1e10?a("The maximun number is 10000000000."):parseFloat(t)<-1e10?a("The minimum number is -10000000000."):a():a("Only number is allowed."):a("Please input quantities.")},a.openNotificationWithIcon=function(e){v.a[e]({message:"Stock Trade",description:"The trade has been added successfully!"})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.form.validateFields()}},{key:"render",value:function(){var e,t=this.props.form,a=t.getFieldDecorator,n=t.getFieldsError,o=t.getFieldError,c=t.isFieldTouched,i=c("company")&&o("company"),l=c("quantities")&&o("quantities");return r.a.createElement("div",{className:"trade-form"},r.a.createElement("h1",null,"Add new trade"),r.a.createElement(y.a,{layout:"inline",onSubmit:this.handleSubmit},r.a.createElement(y.a.Item,{validateStatus:i?"error":"",help:i||""},a("company",{rules:[{required:!0,message:"Please input company name."}]})(r.a.createElement(b.a,{placeholder:"Company"}))),r.a.createElement(y.a.Item,{validateStatus:l?"error":"",help:l||""},a("quantities",{rules:[{validator:this.quantitiesValidator}]})(r.a.createElement(w.a,{className:"quantity-input",precision:3,type:"text",placeholder:"Quantities"}))),r.a.createElement(y.a.Item,null,r.a.createElement(E.a,{type:"primary",htmlType:"submit",disabled:(e=n(),Object.keys(e).some((function(t){return e[t]})))},"Submit"))))}}]),t}(r.a.Component),g=a(744),S=a(745),O=a(335),T=a.n(O),j=function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,[{key:"getStockNetQuantities",value:function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.awrap(this.fetchStockTrades());case 3:return e=t.sent,t.abrupt("return",this.calculateNetQuantities(new Map,e));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),null,this,[[0,7]])}},{key:"fetchStockTrades",value:function(){var e;return p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.awrap(T.a.get("../mocks/stockTrades.json"));case 3:return e=t.sent,console.log(e.data.dataSource),t.abrupt("return",e.data.dataSource);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),null,null,[[0,8]])}},{key:"addNewTrade",value:function(e,t){var a=new Map;return e.forEach((function(e){a.set(e.company,e)})),this.calculateNetQuantities(a,new Array(t))}},{key:"calculateNetQuantities",value:function(e,t){try{return t.forEach((function(t){var a=e.get(t.company);a?a.total=parseFloat(a.total)+parseFloat(t.quantities):e.set(t.company,{key:t.company,company:t.company,total:t.quantities})})),Array.from(e.values())}catch(a){console.log(a)}}}]),e}(),N=(a(741),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).addNewTrade=function(e){var t=(new j).addNewTrade(a.state.dataSource,e);a.setState({dataSource:t})},a.state={fradeForm:{}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,t;return p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=new j,a.next=3,p.a.awrap(e.getStockNetQuantities());case 3:t=a.sent,this.setState({dataSource:t});case 5:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=y.a.create({name:"TradeForm"})(k);return r.a.createElement("div",{className:"stack-trades"},r.a.createElement(g.a,null,r.a.createElement(S.a,{span:12},r.a.createElement(f,{dataSource:this.state.dataSource,columns:[{title:"Company",dataIndex:"company",sorter:function(e,t){return e.company.localeCompare(t.company)},key:"company"},{title:"Total",dataIndex:"total",key:"total"}]}))),r.a.createElement(g.a,null,r.a.createElement(S.a,{span:12},r.a.createElement(e,{addNewTrade:this.addNewTrade}))))}}]),t}(r.a.Component)),F=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[339,1,2]]]);