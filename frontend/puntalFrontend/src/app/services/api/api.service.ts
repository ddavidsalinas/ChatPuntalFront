import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/v1/';
  constructor(private http: HttpClient) { }
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
    // if (!data.Imagen) {
    //   data.Imagen = []; // Establecer como un array vacío si no hay imagen seleccionada
    // }
    
    
    const url = `${this.apiUrl}${entity}/${id}`;
    console.log('URL:', url);
    console.log('Datos de la embarcación a enviar desde service:', data);
    console.log('Img:', data.Imagen);
   
    console.log('Img type:', typeof data.Imagen);

    return this.http.put(url, data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }
  
  // update(id: number, entity: string, data: any, imagen?: File) {
  //   const url = `${this.apiUrl}${entity}/${id}`;
  //   const formData = new FormData();
  
  //   // Agregar los datos al FormData
  //   Object.keys(data).forEach(key => {
  //     formData.append(key, data[key]);
  //   });
  
  //   // Agregar la imagen al FormData si está presente
  //   if (imagen) {
  //     formData.append('Imagen', imagen);
  //   }
  
  //   // Realizar la solicitud PUT con el FormData
  //   return this.http.put(url, formData);
  // }
  
  // update(id: any, entity: string, formData: FormData): Observable<any> {
  //   const url = `${this.apiUrl}${entity}/${id}`;
  //   console.log('URL:', url);
  //   console.log('Datos de la embarcación a enviar:', formData);

  //   // No necesitas establecer el Content-Type a 'application/json' ya que estás enviando FormData
  //   return this.http.put(url, formData);
  // }

  delete(id: any, entity: string): Observable<any> {
    const url = `${this.apiUrl}${entity}/${id}`;
    return this.http.delete(url);
  }
}
