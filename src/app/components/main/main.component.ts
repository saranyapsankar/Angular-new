import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/shared/models/dataModel';
import { renderChart } from "../../shared/utils/chart";
import { groupByDay, sortByTime, getReadings } from "../../shared/utils/reading";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  chartData: Data[] = [];
  constructor() { 
    this.createChart();
  }

  ngOnInit(): void {
     
  }

  async createChart() {
    const readings = await getReadings();
    const containerId = "chart";
    this.chartData = readings;
    renderChart(containerId, sortByTime(groupByDay(readings)).slice(-30));
  }

}
