import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alimento-carrito',
  templateUrl: './alimento-carrito.component.html',
  styleUrls: ['../../../assets/index.css']
})
export class AlimentoCarritoComponent implements OnInit
{
    @Input()
    producto;
    @Output()
    productoElegido = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    clickBorrar()
    {
        this.productoElegido.emit(this.producto);
    }
}
