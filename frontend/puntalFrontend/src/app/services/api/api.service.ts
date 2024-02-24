import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/v1/';
  constructor(private http: HttpClient) { }


//de la api cogemos la cantidad de plazas base hay
  getCantidadPB(): Observable<any> {
    const urls = `${this.apiUrl}${'plazaBase/cantidad'}`;
    return this.http.get(urls);
  }
//de la api cogemos la cantidad de transito hay
  getCantidadTR(): Observable<any> {
    const urls = `${this.apiUrl}${'transito/cantidad'}`;
    return this.http.get(urls);
  }

  //de la api calculamos el porcentaje de ocupacion que hay
  getPorcentajeOcupacion(): Observable<any> {
    const urls = `${this.apiUrl}${'plaza/porcentaje'}`;
    return this.http.get(urls);
  }

  //de la api cogemos la cantidad de plazas base hay disponibles
  getPBdisponibles(): Observable<any> {
    const urls = `${this.apiUrl}${'plaza/pbdisponibles'}`;
    return this.http.get(urls);
  }
  //de la api cogemos la cantidad de plazas base hay en mantenimiento
  getPBmantenimiento(): Observable<any> {
    const urls = `${this.apiUrl}${'plaza/pbmantenimiento'}`;
    return this.http.get(urls);
  }
 

  //de la api cogemos la cantidad de transito hay disponibles
  getTRdisponibles(): Observable<any> {
    const urls = `${this.apiUrl}${'plaza/trdisponibles'}`;
    return this.http.get(urls);
  }
  //de la api cogemos la cantidad transito hay en mantenimiento
  getTRmantenimiento(): Observable<any> {
    const urls = `${this.apiUrl}${'plaza/trmantenimiento'}`;
    return this.http.get(urls);
  }



  //de la api cogemos la cantidad de embarcaciones hay
  getCantidadEmb(): Observable<any> {
    const urls = `${this.apiUrl}${'embarcacion/cantidad'}`;
    return this.http.get(urls);
  }
  //de la api cogemos el pais con mas embarcaciones 
  getPaisConMas(): Observable<any> {
    const urls = `${this.apiUrl}${'embarcacion/pais'}`;
    return this.http.get(urls);
  }
//de la api cogemos el tipo comun de embarcaciones 
  getEmbcomun(): Observable<any> {
    const urls = `${this.apiUrl}${'embarcacion/tipocomun'}`;
    return this.http.get(urls);
  }



  getEstancia(): Observable<any> {
    const urls = `${this.apiUrl}${'plazaBase/estancia'}`;
    return this.http.get(urls);
  }



  getEstancia2(): Observable<any> {
    const urls = `${this.apiUrl}${'transito/estancia'}`;
    return this.http.get(urls);
  }
  getDatosOcu(): Observable<any> {
    const urls = `${this.apiUrl}${'plaza/datosOcu'}`;
    return this.http.get(urls);
  }











  getPlazas():Observable<any>
  {
    const url = `${this.apiUrl}${"plaza/disponibles"}`;
    return this.http.get(url)
  }
 
  getAll(entity: string): Observable<any> {
    const url = `${this.apiUrl}${entity}`;
    return this.http.get(url);
  }
  add(entity: string, data: any): Observable<any> {
    const url = `${this.apiUrl}${entity}`;
    return this.http.post(url, data)
      .pipe(
        tap(response => console.log('Respuesta del servicio:', response))
      );
  }
  update(id: any, entity: string, data: any): Observable<any> {


    const url = `${this.apiUrl}${entity}/${id}`;
    console.log('URL:', url);
    console.log('Datos de la embarcación a enviar:', entity);

    return this.http.put(url, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }
  delete(id: any, entity: string): Observable<any> {
    const url = `${this.apiUrl}${entity}/${id}`;
    return this.http.delete(url);
  }
  
}
