/// <reference path="../../typings/tsd.d.ts" />

// Contains all Contact entity form functions

export namespace contact {

  var onSave = (context?: Xrm.Page.EventContext) => {
    // TODO: add some form on save logic here...
    // NOTE: Not exported, so can't be called from outside this file
  };

  var fullnameOnChange = (context?: Xrm.Page.EventContext) => {
    // TODO: add some logic here to execute when the fullname attribute/field changes
    // NOTE: Not exported, so can't be called from outside this file
  };

  // Attach the onSave and onChange handlers from the onLoad function,
  // so you'll only have to add a reference to the onLoad function from
  // the form libraries and you'll have them all in one place.
  // Exported, so after build can be triggered as: mdocter.formjs.contact.onLoad(...)
  export var onLoad = (context?: Xrm.Page.EventContext) => {
    Xrm.Page.data.entity.addOnSave(onSave);
    Xrm.Page.getAttribute('fullname').addOnChange(fullnameOnChange);
  };

}