"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[98],{9174:function(e,o,t){t.d(o,{Z:function(){return q}});var n=t(4942),r=t(3366),a=t(7462),i=t(2791),c=t(9278),l=t(4419),s=t(2065),d=t(9439),u=t(4036),p=t(6934),m=t(5158),v=t(2930),f=t(2982),h=t(5878),b=t(1217);function Z(e){return(0,b.Z)("PrivateSwitchBase",e)}(0,h.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var k=t(3329),g=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],x=(0,p.ZP)(f.Z)((function(e){var o=e.ownerState;return(0,a.Z)({padding:9,borderRadius:"50%"},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})})),y=(0,p.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),P=i.forwardRef((function(e,o){var t=e.autoFocus,n=e.checked,i=e.checkedIcon,s=e.className,p=e.defaultChecked,f=e.disabled,h=e.disableFocusRipple,b=void 0!==h&&h,P=e.edge,C=void 0!==P&&P,w=e.icon,S=e.id,R=e.inputProps,z=e.inputRef,F=e.name,M=e.onBlur,j=e.onChange,N=e.onFocus,B=e.readOnly,I=e.required,L=void 0!==I&&I,q=e.tabIndex,O=e.type,E=e.value,T=(0,r.Z)(e,g),H=(0,m.Z)({controlled:n,default:Boolean(p),name:"SwitchBase",state:"checked"}),V=(0,d.Z)(H,2),A=V[0],D=V[1],_=(0,v.Z)(),G=f;_&&"undefined"===typeof G&&(G=_.disabled);var $="checkbox"===O||"radio"===O,W=(0,a.Z)({},e,{checked:A,disabled:G,disableFocusRipple:b,edge:C}),J=function(e){var o=e.classes,t=e.checked,n=e.disabled,r=e.edge,a={root:["root",t&&"checked",n&&"disabled",r&&"edge".concat((0,u.Z)(r))],input:["input"]};return(0,l.Z)(a,Z,o)}(W);return(0,k.jsxs)(x,(0,a.Z)({component:"span",className:(0,c.Z)(J.root,s),centerRipple:!0,focusRipple:!b,disabled:G,tabIndex:null,role:void 0,onFocus:function(e){N&&N(e),_&&_.onFocus&&_.onFocus(e)},onBlur:function(e){M&&M(e),_&&_.onBlur&&_.onBlur(e)},ownerState:W,ref:o},T,{children:[(0,k.jsx)(y,(0,a.Z)({autoFocus:t,checked:n,defaultChecked:p,className:J.input,disabled:G,id:$?S:void 0,name:F,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var o=e.target.checked;D(o),j&&j(e,o)}},readOnly:B,ref:z,required:L,ownerState:W,tabIndex:q,type:O},"checkbox"===O&&void 0===E?{}:{value:E},R)),A?i:w]}))})),C=t(9201),w=(0,C.Z)((0,k.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),S=(0,C.Z)((0,k.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),R=(0,C.Z)((0,k.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),z=t(1402);function F(e){return(0,b.Z)("MuiCheckbox",e)}var M=(0,h.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),j=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],N=(0,p.ZP)(P,{shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,t.indeterminate&&o.indeterminate,"default"!==t.color&&o["color".concat((0,u.Z)(t.color))]]}})((function(e){var o,t=e.theme,r=e.ownerState;return(0,a.Z)({color:(t.vars||t).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===r.color?t.vars.palette.action.activeChannel:t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,s.Fq)("default"===r.color?t.palette.action.active:t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(o={},(0,n.Z)(o,"&.".concat(M.checked,", &.").concat(M.indeterminate),{color:(t.vars||t).palette[r.color].main}),(0,n.Z)(o,"&.".concat(M.disabled),{color:(t.vars||t).palette.action.disabled}),o))})),B=(0,k.jsx)(S,{}),I=(0,k.jsx)(w,{}),L=(0,k.jsx)(R,{}),q=i.forwardRef((function(e,o){var t,n,s=(0,z.Z)({props:e,name:"MuiCheckbox"}),d=s.checkedIcon,p=void 0===d?B:d,m=s.color,v=void 0===m?"primary":m,f=s.icon,h=void 0===f?I:f,b=s.indeterminate,Z=void 0!==b&&b,g=s.indeterminateIcon,x=void 0===g?L:g,y=s.inputProps,P=s.size,C=void 0===P?"medium":P,w=s.className,S=(0,r.Z)(s,j),R=Z?x:h,M=Z?x:p,q=(0,a.Z)({},s,{color:v,indeterminate:Z,size:C}),O=function(e){var o=e.classes,t=e.indeterminate,n=e.color,r=e.size,i={root:["root",t&&"indeterminate","color".concat((0,u.Z)(n)),"size".concat((0,u.Z)(r))]},c=(0,l.Z)(i,F,o);return(0,a.Z)({},o,c)}(q);return(0,k.jsx)(N,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":Z},y),icon:i.cloneElement(R,{fontSize:null!=(t=R.props.fontSize)?t:C}),checkedIcon:i.cloneElement(M,{fontSize:null!=(n=M.props.fontSize)?n:C}),ownerState:q,ref:o,className:(0,c.Z)(O.root,w)},S,{classes:O}))}))},2114:function(e,o,t){t.d(o,{Z:function(){return E}});var n=t(4942),r=t(3366),a=t(7462),i=t(2791),c=t(9278),l=t(4419),s=t(2930),d=t(831),u=t(2466),p=t(1217),m=(0,t(4046).ZP)(),v=t(7078),f=t(8519),h=t(5080),b=t(1184),Z=t(5682),k=t(3329),g=["component","direction","spacing","divider","children","className","useFlexGap"],x=(0,h.Z)(),y=m("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,o){return o.root}});function P(e){return(0,v.Z)({props:e,name:"MuiStack",defaultTheme:x})}function C(e,o){var t=i.Children.toArray(e).filter(Boolean);return t.reduce((function(e,n,r){return e.push(n),r<t.length-1&&e.push(i.cloneElement(o,{key:"separator-".concat(r)})),e}),[])}var w=function(e){var o=e.ownerState,t=e.theme,r=(0,a.Z)({display:"flex",flexDirection:"column"},(0,b.k9)({theme:t},(0,b.P$)({values:o.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(o.spacing){var i=(0,Z.hB)(t),c=Object.keys(t.breakpoints.values).reduce((function(e,t){return("object"===typeof o.spacing&&null!=o.spacing[t]||"object"===typeof o.direction&&null!=o.direction[t])&&(e[t]=!0),e}),{}),l=(0,b.P$)({values:o.direction,base:c}),s=(0,b.P$)({values:o.spacing,base:c});"object"===typeof l&&Object.keys(l).forEach((function(e,o,t){if(!l[e]){var n=o>0?l[t[o-1]]:"column";l[e]=n}}));r=(0,u.Z)(r,(0,b.k9)({theme:t},s,(function(e,t){return o.useFlexGap?{gap:(0,Z.NA)(i,e)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":(0,n.Z)({},"margin".concat((r=t?l[t]:o.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,Z.NA)(i,e))};var r})))}return r=(0,b.dt)(t.breakpoints,r)};var S=t(6934),R=t(1402),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.createStyledComponent,t=void 0===o?y:o,n=e.useThemeProps,c=void 0===n?P:n,s=e.componentName,u=void 0===s?"MuiStack":s,m=function(){return(0,l.Z)({root:["root"]},(function(e){return(0,p.Z)(u,e)}),{})},v=t(w),h=i.forwardRef((function(e,o){var t=c(e),n=(0,f.Z)(t),i=n.component,l=void 0===i?"div":i,s=n.direction,u=void 0===s?"column":s,p=n.spacing,h=void 0===p?0:p,b=n.divider,Z=n.children,x=n.className,y=n.useFlexGap,P=void 0!==y&&y,w=(0,r.Z)(n,g),S={direction:u,spacing:h,useFlexGap:P},R=m();return(0,k.jsx)(v,(0,a.Z)({as:l,ownerState:S,ref:o,className:(0,d.Z)(R.root,x)},w,{children:b?C(Z,b):Z}))}));return h}({createStyledComponent:(0,S.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,o){return o.root}}),useThemeProps:function(e){return(0,R.Z)({props:e,name:"MuiStack"})}}),F=z,M=t(890),j=t(4036);function N(e){return(0,p.Z)("MuiFormControlLabel",e)}var B=(0,t(5878).Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),I=t(6147),L=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],q=(0,S.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[(0,n.Z)({},"& .".concat(B.label),o.label),o.root,o["labelPlacement".concat((0,j.Z)(t.labelPlacement))]]}})((function(e){var o=e.theme,t=e.ownerState;return(0,a.Z)((0,n.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(B.disabled),{cursor:"default"}),"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,n.Z)({},"& .".concat(B.label),(0,n.Z)({},"&.".concat(B.disabled),{color:(o.vars||o).palette.text.disabled})))})),O=(0,S.ZP)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:function(e,o){return o.asterisk}})((function(e){var o=e.theme;return(0,n.Z)({},"&.".concat(B.error),{color:(o.vars||o).palette.error.main})})),E=i.forwardRef((function(e,o){var t,n,d=(0,R.Z)({props:e,name:"MuiFormControlLabel"}),u=d.className,p=d.componentsProps,m=void 0===p?{}:p,v=d.control,f=d.disabled,h=d.disableTypography,b=d.label,Z=d.labelPlacement,g=void 0===Z?"end":Z,x=d.required,y=d.slotProps,P=void 0===y?{}:y,C=(0,r.Z)(d,L),w=(0,s.Z)(),S=null!=(t=null!=f?f:v.props.disabled)?t:null==w?void 0:w.disabled,z=null!=x?x:v.props.required,B={disabled:S,required:z};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof v.props[e]&&"undefined"!==typeof d[e]&&(B[e]=d[e])}));var E=(0,I.Z)({props:d,muiFormControl:w,states:["error"]}),T=(0,a.Z)({},d,{disabled:S,labelPlacement:g,required:z,error:E.error}),H=function(e){var o=e.classes,t=e.disabled,n=e.labelPlacement,r=e.error,a=e.required,i={root:["root",t&&"disabled","labelPlacement".concat((0,j.Z)(n)),r&&"error",a&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",r&&"error"]};return(0,l.Z)(i,N,o)}(T),V=null!=(n=P.typography)?n:m.typography,A=b;return null==A||A.type===M.Z||h||(A=(0,k.jsx)(M.Z,(0,a.Z)({component:"span"},V,{className:(0,c.Z)(H.label,null==V?void 0:V.className),children:A}))),(0,k.jsxs)(q,(0,a.Z)({className:(0,c.Z)(H.root,u),ownerState:T,ref:o},C,{children:[i.cloneElement(v,B),z?(0,k.jsxs)(F,{direction:"row",alignItems:"center",children:[A,(0,k.jsxs)(O,{ownerState:T,"aria-hidden":!0,className:H.asterisk,children:["\u2009","*"]})]}):A]}))}))},8014:function(e,o,t){t.d(o,{r1q:function(){return r}});var n=t(9983);function r(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M168.8 32.89l-32.6 32.53 21.3 21.17L190 54.08zm33.9 33.96l-9.9 9.91 123 123.04 9.9-9.9zm159.4 18.06c-3.7 0-7.4.1-10.9.3-31.9 1.78-56.7 11.76-78.3 26.39l65.5 65.6c3.5 7.3 52 96.2 65.5 123.3-9.7-6.4-123.4-65.4-123.4-65.4l-15.3-15.2v140.3c23.9-14.6 50.1-27.7 83.6-31.2 37.5-4 83.5 4.3 144.2 33.1V118.7c-51.7-22.99-93.3-32.89-127.2-33.69-1.3 0-2.5-.11-3.7-.1zm-230.8 1.03C100.4 88.93 63.44 99 19.05 118.7v243.4C79.85 333.3 125.8 325 163.3 329c33 5.2 58.1 15.8 83.6 31.2V201.6c-38.6-38.5-77.1-77.1-115.6-115.66zm48.8 3.55l-9.9 9.89 123 123.02 9.9-9.9zM336 205.1l-27.5 27.5 55.1 27.6zM143.8 346.7c-32 .3-71.85 9.8-124.75 36v42.5c60.8-28.8 106.75-37.1 144.25-33.1 18.6 2 34.9 6.9 49.8 13.3-4.7 6.1-9.3 13.3-13.9 21.7h117.2c-6-8.2-11.8-15.4-17.7-21.6 15-6.5 31.4-11.4 50.1-13.4 37.5-4 83.5 4.3 144.2 33.1v-42.5c-53.1-26.3-93.1-35.9-125.2-36h-3.1c-4.8.1-9.4.4-13.9.9-34 3.6-59.6 18-85.6 34.4-5.7-.8-13-1.8-18.3-.9-27.2-16.2-58.2-30.4-85.5-33.5-5.6-.6-11.5-.9-17.6-.9z"}}]})(e)}}}]);
//# sourceMappingURL=98.1724d00d.chunk.js.map