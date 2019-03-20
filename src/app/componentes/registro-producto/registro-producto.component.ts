import { Component, OnInit } from '@angular/core';
import { AlergenosService } from 'src/app/servicios/alergenos.service';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['../../../assets/index.css']
})
export class RegistroProductoComponent implements OnInit
{
    alergenos;
    
    constructor(private alergenosService: AlergenosService)
    {
        this.alergenosService.obtenerAlergenos().subscribe((data: any) =>
        {
            this.alergenos = data;
        });
    }

    ngOnInit() {}

    clickRegistrar() {}
}
