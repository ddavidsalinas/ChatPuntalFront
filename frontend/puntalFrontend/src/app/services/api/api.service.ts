import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SharedDataService } from '../shared-data/shared-data.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/v1/';
  transitoId :any;

  constructor(private http: HttpClient,private sharedDataService: SharedDataService) { }







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

//de la api cogemos la estancia media de plazas base
  getEstancia(): Observable<any> {
    const urls = `${this.apiUrl}${'plazaBase/estancia'}`;
    return this.http.get(urls);
  }

//de la api cogemos la estancia media de transitos
  getEstancia2(): Observable<any> {
    const urls = `${this.apiUrl}${'transito/estancia'}`;
    return this.http.get(urls);
  }

  //de la api cogemos la ocupacion de los amarres
  getDatosOcu(): Observable<any> {
    const urls = `${this.apiUrl}${'plaza/datosOcu'}`;
    return this.http.get(urls);
  }

//de la api cogemos los tipos de embarcaciones
  getTiposEmbarcaciones(): Observable<any> {
    const urls = `${this.apiUrl}${'embarcacion/tipos'}`;
    return this.http.get(urls);
  }

  //obtiene los transitos para mostrar en guardia civil
  getGuardiaCivil():Observable<any>
  {
    const urls = `${this.apiUrl}${'transito/guardia'}`;
    return this.http.get(urls);
  }


//de la api cogemos los tipos de embarcaciones
getTablaPB(): Observable<any> {
  const urls = `${this.apiUrl}${'plazaBase/paratabla'}`;
  return this.http.get(urls);
}

getEmbarcaciones(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}embarcacion`);
}

getTitularEmbarcacion(embarcacionId: number): Observable<any[]> {
  const url = `${this.apiUrl}embarcacion/${embarcacionId}/titular`;
  console.log(url);
  return this.http.get<any>(url);
}


postAdministrativoAmarre(id: any, data: any): Observable<any> {
  const url = `${this.apiUrl}/plazaBase/${id}/administrativoyAmarre`;
  console.log(url);
  return this.http.post(url, data);
}

postAlquiler(id: any, data: any): Observable<any> {
  const url = `${this.apiUrl}/plazaBase/alquiler/${id}`;
  console.log(url);
  return this.http.post(url, data);
}


putDisponibleOcupado(id: any, data: any): Observable<any> {
  const url = `${this.apiUrl}/plaza/${id}/actualizaEstadoOcupado`;
  console.log(url);
  return this.http.put(url, data);
}

putOcupadoDisponible(id: any, data: any): Observable<any> {
  const url = `${this.apiUrl}/plaza/${id}/actualizaEstadoDisponible`;
  console.log(url);
  return this.http.put(url, data);
}

putActuaFin(id: any, data: any): Observable<any> {
  const url = `${this.apiUrl}/plazaBase/${id}/actuFin`;
  console.log(url);
  return this.http.put(url, data);
}



getInstalaciones(): Observable<any[]> {
  const url = `${this.apiUrl}instalacion`;
  console.log(url);
  return this.http.get<any[]>(url);
}

getPantalanes(instalacionId: number): Observable<any> {
  const url = `${this.apiUrl}instalacion/${instalacionId}/pantalanes`;
  console.log(url);
  return this.http.get<any>(url);
}

getAmarres(pantalanId: number): Observable<any> {
  const url = `${this.apiUrl}pantalan/${pantalanId}/amarres`;
  console.log('GET request to:', url);
  return this.http.get<any>(url);
}

getAmarresTransito(pantalanId: number): Observable<any> {
  const url = `${this.apiUrl}pantalan/${pantalanId}/amarrestr`;
  console.log('GET request to:', url);
  return this.http.get<any>(url);
}


  getPlazas():Observable<any>
  {
    const url = `${this.apiUrl}${"plaza/disponibles"}`;
    return this.http.get(url)
  }

  leidoCreate(data:any):Observable<any>
  {
    const url = `${this.apiUrl}${"guardiaCivil/leido"}`;
    console.log(data);
    return this.http.get(url,data)
    .pipe(
      tap(response => console.log('Respuesta del servicio:', response))
    );
    
  }

  getAll(entity: string): Observable<any> {
    const url = `${this.apiUrl}${entity}`;
    return this.http.get(url);
  }
  add(entity: string, data: any): Observable<any> {
    const url = `${this.apiUrl}${entity}`;
    console.log(url ,data );
    return this.http.post(url, data)
      .pipe(
        tap(response => console.log('Respuesta del servicio:', response))
      );
  }
  //coge los tripulantes en base a la id
  getAllTripulante(): Observable<any> {
    this.sharedDataService.getData("transitoSeleccionada").subscribe(data => {
      this.transitoId=data.Amarre_id;
      
    });
    
    const url = `http://127.0.0.1:8000/api/v1/tripulante/transito/${this.transitoId}>`;
    console.log(url);
    return this.http.get(url);
    
  }


  // postAlquiler(id: any, data: any): Observable<any> {
  //   const url = `${this.apiUrl}/plazaBase/alquiler/${id}`;
  //   console.log(url);
  //   return this.http.post(url, data);
  // }

  crearTransito(id:any,data:any): Observable<any> {
    
    const url = `http://127.0.0.1:8000/api/v1/transito/crear/${id}`;

    console.log(url);
    return this.http.post(url,data);
    
  }




  // update(id: any, entity: string, data: any): Observable<any> {
  //   // if (!data.Imagen) {
  //   //   data.Imagen = []; // Establecer como un array vacío si no hay imagen seleccionada
  //   // }
    
    
  //   const url = `${this.apiUrl}${entity}/${id}`;
  //   console.log('URL:', url);
  //   console.log('Datos de la embarcación a enviar desde service:', data);
  //   console.log('Img:', data.Imagen);
   
  //   console.log('Img type:', typeof data.Imagen);

  //   return this.http.put(url, data, { headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }) });
  // }
  update(id: any, entity: string, data: any): Observable<any> {
    // if (!data.Imagen) {
    //   data.Imagen = []; // Establecer como un array vacío si no hay imagen seleccionada
    // }
    // const formData = new FormData();
    // // Agregar los datos al FormData
    // Object.keys(data).forEach(key => {
    //   formData.append(key, data[key]);
    // });
    const boundary = '----WebKitFormBoundaryCPvD7XF6kal2o4y9'; // Usar el mismo boundary que en el segundo encabezado

    const headers = new HttpHeaders({
      'Content-Type': `multipart/form-data; boundary=${boundary}`,
      'enctype': 'multipart/form-data'
    });

    const url = `${this.apiUrl}${entity}/${id}`;
    console.log('URL:', url);
    console.log('Datos de la embarcación a enviar desde service:', data);
    console.log('Img:', data.Imagen);

    console.log('Img type:', typeof data.Imagen);
    return this.http.put(url, data);
    // return this.http.put(url, formData, { headers: headers});
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
