import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  // @Input() transactions$: Observable<any>;
  @Input() chartData: Array<number>;
  type = 'line';
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        // data: [65, 59, 80, 81, 56, 55, 40]
        data: this.chartData
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };

  constructor() {}

  ngOnInit() {
    this.data.datasets[0].data = this.chartData;
    console.log(`data in chart component: ${this.chartData}`);
  }

}
