import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioClimaService implements OnInit{


  ngOnInit(): void {

  }

  constructor(private http:HttpClient) { }


    buscarLugarId(lugar_id:String): Observable<any>{
      const apy_key = `http://api.weatherapi.com/v1/current.json?key=674a3223fa7249679c7171729242305&q=${lugar_id}`;
      console.log(lugar_id)
      return this.http.get<any>(apy_key)
    }

/*   buscarLugarID(lugar_id:String): Observable<any> {
    const url = `/api/api/v1/free/find_places?text=${lugar_id}&language=es&key=b9mb41md9m64k1ocdl3uvnouvb82x7ecyfdcnvxw`;
    console.log( lugar_id )
    return this.http.get<any>(url);

  } */



}



