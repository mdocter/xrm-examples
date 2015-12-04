/// <reference path="../../typings/tsd.d.ts" />

// Contains all Account entity form functions

export namespace account {

  var onSave = (context?: Xrm.Page.EventContext) => {
    // TODO: add some form on save logic here...
    // NOTE: Not exported, so can't be called from outside this file
  };

  var nameOnChange = (context?: Xrm.Page.EventContext) => {
    // TODO: add some logic here to execute when the name attribute/field changes
    // NOTE: Not exported, so can't be called from outside this file
  };

  // Attach the onSave and onChange handlers from the onLoad function,
  // so you'll only have to add a reference to the onLoad function from
  // the form libraries and you'll have them all in one place.
  // Exported, so after build can be triggered as: mdocter.formjs.account.onLoad(...)
  export var onLoad = (context?: Xrm.Page.EventContext) => {
    Xrm.Page.data.entity.addOnSave(onSave);
    Xrm.Page.getAttribute('name').addOnChange(nameOnChange);
  };

}