import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from 'ng-apexcharts';
import { ApexAxisChartSeries, ApexYAxis, ApexTitleSubtitle } from "ng-apexcharts";

import { ApexDataLabels, ApexPlotOptions, ApexLegend, ApexGrid } from "ng-apexcharts";
import { SharedService } from 'src/app/shared/services/shared-service.service';

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type distChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

export type pieChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild("chart") chart: ChartComponent;
  public pieChartOptions: Partial<pieChartOptions>;


  @ViewChild("distchart") distchart: ChartComponent;
  public chartOptions: Partial<distChartOptions>;


  distData:any=[];
  pendingDeliveries:any=0;
  lateDeliveries:any=0;
  constructor(private sharedService : SharedService) {
  }
  ngOnInit(){
    this.sharedService.getAnnualRevenue(2023).subscribe(d=> {
        this.distData=d;
        this.distChart();
      });
    this.sharedService.getPendingDeliveries().subscribe(pd=> this.pendingDeliveries=pd);
    this.sharedService.getLateDeliveries().subscribe(dl=> this.lateDeliveries=dl);
    this.pieChart();
  }


  pieChart(){
    this.pieChartOptions = {
      series: [44, 55, 13, 43, 22,44, 10, 7, 10, 7,10, 3],
      chart: {
        type: "donut"
      },
      labels: ["January", "February", "Mars", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  distChart(){
    this.chartOptions = {
      series: [
        {
          name: "Revenue",
          data: this.distData
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8",
        "#775DD0",
        "#546E7A",
        "#FEB019",
        "#26a69a"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [
          ["January"],
          ["February"],
          ["Mars"],
          ["April"],
          ["May"],
          ["June"],
          ["July"],
          ["August"],
          ["September"],
          ["October"],
          ["November"],
          ["December"]
        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a",
              "#D10CE8",
              "#775DD0",
              "#546E7A",
              "#FEB019",
              "#26a69a"
            ],
            fontSize: "12px"
          }
        }
      }
    };
  }

}
