import { Component, Input } from '@angular/core';

@Component({
  selector: 'section[appAnalysis]',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent {

  @Input() analysis;

}
