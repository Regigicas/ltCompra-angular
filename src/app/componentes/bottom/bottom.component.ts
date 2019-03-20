import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['../../../assets/index.css']
})
export class BottomComponent implements OnInit
{
    constructor(private router: Router,
        private location: Location) {}

    ngOnInit() {}

    clickBack()
    {
        this.location.back();
    }
}
