import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  width: any = '50px';
  name: string = 'Anushka';

  constructor() { }

  ngOnInit(): void {
    this.getMeasurement();


  }
  getMeasurement(): void {
    ( () => {
      containment: "#containment-wrapper"
      var counter = 0;
      var b: any = document.getElementById('b');
      var l: any = document.getElementById('l');
      var addInput =  () => {
        counter++;
        var input = document.createElement("img");
        input.id = 'input-' + counter;
        input.className = 'd';
        input.src =
          'https://picsum.photos/id/237/200/300';

        //   $('#containment-wrapper').on('click','.remove',function() {
        //     $().parent().remove();
        //  });
        l.appendChild(input);


        $(input).draggable({
          cancel: null,
          containment: "#containment-wrapper",
          drag: function(e :any, ui :any) {
            $(function() {
              $('.remove').on('click', function(event :any) {
                console.log(event)
                  $('img#input-' + counter).remove();
              });
          });
        
   
                  console.log(e.target.id)
                  console.log(ui.position)
        
            }
        })
        $(input).click( () => {
          $(this).focus();
        });
      };
      b.addEventListener('click', function () {
        addInput();
      }.bind(this));
    })();
    // $(function () {

    //   $("#draggable3").draggable(
    //     { containment: "#containment-wrapper", scroll: false, drag: function(e :any, ui :any) {
    //       console.log(e.target.id)
    //       console.log(ui.position)

    // } }
    //   );
    //   $("#draggable4").draggable(
    //     { containment: "#containment-wrapper", scroll: false, drag: function(e :any, ui :any) {
    //       console.log(ui.position)
    //       console.log(e.target.id)

    // } }
    //   );
    //   $("#draggable5").draggable(
    //     { containment: "#containment-wrapper", scroll: false, drag: function(e :any, ui :any) {
    //       console.log(ui.position)
    //       console.log(e.target.id)

    // } }
    //   );
    // });
  }
  dragItems(): void {
    console.log("assds")
  }




}
