import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  data$: Observable<any> = this.getData()
  ngOnInit(): void {
  }


  getData(){

    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo';
    const headers = new HttpHeaders()
      .set('User-Agent', 'request');

    return this.http.get<Observable<any>>(url, { headers})
  }

}
