import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GraficosService {

  constructor(private http: Http) { }
  getGraficos(){
    return this.http.get('/api/v1/graficos').map(res => res.json());
  };
}
