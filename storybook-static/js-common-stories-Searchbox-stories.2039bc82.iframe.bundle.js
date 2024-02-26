"use strict";(self.webpackChunkwevoteusa=self.webpackChunkwevoteusa||[]).push([[847],{"./src/js/common/stories/Searchbox.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Searchbox:()=>Searchbox,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Searchbox_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Colors=__webpack_require__("./src/js/common/components/Style/Colors.js");let search_namespaceObject=__webpack_require__.p+"static/media/search.9d71fa44.svg",cross_namespaceObject=__webpack_require__.p+"static/media/cross.10599961.svg";function _assert_this_initialized(self1){if(void 0===self1)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return self1}function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _get_prototype_of(o){return(_get_prototype_of=Object.setPrototypeOf?Object.getPrototypeOf:function getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_set_prototype_of(subClass,superClass)}function _possible_constructor_return(self1,call){return call&&("object"===_type_of(call)||"function"==typeof call)?call:_assert_this_initialized(self1)}function _set_prototype_of(o,p){return(_set_prototype_of=Object.setPrototypeOf||function setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _type_of(obj){return obj&&"undefined"!=typeof Symbol&&obj.constructor===Symbol?"symbol":typeof obj}function _is_native_reflect_construct(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _create_super(Derived){var hasNativeReflectConstruct=_is_native_reflect_construct();return function _createSuperInternal(){var result,Super=_get_prototype_of(Derived);if(hasNativeReflectConstruct){var NewTarget=_get_prototype_of(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possible_constructor_return(this,result)}}function _templateObject(){var data=_tagged_template_literal(["\n  position: relative;\n  display: inline-block;\n  width: 100%;\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n    position: absolute;\n    top: 50%;\n    right: 10px;\n    transform: translateY(-50%);\n    color: gray; \n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    width: 24px;\n    height: 24px;\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n    position: absolute;\n    right: 12px;\n    top: 50%;\n    transform: translateY(-50%);\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    width: 18px;\n    height: 18px;\n    cursor: pointer;\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  &::-webkit-search-decoration,\n  &::-webkit-search-cancel-button,\n  &::-webkit-search-results-button,\n  &::-webkit-search-results-decoration {\n    display: none;\n  }\n\n  border: none;\n  height: 38px;\n  width: 100%;\n  border: 1px solid rgb(206, 212, 218);\n  border-radius: 0.25rem;\n  padding-right: 40px;\n  padding-left: 12px;\n  border-radius: 0.25rem;\n  padding-right: 40px;\n  \n\n  &:focus-visible {\n    border: none;\n    outline: "," solid 2px !important;\n  }\n"]);return _templateObject3=function _templateObject(){return data},data}var SearchWrapper=styled_components_browser_esm.ZP.div(_templateObject()),SearchIcon=styled_components_browser_esm.ZP.div(_templateObject1(),search_namespaceObject),ClearButton=styled_components_browser_esm.ZP.div(_templateObject2(),cross_namespaceObject),SearchInput=styled_components_browser_esm.ZP.input(_templateObject3(),Colors.Z.primary),BaseSearchbox=function(_React_Component){_inherits(BaseSearchbox,_React_Component);var _super=_create_super(BaseSearchbox);function BaseSearchbox(props){var _this;return _class_call_check(this,BaseSearchbox),_define_property(_assert_this_initialized(_this=_super.call(this,props)),"handleInputChange",function(event){_this.setState({searchText:event.target.value},function(){_this.props.onChange&&_this.props.onChange(event),_this.props.onKeyDown&&_this.props.onKeyDown(event),_this.props.onFocus&&_this.props.onFocus(event)})}),_define_property(_assert_this_initialized(_this),"handleClear",function(){_this.setState({searchText:""},function(){_this.props.onClear&&_this.props.onClear()})}),_this.state={searchText:""},_this}return _create_class(BaseSearchbox,[{key:"render",value:function render(){return react.createElement(SearchWrapper,null,!this.state.searchText&&react.createElement(SearchIcon,null),react.createElement(SearchInput,{type:"search",placeholder:this.props.placeholder,value:this.state.searchText,onChange:this.handleInputChange,onClear:this.handleClear,maxLength:50}),this.state.searchText&&react.createElement(ClearButton,{onClick:this.handleClear}))}}]),BaseSearchbox}(react.Component);function Searchbox_stories_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function Searchbox_stories_templateObject(){var data=Searchbox_stories_tagged_template_literal(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 340px;\n"]);return Searchbox_stories_templateObject=function _templateObject(){return data},data}BaseSearchbox.propTypes={placeholder:prop_types_default().string,onChange:prop_types_default().func,onKeyDown:prop_types_default().func,onFocus:prop_types_default().func,onBlur:prop_types_default().func,onClear:prop_types_default().func},BaseSearchbox.__docgenInfo={description:"",methods:[{name:"handleInputChange",docblock:null,modifiers:[],params:[{name:"event",optional:!1,type:null}],returns:null},{name:"handleClear",docblock:null,modifiers:[],params:[],returns:null}],displayName:"BaseSearchbox",props:{placeholder:{description:"",type:{name:"string"},required:!1},onChange:{description:"",type:{name:"func"},required:!1},onKeyDown:{description:"",type:{name:"func"},required:!1},onFocus:{description:"",type:{name:"func"},required:!1},onBlur:{description:"",type:{name:"func"},required:!1},onClear:{description:"",type:{name:"func"},required:!1}}};let Searchbox_stories={title:"Design System/Inputs",component:BaseSearchbox,parameters:{layout:"centered"}};var Container=styled_components_browser_esm.ZP.div(Searchbox_stories_templateObject()),Searchbox=function(){return react.createElement(Container,null,react.createElement(BaseSearchbox,{placeholder:"Search by name, office or state"}))};Searchbox.parameters={...Searchbox.parameters,docs:{...Searchbox.parameters?.docs,source:{originalSource:'() => <Container>\n    <BaseSearchbox placeholder="Search by name, office or state" />\n  </Container>',...Searchbox.parameters?.docs?.source}}};let __namedExportsOrder=["Searchbox"]},"./src/js/common/components/Style/Colors.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={primary:"#0834CD",primaryHover:"#09288A",secondaryHover:"#F5F7FD",darkGrey:"#454F69",middleGrey:"#8C92A2",grey:"#AEB2BE",lightGrey:"#E5E6EA",ultraLightGrey:"#FAFAFA",white:"#ffffff"}}}]);