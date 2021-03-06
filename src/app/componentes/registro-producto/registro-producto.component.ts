import { Component, OnInit } from '@angular/core';
import { AlergenosService } from 'src/app/servicios/alergenos.service';
import { FormGroup } from '@angular/forms';
import { CategoriasService } from 'src/app/servicios/categorias.service';
import { AlimentosService } from 'src/app/servicios/alimentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['../../../assets/index.css']
})
export class RegistroProductoComponent implements OnInit
{
    alergenos;
    categorias;
    
    constructor(private alergenosService: AlergenosService,
        private categoriasService: CategoriasService,
        private alimentosService: AlimentosService,
        private router: Router)
    {
        this.alergenosService.obtenerAlergenos().subscribe((data: any) =>
        {
            this.alergenos = data;
        });
        this.categoriasService.obtenerCategorias().subscribe((data: any) =>
        {
            this.categorias = data;
        });
    }

    ngOnInit() {}

    clickRegistrar(data)
    {
        if (data.codBarra == null || data.nombreProducto == "" || data.catId == "")
        {
            alert("No has rellenado todos los campos");
            return;
        }

        var formAlergenos = this.alergenos.filter((ale) =>
        {
            return ale.checked;
        });
        
        var formCategoria = this.categorias.filter((cat) =>
        {
            return cat.id == data.catId;
        })[0];
        
        let newProducto =
        {
            "id": data.codBarra,
            "codBarras": data.codBarra,
            "nombreProducto": data.nombreProducto,
            "nombreFabricante": data.nombreFabricante,
            "alergenos": [],
            "imgPath": "imgs/img_0.png",
            "categoria": formCategoria.id
        };

        formAlergenos.forEach(element =>
        {
            newProducto.alergenos.push(element.id);
        });

        this.alimentosService.addAlimento(newProducto).then((val) =>
        {
            if (!val)
                alert("¡Ya existe un producto con ese código de barras!");
            else
            {
                alert("¡Producto registrado con exito!");
                setTimeout(function()
                {
                    this.router.navigate(["/producto-detail", newProducto.codBarras]);
                }.bind(this), 1000);
            }
        });
    }
}
