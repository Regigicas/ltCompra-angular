import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-categoria',
  templateUrl: './producto-categoria.component.html',
  styleUrls: ['../../../assets/index.css']
})
export class ProductoCategoriaComponent implements OnInit
{
    @Input()
    alimento;

    constructor(private router: Router) {}

    ngOnInit() {}

    irProducto()
    {
        this.router.navigate(["/producto-detail", this.alimento.id])
    }
}
