import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login: boolean;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.login = this.commonService.getLoggedInStatus();
  }

}
