import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Survey } from '../app.interface';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnInit {
  public records: any;
  constructor(private loginService: LoginService) {
    this.loginService.getSurvey();
    // .subscribe((res: Survey) => {
    //   this.records = res.records;
    //   console.log(res);
    // }, err => {
    //   console.log(err);
    // });
  }

  ngOnInit() { }

}
