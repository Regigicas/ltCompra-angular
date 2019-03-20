import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService
{
    constructor(private http: HttpClient) {}

    getAlimentosPorCategoria(idCategoria: number)
    {
        const url = "/assets/data/ltCompra.json";
        return this.http.get(url).pipe(
            map((result: any) => result.alimentos.
            filter((data: any) =>
            {
                return data.categoria.id == idCategoria;
            }))
        );
    }

    getAlimentoPorId(idAli: number)
    {
        const url = "/assets/data/ltCompra.json";
        return this.http.get(url).pipe(
            map((result: any) => result.alimentos
            .filter((data: any) => data.id == idAli)[0])
        );
    }
}
