import { Component } from '@angular/core';
import {AppService} from "./services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  tableData: any | undefined;
   pageIndex = 0;
  title = 'TransMonitor';

   constructor(
    private appService: AppService
  ) {}

   ngOnInit(): void {
    this.getDataFromTypicode();
  }

  getDataFromTypicode(): any {
    this.appService.getDataFromTypicode().subscribe(res => {
      // this.tableData = this.paginate(res, this.pageSize);
      console.log(this.tableData.data);
    });
  }
}
