import {inject} from 'aurelia-framework';  
import {ApplicationState} from 'application-state';

@inject(ApplicationState)

export class Contactedit {

  constructor(appstate){
    this.heading = 'Contact Edit';
    this.appstate = appstate;
    this.worknode = null;
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

    // Clone a working copy to bind to the inputs.
    this.worknode = JSON.parse(JSON.stringify(this.appstate.editnode));

    return 
  }

  submit() {
    // Replace the original node with the working copy.  Return to list view.
    this.appstate.list.splice(this.appstate.editnodeindex,1,this.worknode);
    window.location = '#/contacts';
  }
}
