import { ElementRef, HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostListener('window:keydown', ['$event']) windowClick($event) {
    switch ($event.key) {
      case "ArrowUp":
        this.el.nativeElement.style.color = "red";  
      break;
        case "ArrowDown":
          this.el.nativeElement.style.color = "blue";  
        break;
          case "ArrowLeft":
          this.el.nativeElement.style.color = "green";  
          break;
            case "ArrowRight":
              this.el.nativeElement.style.color = "violet";  
            break;
    }
  }


  constructor(private el: ElementRef) { }

}
