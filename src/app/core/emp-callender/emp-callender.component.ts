import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-emp-callender',
  template : `<ejs-schedule height ="650"  width = "1000"  [eventSettings]='eventSettings'> </ejs-schedule> `,
  //templateUrl: './emp-callender.component.html',
  styleUrls: ['./emp-callender.component.css']
})
export class EmpCallenderComponent {
  public data: object[] = [{
    Id: 1,
    Subject: 'Meeting',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30)
  }];
  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  }

}
