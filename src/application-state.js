import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)

export class ApplicationState {  

constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('');
    });

    this.http = http;
    this.list = [];
    this.detailnode = null;
    this.editnode = null;
    this.editnodeindex = -1;
    this.teststring = 'this application state test string';

    this.http.fetch('contacts.json')
      .then(response => response.json())
      .then(response => this.list = JSON.parse(JSON.stringify(response)));
  }
}