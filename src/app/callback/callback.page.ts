import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { CONSTANTS } from '../app.constants';
import { InAppBrowser, InAppBrowserOptions, InAppBrowserEvent, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import { LoginService } from '../login.service';
import { Product } from '../app.interface';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.page.html',
  styleUrls: ['./callback.page.scss'],
})
export class CallbackPage implements OnInit {
  public href: any;
  public records: any;
  public options: InAppBrowserOptions = {
    location: 'no',
  };
  public target = CONSTANTS.TARGET;
  public url = CONSTANTS.URL;
  // tslint:disable-next-line: max-line-length
  constructor(private youtube: YoutubeVideoPlayer, public router: Router, private browser: InAppBrowser, private loginService: LoginService) {
  }

  ngOnInit() {

  }
  public open(): void {
    const browser: InAppBrowserObject = this.browser.create(this.url, this.target, this.options);
    browser.show();
    if (browser.on('loadstop')) {
      browser.on('loadstop').subscribe((ev: InAppBrowserEvent) => {
        const eventUrl = ev.url;
        const substring = 'access_token';
        if (eventUrl.indexOf(substring) !== -1) {
          this.href = ev.url.split('#')[1].split('&')[0].split('=');
          localStorage.setItem(CONSTANTS.ACCESS_TOKEN, this.href[1]);
          browser.close();
        }
      });
    }
  }
  public onClickProduct(): void {
    localStorage.getItem(CONSTANTS.ACCESS_TOKEN);
    this.router.navigate(['/product-list']);
  }

  public onClickSurvey(): void {
    localStorage.getItem(CONSTANTS.ACCESS_TOKEN);
    this.router.navigate(['/survey']);
  }

  public openMyVideo(id: any): void {
    this.youtube.openVideo(id);
  }
  public onClickActionPlan(): void {
    this.router.navigate(['/action-plan']);
  }

}
