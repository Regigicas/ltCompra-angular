import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-detail',
  templateUrl: './categoria-detail.component.html',
  styleUrls: ['../../../assets/index.css']
})
export class CategoriaDetailComponent implements OnInit
{
    @Input()
    categoria;

    constructor(private router: Router) {}

    ngOnInit() {}

    irCategoria()
    {
        this.router.navigate(["/categorias", this.categoria.id]);
    }
}
