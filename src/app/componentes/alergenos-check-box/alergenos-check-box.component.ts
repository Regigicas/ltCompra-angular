import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alergenos-check-box',
  templateUrl: './alergenos-check-box.component.html',
  styleUrls: ['../../../assets/index.css']
})
export class AlergenosCheckBoxComponent implements OnInit
{
    @Input()
    alergeno;

    constructor() {}

    ngOnInit() {}
}
