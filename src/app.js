export class App {
  configureRouter(config, router) {
    config.title = 'Contacts';
    config.map([
      { route: ['', 'contacts'],name: 'contacts',	  moduleId: 'contacts',		nav: true, title: 'Contacts' },
      { route: 'contactdetail', name: 'contactdetail',moduleId: 'contactdetail',nav: true, title: 'Details' },
      { route: 'contactedit',	name: "contactedit",  moduleId: 'contactedit',  nav: true, title: 'Contact Edit' }
    ]);

    this.router = router;
  }
}
