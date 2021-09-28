import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as largeData from './../../assets/toLargeSource.json';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent implements OnInit {

  data = largeData;
  constructor() { }

  ngOnInit(): void {
  }

}
