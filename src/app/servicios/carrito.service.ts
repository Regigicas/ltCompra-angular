import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarritoService
{
    constructor(private http: HttpClient) {}

    obtenerCarrito()
    {
        const url = "/assets/data/ltCompra.json";
        return this.http.get(url).pipe(
            map((result: any) => result.listado)
        );
    }
}
