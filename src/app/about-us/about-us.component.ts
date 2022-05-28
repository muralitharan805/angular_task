import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  constructor(private appService: AppService) {}
  displayDate: any;
  ngOnInit(): void {
    this.appService.getDate().subscribe((ele: any) => {
      console.log(ele);
      this.displayDate = ele.data;
    });
  }
}
