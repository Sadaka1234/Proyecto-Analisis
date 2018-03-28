import { Component, OnInit } from '@angular/core';
import { GraficosService } from '../services/graficos.service';
@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {
  graficosBlog: any = [];
  constructor(private graficosService: GraficosService) { }

  ngOnInit() {
      this.graficosService.getGraficos().subscribe(rows =>{
          this.graficosBlog = rows;
          console.log(this.graficosBlog);
      });
  }

}
