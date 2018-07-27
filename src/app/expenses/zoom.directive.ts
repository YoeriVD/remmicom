import { ContentChildren, Directive, ElementRef, HostListener, Input, QueryList, Renderer2, AfterContentInit } from "@angular/core";
import { from, fromEvent, merge, Observable } from "rxjs";
import { flatMap, map } from "rxjs/operators";

@Directive({
    selector: '[zoom]'
})
export class ZoomDirective {
    @Input() zoom = 1.1;
    constructor(private element: ElementRef) {
        console.log('attaching directive!', element)
    }
    @HostListener('mouseenter')
    onMouseEnter() {
        (<HTMLElement>this.element.nativeElement).style.transform = `scale(${this.zoom || 1.1})`;
        (<HTMLElement>this.element.nativeElement).style.transition = "all 0.5s ease-in-out";
    }
    @HostListener('mouseleave')
    onMouseLeave() {
        this.element.nativeElement.style.transform = "";
    }
}

@Directive({ selector: 'tbody tr' })
export class TableRow { }

@Directive({
    selector: 'table[zoomTable]'
})
export class ZoomTableDirective implements AfterContentInit {
    @ContentChildren(TableRow, {
        read: ElementRef
    }) rows: QueryList<ElementRef>;

    constructor(private renderer: Renderer2) { }

    getEventStream = (rows$: Observable<HTMLTableRowElement>, event: string) => rows$.pipe(
        flatMap(el =>
            fromEvent(el, event)
                .pipe(
                    map(_ => el)
                )
        )
    );

    ngAfterContentInit(): void {
        // merge current + all new
        const rows$: Observable<HTMLTableRowElement> = merge(
            from(this.rows.map(el => el.nativeElement)),
            this.rows.changes.pipe(
                map(list => (<QueryList<ElementRef>>list).last.nativeElement)
            )
        );

        // stream mouseenter events
        const mouseenter$ = this.getEventStream(rows$, 'mouseenter');
        // stream mouseleave events
        const mouseleave$ = this.getEventStream(rows$, 'mouseleave');

        // add actions to events
        mouseenter$.subscribe(row => {
            this.renderer.setStyle(row, 'transform', 'scale(1.1)');
            this.renderer.setStyle(row, 'transition', 'all 0.5s ease-in-out');
        })
        mouseleave$.subscribe(row => this.renderer.removeStyle(row, 'transform'))
    }
}