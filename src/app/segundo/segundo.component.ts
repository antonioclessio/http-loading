import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.scss']
})
export class SegundoComponent {

  dataSource: any = null;

  constructor(private serviceHelper: AppService) { }

  buscarCep(c: any): void {
    this.serviceHelper.buscarCep(c).subscribe((response: any) => this.dataSource = response);
  }

}
