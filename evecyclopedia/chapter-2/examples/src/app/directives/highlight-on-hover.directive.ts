import {Directive, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive({
    selector: '[hightlight-on-hover]'
})
export class HighlightOnHoverDirective{

    //Note:  ElementRef is a class for accessing the underlying native element
    constructor(public elm: ElementRef, public renderer: Renderer){}
    
    //Note:  @HostListener is a decorator for the callback/event handler method
    @HostListener('mouseenter') onMouseEnter(){
        this.highlight('yellow');
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.highlight(null);
    }
 
    private highlight(color:string){
        this.renderer.setElementStyle(this.elm.nativeElement, 'backgroundColor', color);
    }
}