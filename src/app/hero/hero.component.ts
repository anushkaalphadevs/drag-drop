import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
declare var $: any;
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { DynamicComponent } from '../dynamic/dynamic.component';
import { DndDropEvent } from 'ngx-drag-drop';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  width: any = '50px';
  x = 1;
  name: string = 'Anushka';
  @ViewChild('cmpContainer', {static: true, read: ViewContainerRef}) cmpContainer!: ViewContainerRef;
components: ComponentRef<DynamicComponent>[] = [];

  constructor(private cfr: ComponentFactoryResolver) { }

  ngOnInit(): void {
    // this.getMeasurement();
    // this.addComponent();


  }
  getMeasurement(): void {
    (() => {
      containment: "#containment-wrapper"
      var counter = 0;
      var b: any = document.getElementById('b');
      var l: any = document.getElementById('l');
      var addInput = () => {
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
          drag: function (e: any, ui: any) {
            $(function () {
              $('.remove').on('click', function (event: any) {
                console.log(event)
                $('img#input-' + counter).remove();
              });
            });


            console.log(e.target.id)
            console.log(ui.position)

          }
        })
        $(input).click(() => {
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
  addComponent() {
    const factory = this.cfr.resolveComponentFactory(DynamicComponent);
    const component: ComponentRef<DynamicComponent> = this.cmpContainer.createComponent(factory);
    this.components.push(component);
}
drag(event: any) {
  console.log(event);
 
}
onDragEnded(event :any) {
  console.log(event.source.element.nativeElement.id)
  let element = event.source.getRootElement();
  let boundingClientRect = element.getBoundingClientRect();
  let parentPosition = this.getPosition(element);
  console.log('x: ' + (boundingClientRect.x - parentPosition.left), 'y: ' + (boundingClientRect.y - parentPosition.top));        
}

getPosition(el :any) {
  let x = 0;
  let y = 0;
  while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    x += el.offsetLeft - el.scrollLeft;
    y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: y, left: x };
}
picture = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
]
getItems() : void {
  this.picture.push({
		color: "greenblack",
		value: "#1CE20C"
	})
}







}
