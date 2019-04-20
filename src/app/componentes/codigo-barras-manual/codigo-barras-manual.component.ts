import { Component, OnInit } from '@angular/core';
import { AlimentosService } from 'src/app/servicios/alimentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codigo-barras-manual',
  templateUrl: './codigo-barras-manual.component.html',
  styleUrls: ['../../../assets/index.css']
})
export class CodigoBarrasManualComponent implements OnInit
{
    constructor(private alimentosService: AlimentosService,
        private router: Router) {}

    ngOnInit() {}

    buscarCodBarras(form)
    {
        var codBarra = form.codBarra;
        if (codBarra == "")
        {
            alert("¡No se puede dejar el campo vacio!");
            return;
        }
        
        this.alimentosService.getAlimentoPorId(codBarra).subscribe((data: any) =>
        {
            if (data == null)
                alert("¡No existe un producto con ese código de barras!");
            else
                this.router.navigate(["/producto-detail", data.codBarras]);
        });
    }
}
