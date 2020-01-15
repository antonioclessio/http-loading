import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.scss']
})
export class PrimeiroComponent {

  dataSource: any = null;

  constructor(private serviceHelper: AppService) { }

  buscarCep(c: any): void {
    this.serviceHelper.buscarCep(c).subscribe((response: any) => this.dataSource = response);
  }

}
