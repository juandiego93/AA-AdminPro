import { Component, Input } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = 'Sin titulo'
  @Input('labels') doughnutChartLabels: string[] = ['Label1', 'Label2', 'Label3'];
  @Input('data') dataSets: number[] = [23, 14, 6];

  get getDoughnutChartData(): ChartData<'doughnut'> {
    return {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: this.dataSets },
      ]
    };
  }

  get getDoughnutChartType(): ChartType {
    return 'doughnut'
  }

}
