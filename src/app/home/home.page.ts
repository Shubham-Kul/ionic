import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '../app.constants';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { InAppBrowser, InAppBrowserOptions, InAppBrowserEvent } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public options: InAppBrowserOptions = {
    location: 'no',
    hidden: 'yes'
  };
  public target = CONSTANTS.TARGET;
  public url = CONSTANTS.URL;
  public href: any;
  constructor(public router: Router, public loginService: LoginService, private browser: InAppBrowser) {
  }
  ngOnInit() {

  }
  open() {
    const browser = this.browser.create(this.url, this.target, this.options);
    browser.show();
  }

}
