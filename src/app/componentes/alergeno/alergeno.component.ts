import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alergeno',
  templateUrl: './alergeno.component.html',
  styleUrls: ['../../../assets/index.css']
})
export class AlergenoComponent implements OnInit
{
    @Input()
    alergeno;
    
    constructor() {}

    ngOnInit() {}
}
