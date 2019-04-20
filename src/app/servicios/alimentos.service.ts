import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService
{
    constructor(private http: HttpClient) {}

    getAlimentosPorCategoria(idCategoria: number)
    {
        const url = "http://127.0.0.1:8080/api/alimentos";
        return this.http.get(url).pipe(
            map((result: any) =>
            {
                return result.
                    filter((data: any) =>  data.categoria.id == idCategoria);
            }));
    }

    getAlimentoPorId(idAli: number)
    {
        const url = `http://127.0.0.1:8080/api/alimentos/${idAli}`;
        return this.http.get(url).pipe();
    }

    private existeProducto(id)
    {
        /*for (var i in this.cachedData)
            if (this.cachedData[i].id == id)
                return true;*/

        return false;
    }

    addAlimento(alimento)
    {            
        /*if (this.cachedData == null)
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

        this.cachedData.push(alimento);*/
        return true;
    }
}
