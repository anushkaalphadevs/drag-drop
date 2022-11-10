import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  width : any ='200px';

  constructor() { }

  ngOnInit(): void {
    this.getMeasurement();
    
    
  }
  getMeasurement() : void {
    $(function () {

      $("#draggable3").draggable(
        { containment: "#containment-wrapper", scroll: false, drag: function(e :any, ui :any) {
          console.log(e.target.id)
          console.log(ui.position)
   
    } }
      );
      $("#draggable4").draggable(
        { containment: "#containment-wrapper", scroll: false, drag: function(e :any, ui :any) {
          console.log(ui.position)
          console.log(e.target.id)
   
    } }
      );
    });
  }

}
