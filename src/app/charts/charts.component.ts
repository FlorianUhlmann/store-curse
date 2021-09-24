import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChartsService } from './charts.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsComponent implements OnInit {


  data$: Observable<any> = this.httpService.getCryptoData('DIGITAL_CURRENCY_DAILY','BTC','EUR');

  constructor(private httpService: ChartsService) { }

  ngOnInit(): void {
  }

}
