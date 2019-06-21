import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ActionPlan } from '../app.interface';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public records: any;
  constructor(private loginService: LoginService) {

  }

  ngOnInit() {
    this.loginService.getActionPlan();
    // .subscribe((res) => {
    //   this.records = res.records;
    //   console.log(res);
    // }, err => {
    //   console.log(err);
    // });
  }

}
