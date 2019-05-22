import { Component, OnInit } from '@angular/core';
import { AlimentosService } from 'src/app/servicios/alimentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../assets/index.css']
})
export class HomeComponent implements OnInit
{
    buscador: string = "";

    constructor(private alimentosService: AlimentosService,
        private router: Router) {}

    ngOnInit() {}

    clickBuscar(value)
    {
        let nombre = value.buscador;
        if (nombre == "")
        {
            alert("¡No has introducido ningun termino!");
            return;
        }

        this.alimentosService.getAlimentoPorNombre(nombre).subscribe((data: any) =>
        {
            this.router.navigate(["/producto-detail", data.codBarras]);
        }, (error: any) =>
        {
            alert("¡No se ha encontrado ningun producto con dicho nombre!");
        });
    }
}
