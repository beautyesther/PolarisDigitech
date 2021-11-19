import {Component, OnInit} from '@angular/core';
import {AppService} from "./services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  tableData: any | undefined

   constructor(
    private appService: AppService
  ) {}

   ngOnInit(): void {
    this.getDataFromTypicode();
  }

  getDataFromTypicode(): any {
    this.appService.getDataFromTypicode().subscribe(res => {
      this.tableData = res;
      console.log(this.tableData.data);
    });
  }
}
