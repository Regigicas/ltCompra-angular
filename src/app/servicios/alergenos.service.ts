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
        const url = "/assets/data/ltCompra.json";
        return this.http.get(url).pipe(
            map((result: any) => result.alergenos)
        );
    }
}
