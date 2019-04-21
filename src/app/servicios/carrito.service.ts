import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService
{
    constructor(private http: HttpClient) {}

    obtenerCarrito()
    {
        const url = "http://127.0.0.1:8080/api/carrito";
        return this.http.get(url).pipe(
            map((result: any) =>
            {
                return result.carrito ? result.carrito : result;
            })
        );
    }

    borrarProducto(id)
    {
        const url = `http://127.0.0.1:8080/api/carrito/${id}`;
        this.http.delete(url).subscribe();
    }

    borrarProductos()
    {
        const url = "http://127.0.0.1:8080/api/carrito";
        this.http.delete(url).subscribe();
    }

    private doPost(codBarras)
    {
        const url = "http://127.0.0.1:8080/api/carrito";
        this.http.post(url, { codBarras: codBarras }).subscribe();
    }

    addProducto(codBarras)
    {
        return this.tryGetProducto(codBarras).then((result) =>
        {
            if (result)
                return false;

            this.doPost(codBarras);
            return true;
        }).catch((err) =>
        {
            this.doPost(codBarras);
            return true;
        });
    }

    tryGetProducto(codBarras)
    {
        const url = `http://127.0.0.1:8080/api/carrito/${codBarras}`;
        return this.http.get(url).toPromise();
    }
}
