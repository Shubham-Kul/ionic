import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Product } from '../app.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  public records: any;

  constructor(private loginService: LoginService) {

  }
  ngOnInit() {
    // alert('in product page - ngOninit');
    this.loginService.getProduct()
      .subscribe((res: any) => {
        this.records = res.records;
        alert('error' + res);
      }, err => {
        alert('error' + JSON.stringify(err));
      });
  }

}
