import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Data } from 'src/app/shared/models/dataModel';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Output() deviceSelected = new EventEmitter<string>();
  devicesMap = new Map<string,string>([['Air conditioner','0.3093kW'],['Wi-Fi router','0.0033kW'],['Humidifer','0.0518kW'],['Smart TV','0.1276kW'],['Diffuser','0.0078kW'],['Refrigerator','0.0923kW'],])
 
  constructor() { }

  onDeviceClick(deviceKey: string) {
    this.deviceSelected.emit(deviceKey);
  }

  ngOnInit(): void {
  }

}
