export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'contacts',		name: 'contacts',	  moduleId: 'contacts',		nav: true, title: 'Contacts' },
      { route: 'contactdetail', name: 'contactdetail',moduleId: 'contactdetail',nav: true, title: 'Details' },
      { route: 'contactedit',	name: "contactedit",  moduleId: 'contactedit',  nav: true, title: 'Contact Edit' }
    ]);

    this.router = router;
  }
}
