import {Directive, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive({
    selector: '[hightlight-on-hover]'
})
export class HighlightOnHoverDirective{
    constructor(public elm: ElementRef, public renderer: Renderer){}
    
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