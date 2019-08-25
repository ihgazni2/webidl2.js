!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.WebIDL2=t():e.WebIDL2=t()}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t,n,r,s,{level:o="error",autofix:i}={}){function a(n){return n>0?e.slice(t,t+n):e.slice(Math.max(t+n,0),t)}function c(n,{precedes:r}={}){const s=n.map(e=>e.trivia+e.value).join(""),o=e[t];return"eof"===o.type?s:r?s+o.trivia:s.slice(o.trivia.length)}const u="eof"!==e[t].type?e[t].line:e.length>1?e[t-1].line:1,l=function(e){const t=e.split("\n");return t[t.length-1]}(c(a(-5),{precedes:!0})),p=a(5),d=c(p),m=l+d.split("\n")[0]+"\n"+(" ".repeat(l.length)+"^"),f="Syntax"===s?"since":"inside",y=`${s} error at line ${u}${e.name?` in ${e.name}`:""}${n&&n.name?`, ${f} \`${n.partial?"partial ":""}${n.type} ${n.name}\``:""}:\n${m}`;return{message:`${y} ${r}`,bareMessage:r,context:y,line:u,sourceName:e.name,level:o,autofix:i,input:d,tokens:p}}function s(e,t,n,s,o){return r(e,t.index,n,s,"Validation",o)}n.r(t);const o={decimal:/-?(?=[0-9]*\.|[0-9]+[eE])(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][-+]?[0-9]+)?|[0-9]+[Ee][-+]?[0-9]+)/y,integer:/-?(0([Xx][0-9A-Fa-f]+|[0-7]*)|[1-9][0-9]*)/y,identifier:/[_-]?[A-Za-z][0-9A-Z_a-z-]*/y,string:/"[^"]*"/y,whitespace:/[\t\n\r ]+/y,comment:/((\/(\/.*|\*([^*]|\*[^\/])*\*\/)[\t\n\r ]*)+)/y,other:/[^\t\n\r 0-9A-Za-z]/y},i=["ByteString","DOMString","USVString"],a=["async","attribute","callback","const","deleter","dictionary","enum","getter","includes","inherit","interface","iterable","maplike","namespace","partial","required","setlike","setter","static","stringifier","typedef","unrestricted"],c=["-Infinity","FrozenArray","Infinity","NaN","Promise","async","boolean","byte","double","false","float","long","mixin","null","octet","optional","or","readonly","record","sequence","short","true","unsigned","void"].concat(a,i),u=["(",")",",","...",":",";","<","=",">","?","[","]","{","}"];class l{constructor(e){this.source=function(e){const t=[];let n=0,r="",s=1,i=0;for(;n<e.length;){const o=e.charAt(n);let l=-1;if(/[\t\n\r ]/.test(o)?l=a("whitespace",{noFlushTrivia:!0}):"/"===o&&(l=a("comment",{noFlushTrivia:!0})),-1!==l){const e=t.pop().value;s+=(e.match(/\n/g)||[]).length,r+=e,i-=1}else if(/[-0-9.A-Z_a-z]/.test(o)){if(-1===(l=a("decimal"))&&(l=a("integer")),-1===l){l=a("identifier");const e=t[t.length-1];-1!==l&&c.includes(e.value)&&(e.type=e.value)}}else'"'===o&&(l=a("string"));for(const o of u)if(e.startsWith(o,n)){t.push({type:o,value:o,trivia:r,line:s,index:i}),r="",l=n+=o.length;break}if(-1===l&&(l=a("other")),-1===l)throw new Error("Token stream not progressing");n=l,i+=1}return t.push({type:"eof",value:"",trivia:r}),t;function a(a,{noFlushTrivia:c}={}){const u=o[a];u.lastIndex=n;const l=u.exec(e);return l?(t.push({type:a,value:l[0],trivia:r,line:s,index:i}),c||(r=""),u.lastIndex):-1}}(e),this.position=0}error(e){throw new p(function(e,t,n,s){return r(e,t,n,s,"Syntax")}(this.source,this.position,this.current,e))}probe(e){return this.source.length>this.position&&this.source[this.position].type===e}consume(...e){for(const t of e){if(!this.probe(t))continue;const e=this.source[this.position];return this.position++,e}}unconsume(e){this.position=e}}class p extends Error{constructor({message:e,bareMessage:t,context:n,line:r,sourceName:s,input:o,tokens:i}){super(e),this.name="WebIDLParseError",this.bareMessage=t,this.context=n,this.line=r,this.sourceName=s,this.input=o,this.tokens=i}}class d{constructor({source:e,tokens:t}){Object.defineProperties(this,{source:{value:e},tokens:{value:t}})}toJSON(){const e={type:void 0,name:void 0,inheritance:void 0};let t=this;for(;t!==Object.prototype;){const n=Object.getOwnPropertyDescriptors(t);for(const[t,r]of Object.entries(n))(r.enumerable||r.get)&&(e[t]=this[t]);t=Object.getPrototypeOf(t)}return e}}function m(e,t){if(!e.union){const n=t.unique.get(e.idlType);if(!n)return;if("typedef"===n.type){const{typedefIncludesDictionary:r}=t.cache;if(r.has(n))return r.get(n);t.cache.typedefIncludesDictionary.set(n,void 0);const s=m(n.idlType,t);if(t.cache.typedefIncludesDictionary.set(n,s),s)return e}if("dictionary"===n.type)return e}for(const n of e.subtype){const e=m(n,t);if(e)return n.union?e:n}}function f(e,t){const n=e.consume("?");n&&(t.tokens.nullable=n),e.probe("?")&&e.error("Can't nullable more than once")}function y(e,t){let n=function(e,t){const n=e.consume("FrozenArray","Promise","sequence","record");if(!n)return;const r=new h({source:e.source,tokens:{base:n}});switch(r.tokens.open=e.consume("<")||e.error(`No opening bracket after ${n.type}`),n.type){case"Promise":{e.probe("[")&&e.error("Promise type cannot have extended attribute");const n=q(e,t)||e.error("Missing Promise subtype");r.subtype.push(n);break}case"sequence":case"FrozenArray":{const s=E(e,t)||e.error(`Missing ${n.type} subtype`);r.subtype.push(s);break}case"record":{e.probe("[")&&e.error("Record key cannot have extended attribute");const n=e.consume(...i)||e.error(`Record key must be one of: ${i.join(", ")}`),s=new h({source:e.source,tokens:{base:n}});s.tokens.separator=e.consume(",")||e.error("Missing comma after record key type"),s.type=t;const o=E(e,t)||e.error("Error parsing generic type record");r.subtype.push(s,o);break}}return r.idlType||e.error(`Error parsing generic type ${n.type}`),r.tokens.close=e.consume(">")||e.error(`Missing closing bracket after ${n.type}`),r}(e,t)||O(e);if(!n){const t=e.consume("identifier",...i);if(!t)return;n=new h({source:e.source,tokens:{base:t}}),e.probe("<")&&e.error(`Unsupported generic type ${t.value}`)}return"Promise"===n.generic&&e.probe("?")&&e.error("Promise type cannot be nullable"),n.type=t||null,f(e,n),n.nullable&&"any"===n.idlType&&e.error("Type `any` cannot be made nullable"),n}class h extends d{static parse(e,t){return y(e,t)||function(e,t){const n={};if(n.open=e.consume("("),!n.open)return;const r=new h({source:e.source,tokens:n});for(r.type=t||null;;){const t=E(e)||e.error("No type after open parenthesis or 'or' in union type");"any"===t.idlType&&e.error("Type `any` cannot be included in a union type"),r.subtype.push(t);const n=e.consume("or");if(!n)break;t.tokens.separator=n}return r.idlType.length<2&&e.error("At least two types are expected in a union type but found less"),n.close=e.consume(")")||e.error("Unterminated union type"),f(e,r),r}(e,t)}constructor({source:e,tokens:t}){super({source:e,tokens:t}),Object.defineProperty(this,"subtype",{value:[]}),this.extAttrs=[]}get generic(){return this.subtype.length&&this.tokens.base?this.tokens.base.value:""}get nullable(){return Boolean(this.tokens.nullable)}get union(){return Boolean(this.subtype.length)&&!this.tokens.base}get idlType(){if(this.subtype.length)return this.subtype;return N([this.tokens.prefix,this.tokens.base,this.tokens.postfix].filter(e=>e).map(e=>e.value).join(" "))}*validate(e){const t=!this.union&&e.unique.get(this.idlType),n=this.union?this:t&&"typedef"===t.type?t.idlType:void 0;if(n&&this.nullable){const t=m(n,e);if(t){const e=(this.union?t:this).tokens.base,n="Nullable union cannot include a dictionary type";yield s(this.source,e,this,n)}}else for(const t of this.subtype)yield*t.validate(e)}}class k extends d{static parse(e){const t=e.consume("=");if(!t)return null;const n=$(e)||e.consume("string","null","[","{")||e.error("No value for default"),r=[n];if("["===n.type){const t=e.consume("]")||e.error("Default sequence value must be empty");r.push(t)}else if("{"===n.type){const t=e.consume("}")||e.error("Default dictionary value must be empty");r.push(t)}return new k({source:e.source,tokens:{assign:t},expression:r})}constructor({source:e,tokens:t,expression:n}){super({source:e,tokens:t}),Object.defineProperty(this,"expression",{value:n})}get type(){return j(this.expression[0]).type}get value(){return j(this.expression[0]).value}get negative(){return j(this.expression[0]).negative}}class b extends Array{constructor({source:e,tokens:t}){super(),Object.defineProperties(this,{source:{value:e},tokens:{value:t}})}}class g extends d{static parse(e){const t={assign:e.consume("=")},n=new g({source:e.source,tokens:t});return t.assign&&(t.secondaryName=e.consume("identifier","decimal","integer","string")),t.open=e.consume("("),t.open?(n.list="identifier-list"===n.rhsType?function(e){const t=I(e,{parser:T.parser(e,"identifier"),listName:"identifier list"});t.length||e.error("Expected identifiers but none found");return t}(e):P(e),t.close=e.consume(")")||e.error("Unexpected token in extended attribute argument list")):n.hasRhs&&!t.secondaryName&&e.error("No right hand side to extended attribute assignment"),n}get rhsType(){return this.tokens.assign?this.tokens.secondaryName?this.tokens.secondaryName.type:"identifier-list":null}}class v extends d{static parse(e){const t=e.consume("identifier");if(t)return new v({source:e.source,tokens:{name:t},params:g.parse(e)})}constructor({source:e,tokens:t,params:n}){super({source:e,tokens:t}),Object.defineProperty(this,"params",{value:n})}get type(){return"extended-attribute"}get name(){return this.tokens.name.value}get rhs(){const{rhsType:e,tokens:t,list:n}=this.params;return e?{type:e,value:"identifier-list"===e?n:t.secondaryName.value}:null}get arguments(){const{rhsType:e,list:t}=this.params;return t&&"identifier-list"!==e?t:[]}*validate(e){if("NoInterfaceObject"===this.name){const e="`[NoInterfaceObject]` extended attribute is an undesirable feature that may be removed from Web IDL in the future. Refer to the [relevant upstream PR](https://github.com/heycam/webidl/pull/609) for more information.";yield s(this.source,this.tokens.name,this,e,{level:"warning"})}for(const t of this.arguments)yield*t.validate(e)}}class x extends b{static parse(e){const t={};if(t.open=e.consume("["),!t.open)return new x({});const n=new x({source:e.source,tokens:t});return n.push(...I(e,{parser:v.parse,listName:"extended attribute"})),t.close=e.consume("]")||e.error("Unexpected closing token of extended attribute"),n.length||e.error("Found an empty extended attribute"),e.probe("[")&&e.error("Illegal double extended attribute lists, consider merging them"),n}*validate(e){for(const t of this)yield*t.validate(e)}}class w extends d{static parse(e){const t=e.position,n={},r=new w({source:e.source,tokens:n});return r.extAttrs=x.parse(e),n.optional=e.consume("optional"),r.idlType=E(e,"argument-type"),r.idlType?(n.optional||(n.variadic=e.consume("...")),n.name=e.consume("identifier",...a),n.name?(r.default=n.optional?k.parse(e):null,r):e.unconsume(t)):e.unconsume(t)}get type(){return"argument"}get optional(){return!!this.tokens.optional}get variadic(){return!!this.tokens.variadic}get name(){return N(this.tokens.name.value)}*validate(e){if(yield*this.idlType.validate(e),m(this.idlType,e)){if(this.optional&&!this.default){const e="Optional dictionary arguments must have a default value of `{}`.";yield s(this.source,this.tokens.name,this,e,{autofix:(t=this,()=>{t.default=k.parse(new l(" = {}"))})})}if(this.idlType.nullable){const e="Dictionary arguments cannot be nullable.";yield s(this.source,this.tokens.name,this,e)}}var t}}class T extends d{static parser(e,t){return()=>{const n=e.consume(t);if(n)return new T({source:e.source,tokens:{value:n}})}}get value(){return this.tokens.value.value}}class A extends d{static parse(e,{special:t,regular:n}={}){const r={special:t},s=new A({source:e.source,tokens:r});return t&&"stringifier"===t.value&&(r.termination=e.consume(";"),r.termination)?(s.arguments=[],s):(t||n||(r.special=e.consume("getter","setter","deleter")),s.idlType=q(e)||e.error("Missing return type"),r.name=e.consume("identifier","includes"),r.open=e.consume("(")||e.error("Invalid operation"),s.arguments=P(e),r.close=e.consume(")")||e.error("Unterminated operation"),r.termination=e.consume(";")||e.error("Unterminated operation, expected `;`"),s)}get type(){return"operation"}get name(){const{name:e}=this.tokens;return e?N(e.value):""}get special(){return this.tokens.special?this.tokens.special.value:""}*validate(e){this.idlType&&(yield*this.idlType.validate(e));for(const t of this.arguments)yield*t.validate(e)}}class M extends d{static parse(e,{special:t,noInherit:n=!1,readonly:r=!1}={}){const s=e.position,o={special:t},i=new M({source:e.source,tokens:o});if(t||n||(o.special=e.consume("inherit")),"inherit"===i.special&&e.probe("readonly")&&e.error("Inherited attributes cannot be read-only"),o.readonly=e.consume("readonly"),r&&!o.readonly&&e.probe("attribute")&&e.error("Attributes must be readonly in this context"),o.base=e.consume("attribute"),o.base){switch(i.idlType=E(e,"attribute-type")||e.error("Attribute lacks a type"),i.idlType.generic){case"sequence":case"record":e.error(`Attributes cannot accept ${i.idlType.generic} types`)}return o.name=e.consume("identifier","async","required")||e.error("Attribute lacks a name"),o.termination=e.consume(";")||e.error("Unterminated attribute, expected `;`"),i}e.unconsume(s)}get type(){return"attribute"}get special(){return this.tokens.special?this.tokens.special.value:""}get readonly(){return!!this.tokens.readonly}get name(){return N(this.tokens.name.value)}*validate(e){yield*this.idlType.validate(e)}}function N(e){return e.startsWith("_")?e.slice(1):e}function I(e,{parser:t,allowDangler:n,listName:r="list"}){const s=t(e);if(!s)return[];s.tokens.separator=e.consume(",");const o=[s];for(;s.tokens.separator;){const s=t(e);if(!s){n||e.error(`Trailing comma in ${r}`);break}if(s.tokens.separator=e.consume(","),o.push(s),!s.tokens.separator)break}return o}function $(e){return e.consume("true","false","Infinity","-Infinity","NaN","decimal","integer")}function j({type:e,value:t}){switch(e){case"true":case"false":return{type:"boolean",value:"true"===e};case"Infinity":case"-Infinity":return{type:"Infinity",negative:e.startsWith("-")};case"[":return{type:"sequence",value:[]};case"{":return{type:"dictionary"};case"decimal":case"integer":return{type:"number",value:t};case"string":return{type:"string",value:t.slice(1,-1)};default:return{type:e}}}function O(e){const{source:t}=e,n=function(){const n=e.consume("unsigned"),r=e.consume("short","long");if(r){const s=e.consume("long");return new h({source:t,tokens:{prefix:n,base:r,postfix:s}})}n&&e.error("Failed to parse integer type")}()||function(){const n=e.consume("unrestricted"),r=e.consume("float","double");if(r)return new h({source:t,tokens:{prefix:n,base:r}});n&&e.error("Failed to parse float type")}();if(n)return n;const r=e.consume("boolean","byte","octet");return r?new h({source:t,tokens:{base:r}}):void 0}function P(e){return I(e,{parser:w.parse,listName:"arguments list"})}function E(e,t){const n=x.parse(e),r=h.parse(e,t);return r&&(r.extAttrs=n),r}function q(e,t){const n=h.parse(e,t||"return-type");if(n)return n;const r=e.consume("void");if(r){const t=new h({source:e.source,tokens:{base:r}});return t.type="return-type",t}}function D(e){const t=e.consume("stringifier");if(t)return M.parse(e,{special:t})||A.parse(e,{special:t})||e.error("Unterminated stringifier")}function U(e){return()=>{if(e.extAttrs.length){const t=new l("Exposed=Window,"),n=v.parse(t);n.tokens.separator=t.consume(",");const r=e.extAttrs[0];/^\s/.test(r.tokens.name.trivia)||(r.tokens.name.trivia=` ${r.tokens.name.trivia}`),e.extAttrs.unshift(n)}else e.extAttrs=x.parse(new l("[Exposed=Window]")),e.extAttrs.tokens.open.trivia=e.tokens.base.trivia,e.tokens.base.trivia=" "}}class W extends T{static parse(e){const t=e.consume("string");if(t)return new W({source:e.source,tokens:{value:t}})}get type(){return"enum-value"}get value(){return super.value.slice(1,-1)}}class S extends d{static parse(e){const t={};if(t.base=e.consume("enum"),!t.base)return;t.name=e.consume("identifier")||e.error("No name for enum");const n=e.current=new S({source:e.source,tokens:t});return t.open=e.consume("{")||e.error("Bodyless enum"),n.values=I(e,{parser:W.parse,allowDangler:!0,listName:"enumeration"}),e.probe("string")&&e.error("No comma between enum values"),t.close=e.consume("}")||e.error("Unexpected value in enum"),n.values.length||e.error("No value in enum"),t.termination=e.consume(";")||e.error("No semicolon after enum"),n}get type(){return"enum"}get name(){return N(this.tokens.name.value)}}class z extends d{static parse(e){const t=e.consume("identifier");if(!t)return;const n={target:t};if(n.includes=e.consume("includes"),n.includes)return n.mixin=e.consume("identifier")||e.error("Incomplete includes statement"),n.termination=e.consume(";")||e.error("No terminating ; for includes statement"),new z({source:e.source,tokens:n});e.unconsume(t.index)}get type(){return"includes"}get target(){return N(this.tokens.target.value)}get includes(){return N(this.tokens.mixin.value)}}class _ extends d{static parse(e){const t={},n=new _({source:e.source,tokens:t});if(t.base=e.consume("typedef"),t.base)return n.idlType=E(e,"typedef-type")||e.error("Typedef lacks a type"),t.name=e.consume("identifier")||e.error("Typedef lacks a name"),e.current=n,t.termination=e.consume(";")||e.error("Unterminated typedef, expected `;`"),n}get type(){return"typedef"}get name(){return N(this.tokens.name.value)}*validate(e){yield*this.idlType.validate(e)}}class C extends d{static parse(e,t){const n={base:t},r=new C({source:e.source,tokens:n});return n.name=e.consume("identifier")||e.error("Callback lacks a name"),e.current=r,n.assign=e.consume("=")||e.error("Callback lacks an assignment"),r.idlType=q(e)||e.error("Callback lacks a return type"),n.open=e.consume("(")||e.error("Callback lacks parentheses for arguments"),r.arguments=P(e),n.close=e.consume(")")||e.error("Unterminated callback"),n.termination=e.consume(";")||e.error("Unterminated callback, expected `;`"),r}get type(){return"callback"}get name(){return N(this.tokens.name.value)}*validate(e){yield*this.idlType.validate(e)}}class F extends d{static parse(e,t,{type:n,inheritable:r,allowedMembers:s,enableMozillaBodylessInterface:o}){const{tokens:i}=t;if(i.name=e.consume("identifier")||e.error(`Missing name in ${t.type}`),e.current=t,r&&Object.assign(i,function(e){const t=e.consume(":");return t?{colon:t,inheritance:e.consume("identifier")||e.error("Inheritance lacks a type")}:{}}(e)),i.open=e.consume("{"),!i.open&&!0===o)return i.termination=e.consume(";")||e.error(`Missing semicolon after ${n}`),t;for(i.open||e.error(`Bodyless ${n}`),t.members=[];;){if(i.close=e.consume("}"),i.close)return i.termination=e.consume(";")||e.error(`Missing semicolon after ${n}`),t;const r=x.parse(e);let o;for(const[t,...n]of s)if(o=t(e,...n))break;o||e.error("Unknown member"),o.extAttrs=r,t.members.push(o)}}get partial(){return!!this.tokens.partial}get name(){return N(this.tokens.name.value)}get inheritance(){return this.tokens.inheritance?N(this.tokens.inheritance.value):null}*validate(e){for(const t of this.members)t.validate&&(yield*t.validate(e))}}class R extends d{static parse(e){const t={};if(t.base=e.consume("const"),!t.base)return;let n=O(e);if(!n){const t=e.consume("identifier")||e.error("Const lacks a type");n=new h({source:e.source,tokens:{base:t}})}e.probe("?")&&e.error("Unexpected nullable constant type"),n.type="const-type",t.name=e.consume("identifier")||e.error("Const lacks a name"),t.assign=e.consume("=")||e.error("Const lacks value assignment"),t.value=$(e)||e.error("Const lacks a value"),t.termination=e.consume(";")||e.error("Unterminated const, expected `;`");const r=new R({source:e.source,tokens:t});return r.idlType=n,r}get type(){return"const"}get name(){return unescape(this.tokens.name.value)}get value(){return j(this.tokens.value)}}class B extends d{static parse(e){const t=e.position,n={},r=new B({source:e.source,tokens:n});if(n.readonly=e.consume("readonly"),n.readonly||(n.async=e.consume("async")),n.base=n.readonly?e.consume("maplike","setlike"):n.async?e.consume("iterable"):e.consume("iterable","maplike","setlike"),!n.base)return void e.unconsume(t);const{type:s}=r,o="maplike"===s||r.async,i=o||"iterable"===s;n.open=e.consume("<")||e.error(`Missing less-than sign \`<\` in ${s} declaration`);const a=E(e)||e.error(`Missing a type argument in ${s} declaration`);return r.idlType=[a],i&&(a.tokens.separator=e.consume(","),a.tokens.separator?r.idlType.push(E(e)):o&&e.error(`Missing second type argument in ${s} declaration`)),n.close=e.consume(">")||e.error(`Missing greater-than sign \`>\` in ${s} declaration`),n.termination=e.consume(";")||e.error(`Missing semicolon after ${s} declaration`),r}get type(){return this.tokens.base.value}get readonly(){return!!this.tokens.readonly}get async(){return!!this.tokens.async}}function L(e){const t=e.consume("static");if(t)return M.parse(e,{special:t})||A.parse(e,{special:t})||e.error("No body in static member")}class Z extends F{static parse(e,t,{partial:n=null,enableMozillaBodylessInterface:r}={}){console.log("interface: ",r);const s={partial:n,base:t};return F.parse(e,new Z({source:e.source,tokens:s}),{type:"interface",inheritable:!n,allowedMembers:[[R.parse],[L],[D],[B.parse],[M.parse],[A.parse]],enableMozillaBodylessInterface:r})}get type(){return"interface"}*validate(e){if(yield*this.extAttrs.validate(e),!this.partial&&this.extAttrs.every(e=>"Exposed"!==e.name)&&this.extAttrs.every(e=>"NoInterfaceObject"!==e.name)){const e="Interfaces must have `[Exposed]` extended attribute. To fix, add, for example, `[Exposed=Window]`. Please also consider carefully if your interface should also be exposed in a Worker scope. Refer to the [WebIDL spec section on Exposed](https://heycam.github.io/webidl/#Exposed) for more information.";yield s(this.source,this.tokens.name,this,e,{autofix:U(this)})}yield*super.validate(e),this.partial||(yield*function*(e,t){const n=new Set(a(t).map(e=>e.name)),r=e.partials.get(t.name)||[],o=e.mixinMap.get(t.name)||[];for(const e of[...r,...o]){const r=a(e);yield*i(r,n,e,t);for(const e of r)n.add(e.name)}function*i(e,t,n,r){for(const o of e){const{name:e}=o;if(e&&t.has(e)){const t=`The operation "${e}" has already been defined for the base interface "${r.name}" either in itself or in a mixin`;yield s(n.source,o.tokens.name,n,t)}}}function a(e){return e.members.filter(({type:e})=>"operation"===e)}}(e,this))}}class V extends F{static parse(e,t,{partial:n}={}){const r={partial:n,base:t};if(r.mixin=e.consume("mixin"),r.mixin)return F.parse(e,new V({source:e.source,tokens:r}),{type:"interface mixin",allowedMembers:[[R.parse],[D],[M.parse,{noInherit:!0}],[A.parse,{regular:!0}]]})}get type(){return"interface mixin"}}class J extends d{static parse(e){const t={},n=new J({source:e.source,tokens:t});return n.extAttrs=x.parse(e),t.required=e.consume("required"),n.idlType=E(e,"dictionary-type")||e.error("Dictionary member lacks a type"),t.name=e.consume("identifier")||e.error("Dictionary member lacks a name"),n.default=k.parse(e),t.required&&n.default&&e.error("Required member must not have a default"),t.termination=e.consume(";")||e.error("Unterminated dictionary member, expected `;`"),n}get type(){return"field"}get name(){return N(this.tokens.name.value)}get required(){return!!this.tokens.required}*validate(e){yield*this.idlType.validate(e)}}class X extends F{static parse(e,{partial:t}={}){const n={partial:t};if(n.base=e.consume("dictionary"),n.base)return F.parse(e,new X({source:e.source,tokens:n}),{type:"dictionary",inheritable:!t,allowedMembers:[[J.parse]]})}get type(){return"dictionary"}}class G extends F{static parse(e,{partial:t,enableMozillaNamespacesConstants:n}={}){console.log("namespace :",n);const r={partial:t};if(r.base=e.consume("namespace"),!r.base)return;let s;return s=!0===n?[[R.parse],[M.parse,{noInherit:!0,readonly:!0}],[A.parse,{regular:!0}]]:[[M.parse,{noInherit:!0,readonly:!0}],[A.parse,{regular:!0}]],F.parse(e,new G({source:e.source,tokens:r}),{type:"namespace",allowedMembers:s})}get type(){return"namespace"}*validate(e){if(!this.partial&&this.extAttrs.every(e=>"Exposed"!==e.name)){const e="Namespaces must have [Exposed] extended attribute. To fix, add, for example, [Exposed=Window]. Please also consider carefully if your namespace should also be exposed in a Worker scope. Refer to the [WebIDL spec section on Exposed](https://heycam.github.io/webidl/#Exposed) for more information.";yield s(this.source,this.tokens.name,this,e,{autofix:U(this)})}yield*super.validate(e)}}class H extends F{static parse(e,t,{partial:n=null}={}){const r={callback:t};if(r.base=e.consume("interface"),r.base)return F.parse(e,new H({source:e.source,tokens:r}),{type:"callback interface",inheritable:!n,allowedMembers:[[R.parse],[A.parse,{regular:!0}]]})}get type(){return"callback interface"}}function K(e,t){const n=e.source;function r(t){e.error(t)}function s(...t){return e.consume(...t)}function o(t){const n=s("interface");if(n)return V.parse(e,n,t)||Z.parse(e,n,t)||r("Interface has no proper body")}function i(t){return function(){const t=s("callback");if(t)return e.probe("interface")?H.parse(e,t):C.parse(e,t)}()||o(t)||function(){const t=s("partial");if(t)return X.parse(e,{partial:t})||o({partial:t})||G.parse(e,{partial:t})||r("Partial doesn't apply to anything")}()||X.parse(e)||S.parse(e)||_.parse(e)||z.parse(e)||G.parse(e,t)}const a=function(t){if(!n.length)return[];const o=[];for(;;){const n=x.parse(e),s=i(t);if(!s){n.length&&r("Stray extended attributes");break}s.extAttrs=n,o.push(s)}const a=s("eof");return t.concrete&&o.push(a),o}(t);return e.position<n.length&&r("Unrecognised tokens"),a}function Q(e,t={}){const n=new l(e);return void 0!==t.sourceName&&(n.source.name=t.sourceName),K(n,t)}function Y(e){return e}const ee={wrap:e=>e.join(""),trivia:Y,name:Y,reference:Y,type:Y,generic:Y,inheritance:Y,definition:Y,extendedAttribute:Y,extendedAttributeReference:Y};function te(e,{templates:t=ee}={}){function n(e,{unescaped:n,context:r}){return n||(n=e.startsWith("_")?e.slice(1):e),t.reference(e,n,r)}function r(e,n=Y,...r){if(!e)return"";const s=n(e.value,...r);return t.wrap([t.trivia(e.trivia),s])}function s(e,t){return r(e,n,{context:t})}function o(e,n){return r(e,t.name,n)}function i(e){if(e.union||e.generic)return t.wrap([r(e.tokens.base,t.generic),r(e.tokens.open),...e.subtype.map(a),r(e.tokens.close)]);const s=e.tokens.prefix||e.tokens.base,o=e.tokens.prefix?[e.tokens.prefix.value,t.trivia(e.tokens.base.trivia)]:[],i=n(t.wrap([...o,e.tokens.base.value,r(e.tokens.postfix)]),{unescaped:e.idlType,context:e});return t.wrap([t.trivia(s.trivia),i])}function a(e){return t.wrap([p(e.extAttrs),i(e),r(e.tokens.nullable),r(e.tokens.separator)])}function c(e){return e?t.wrap([r(e.tokens.assign),...e.expression.map(e=>r(e))]):""}function u(e){return t.wrap([p(e.extAttrs),r(e.tokens.optional),t.type(a(e.idlType)),r(e.tokens.variadic),o(e.tokens.name,{data:e}),c(e.default),r(e.tokens.separator)])}function l(e){const{rhsType:n}=e.params;return t.wrap([t.trivia(e.tokens.name.trivia),t.extendedAttribute(t.wrap([t.extendedAttributeReference(e.name),r(e.params.tokens.assign),s(e.params.tokens.secondaryName,e),r(e.params.tokens.open),...e.params.list?e.params.list.map("identifier-list"===n?n=>(function(e,n){return t.wrap([s(e.tokens.value,n),r(e.tokens.separator)])})(n,e):u):[],r(e.params.tokens.close)])),r(e.tokens.separator)])}function p(e){return e.length?t.wrap([r(e.tokens.open),...e.map(l),r(e.tokens.close)]):""}function d(e){return t.definition(t.wrap([p(e.extAttrs),r(e.tokens.callback),r(e.tokens.partial),r(e.tokens.base),r(e.tokens.mixin),o(e.tokens.name,{data:e}),(s=e,s.tokens.inheritance?t.wrap([r(s.tokens.colon),t.trivia(s.tokens.inheritance.trivia),t.inheritance(n(s.tokens.inheritance.value,{context:s}))]):""),r(e.tokens.open),y(e.members,e),r(e.tokens.close),r(e.tokens.termination)]),{data:e});var s}function m(e,n){return t.definition(t.wrap([p(e.extAttrs),r(e.tokens.readonly),r(e.tokens.async),r(e.tokens.base,t.generic),r(e.tokens.open),t.wrap(e.idlType.map(a)),r(e.tokens.close),r(e.tokens.termination)]),{data:e,parent:n})}t=Object.assign({},ee,t);const f={interface:d,"interface mixin":d,namespace:d,operation:function(e,n){const s=e.idlType?[t.type(a(e.idlType)),o(e.tokens.name,{data:e,parent:n}),r(e.tokens.open),t.wrap(e.arguments.map(u)),r(e.tokens.close)]:[];return t.definition(t.wrap([p(e.extAttrs),r(e.tokens.special),...s,r(e.tokens.termination)]),{data:e,parent:n})},attribute:function(e,n){return t.definition(t.wrap([p(e.extAttrs),r(e.tokens.special),r(e.tokens.readonly),r(e.tokens.base),t.type(a(e.idlType)),o(e.tokens.name,{data:e,parent:n}),r(e.tokens.termination)]),{data:e,parent:n})},dictionary:d,field:function(e,n){return t.definition(t.wrap([p(e.extAttrs),r(e.tokens.required),t.type(a(e.idlType)),o(e.tokens.name,{data:e,parent:n}),c(e.default),r(e.tokens.termination)]),{data:e,parent:n})},const:function(e,n){return t.definition(t.wrap([p(e.extAttrs),r(e.tokens.base),t.type(a(e.idlType)),o(e.tokens.name,{data:e,parent:n}),r(e.tokens.assign),r(e.tokens.value),r(e.tokens.termination)]),{data:e,parent:n})},typedef:function(e){return t.definition(t.wrap([p(e.extAttrs),r(e.tokens.base),t.type(a(e.idlType)),o(e.tokens.name,{data:e}),r(e.tokens.termination)]),{data:e})},includes:function(e){return t.definition(t.wrap([p(e.extAttrs),s(e.tokens.target,e),r(e.tokens.includes),s(e.tokens.mixin,e),r(e.tokens.termination)]),{data:e})},callback:function(e){return t.definition(t.wrap([p(e.extAttrs),r(e.tokens.base),o(e.tokens.name,{data:e}),r(e.tokens.assign),t.type(a(e.idlType)),r(e.tokens.open),...e.arguments.map(u),r(e.tokens.close),r(e.tokens.termination)]),{data:e})},enum:function(e){return t.definition(t.wrap([p(e.extAttrs),r(e.tokens.base),o(e.tokens.name,{data:e}),r(e.tokens.open),y(e.values,e),r(e.tokens.close),r(e.tokens.termination)]),{data:e})},"enum-value":function(e,n){return t.wrap([t.trivia(e.tokens.value.trivia),t.definition(t.wrap(['"',t.name(e.value,{data:e,parent:n}),'"']),{data:e,parent:n}),r(e.tokens.separator)])},iterable:m,legacyiterable:m,maplike:m,setlike:m,"callback interface":d,eof:function(e){return t.trivia(e.trivia)}};function y(e,n){if(!e)return;const r=e.map(e=>(function(e,t){if(!f[e.type])throw new Error(`Type "${e.type}" is unsupported`);return f[e.type](e,t)})(e,n));return t.wrap(r)}return y(e)}function ne(e,t){const n=new Map,r=e.filter(e=>"includes"===e.type);for(const e of r){const r=t.get(e.includes);if(!r)continue;const s=n.get(e.target);s?s.push(r):n.set(e.target,[r])}return n}function*re(e){const t=function(e){const t=new Map,n=new Set,r=new Map;for(const s of e)if(s.partial){const e=r.get(s.name);e?e.push(s):r.set(s.name,[s])}else s.name&&(t.has(s.name)?n.add(s):t.set(s.name,s));return{all:e,unique:t,partials:r,duplicates:n,mixinMap:ne(e,t),cache:{typedefIncludesDictionary:new WeakMap}}}(e);for(const e of t.all)e.validate&&(yield*e.validate(t));yield*function*({unique:e,duplicates:t}){for(const n of t){const{name:t}=n,r=`The name "${t}" of type "${e.get(t).type}" was already seen`;yield s(n.source,n.tokens.name,n,r)}}(t)}function se(e){return[...re((t=e,t.flat?t.flat():[].concat(...t)))];var t}n.d(t,"parse",function(){return Q}),n.d(t,"write",function(){return te}),n.d(t,"validate",function(){return se})}])});
//# sourceMappingURL=webidl2-mozilla-compatible.js.map