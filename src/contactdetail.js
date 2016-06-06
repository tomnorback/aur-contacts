import {inject} from 'aurelia-framework';  
import {ApplicationState} from 'application-state';

@inject(ApplicationState)

export class Contactdetail {

  constructor(appstate){
    this.heading = 'Detail';
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
      console.log('in detail js, no editnode');
      window.location = '#/contacts';
      return
    }

    // Clone a working copy to bind to the inputs.
    this.worknode = JSON.parse(JSON.stringify(this.appstate.editnode));

    return 
  }

 
}