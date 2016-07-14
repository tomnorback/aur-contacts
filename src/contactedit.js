import {inject} from 'aurelia-framework';  
import {ApplicationState} from 'application-state';

@inject(ApplicationState)

export class Contactedit {

  constructor(appstate){
    this.heading = 'Contact Edit';
    this.appstate = appstate;
    this.editnode = null;
    this.reversioncopy = null;
    this.phonetypes = ['home', 'work', 'pref', 'cell', 'fax', 'pager'];
    this.emailtypes = ['home', 'work', 'pref'];
    this.adrtypes = ['home', 'work', 'pref'];
    this.bdaytypes = ['birthday', 'anniversary'];
  }


  activate() {
    // Return to list view if there's no node to edit
    if (!this.appstate.editnode) {
      window.location = '#/contacts';
      return
    }
    this.editnode = this.appstate.editnode;
    // Clone a reversion copy of the node to edit.
    this.reversioncopy = JSON.parse(JSON.stringify(this.appstate.editnode));
    return 
  }

  submit() {
    // final validation goes here
    this.returntolist();
  }
  revert() {
    this.appstate.list.splice(this.appstate.editnodeindex,1,this.reversioncopy);
    this.returntolist();
  }
  returntolist () {
    //this.editnode = null;
    this.appstate.editnode = null;
    this.appstate.editnodeindex = -1;
    window.location = '#/contacts';
  }

}
