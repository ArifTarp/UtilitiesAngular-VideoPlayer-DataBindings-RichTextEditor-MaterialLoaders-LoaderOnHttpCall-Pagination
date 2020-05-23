import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneWay-twoWay-binding',
  templateUrl: './oneWay-twoWay-binding.component.html',
  styleUrls: ['./oneWay-twoWay-binding.component.css']
})
export class OneWayTwoWayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stringBindingData = "String Binding Data";
  propertyBindingData = "<h1>Property Binding Data</h1>";
  changeHandlerEventBinding(){
    alert("change handler event binding works")
  }
  twoWayBindingData = "Default Data From Component. Change Input";
}
