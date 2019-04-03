import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService
{
    private cachedData = null;
    constructor(private http: HttpClient) {}

    initIfEmpty()
    {
        if (this.cachedData == null)
            this.obtenerCarrito().subscribe();
    }

    obtenerCarrito()
    {
        if (this.cachedData != null)
            return of(this.cachedData);

        this.cachedData = [];
        const url = "/assets/data/ltCompra.json";
        return this.http.get(url).pipe(
            map((result: any) =>
            {
                this.cachedData = result.listado;
                return result.listado;
            })
        );
    }

    borrarProducto(id)
    {
        if (this.cachedData == null)
            return;

        this.cachedData = this.cachedData.filter((item) =>
        {
            return item.id != id;
        });
    }

    borrarProductos()
    {
        this.cachedData = [];
    }

    addProducto(producto)
    {
        if (this.productoExists(producto.id))
            return false;
            
        this.cachedData.push(producto);
        return true;
    }

    productoExists(id)
    {
        for (var i in this.cachedData)
            if (this.cachedData[i].id == id)
                return true;

        return false;
    }
}
