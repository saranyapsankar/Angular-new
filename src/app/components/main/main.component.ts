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
  energyConsumptionMap = new Map<string, string>([['⚡️ 1.4kW','Power draw'],['☀️️ 5.8kW','Solar power production'],['🔌️ 4.4kW','Fed into grid']]);

  constructor() { 
    this.createChart();
  }

  ngOnInit(): void {
     
  }


  async createChart(deviceKey?: string) {
    const readings = await getReadings(deviceKey);
    const containerId = "chart";
    this.chartData = readings;
    renderChart(containerId, sortByTime(groupByDay(readings)).slice(-30));
  }

  onDeviceSelected(deviceKey: string) {
    this.createChart(deviceKey);
  }

  asIsOrder(a, b) {
    return 1;
  }
}
