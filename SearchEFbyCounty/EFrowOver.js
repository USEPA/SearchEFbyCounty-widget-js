define([
  "dojo/_base/declare",
  "dojo/_base/lang",
  "dojo/dom-construct",
  "dijit/_Widget",
  "dijit/_Templated"  
], function(
    declare, 
    lang,
    domConstruct,
    _Widget,
    _Templated       
    ){
    return declare("EFrowOver", [_Widget, _Templated], {
    templateString: '<div><input type="radio" name="efrow" data-dojo-attach-point="radioNode" value="" data-dojo-attach-event="onclick:_onRadioClick" /><span data-dojo-attach-point="labelNode"></span></div>',
    
    constructor: function (a) {
        this.startnum = a.startnum;
        this.endnum = a.endnum;
        this.parentWidget = a.parentWidget;        
        lang.mixin(this, a)
    },
    postCreate: function () {        
        this.labelNode.innerHTML = "Facilities (" + this.startnum + " - " + this.endnum + ")";
        this.radioNode.value = this.startnum;
        if (this.startnum == this.parentWidget.currentnum) this.radioNode.checked = true;        
    },
    _onRadioClick: function () {
        this.parentWidget.currentnum = this.radioNode.value;        
        this.parentWidget._drawEFxml();
    },
    destroy: function () {
        domConstruct.empty(this.domNode);
        this.inherited(arguments);
    }
 });

});





