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

    getAlimentoPorId(codBarras: number)
    {
        const url = `http://127.0.0.1:8080/api/alimentos/${codBarras}`;
        return this.http.get(url).pipe();
    }

    private tryGetProducto(codBarras)
    {
        const url = `http://127.0.0.1:8080/api/alimentos/${codBarras}`;
        return this.http.get(url).toPromise();
    }

    private doPost(alimento)
    {
        const url = "http://127.0.0.1:8080/api/alimentos";
        this.http.post(url, alimento).subscribe();
    }

    addAlimento(alimento)
    {
        return this.tryGetProducto(alimento.codBarras).then((result) =>
        {
            if (result)
                return false;

            this.doPost(alimento);
            return true;
        })
        .catch((err) =>
        {
            this.doPost(alimento);
            return true;
        });
    }
}
