import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlergenosService
{
    constructor(private http: HttpClient) {}
    
    obtenerAlergenos()
    {
        const url = "http://127.0.0.1:8080/api/alergenos";
        return this.http.get(url).pipe();
    }
}
