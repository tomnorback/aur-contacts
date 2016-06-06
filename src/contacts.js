import {inject} from 'aurelia-framework';
import {ApplicationState} from 'application-state';

@inject(ApplicationState)
export class Contacts {
  heading = 'Contacts';
  searchString = "";
  
  constructor(appstate) {
    this.appstate = appstate;
  }

  details(c,i) {
    console.log(c,i);
    //this.appstate.list[i].orgs = ['updated'];
    //this.appstate.list[i].orgs[0] = 'updated';  //this will update the data but not force an update to the view
    this.appstate.editnode = c;
    this.appstate.editnodeindex = i;
    window.location = '#/contactdetail';
  }

  search = function (obj, str) {
    var iter$ = function (a) { 
        return a ? (a.toArray ? a.toArray() : a) : []; 
    }
    if (typeof obj === "string") {
        return obj.toLowerCase().indexOf(str) > -1;
    }
    
    if (typeof obj === "object") {
        if (!obj) return false;  // typeof null is "object" in js!! null fails here
        if (Array.isArray(obj)) {  // search an array
            for (var i = 0, ary = iter$(obj), len = ary.length; i < len; i++) {
                if (this.search(ary[i],str)) {
                    return true;
                }
            }
            return false;
        } else {  // search an non-array, non-null object
            for (var j = 0, keys = Object.keys(obj), l = keys.length; j < l; j++) {
                if (obj.hasOwnProperty(keys[j])) {
                    if (this. search(obj[keys[j]],str)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    return false;
  };
}
