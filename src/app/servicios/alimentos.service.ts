import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService
{
    private cachedData = null;
    constructor(private http: HttpClient) {}

    getAlimentosPorCategoria(idCategoria: number)
    {
        if (this.cachedData != null)
            return of(this.cachedData.filter((data) =>
            {
                return data.categoria.id == idCategoria;
            }));

        this.cachedData = [];
        const url = "/assets/data/ltCompra.json";
        return this.http.get(url).pipe(
            map((result: any) =>
            {
                this.cachedData = result.alimentos;
                return result.alimentos.
                    filter((data: any) =>  data.categoria.id == idCategoria);
            }));
    }

    getAlimentoPorId(idAli: number)
    {
        if (this.cachedData != null)
            return of(this.cachedData.filter((data) =>
            {
                return data.id == idAli;
            })[0]);

        this.cachedData = [];
        const url = "/assets/data/ltCompra.json";
        return this.http.get(url).pipe(
            map((result: any) =>
            {
                this.cachedData = result.alimentos;
                return result.alimentos.
                    filter((data: any) => data.id == idAli)[0];
            }));
    }

    private existeProducto(id)
    {
        for (var i in this.cachedData)
            if (this.cachedData[i].id == id)
                return true;

        return false;
    }

    addAlimento(alimento)
    {            
        if (this.cachedData == null)
        {
            this.cachedData = [];
            const url = "/assets/data/ltCompra.json";
            this.http.get(url).pipe(
                map((result: any) =>
                {
                    this.cachedData.push.apply(this.cachedData, result.alimentos);
                    return result.alimentos;
                })).subscribe();
        }

        if (this.existeProducto(alimento.id))
            return false;

        this.cachedData.push(alimento);
        return true;
    }
}
