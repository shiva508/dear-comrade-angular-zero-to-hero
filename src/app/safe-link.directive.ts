import { Directive, ElementRef, effect, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'allowNavigate($event)',
  },
})
export class SafeLinkDirective {
  queryParam = input('myapp');
  private hrefElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  constructor() {
    console.log('Safe link');
    effect(() => {
      console.log(this.queryParam());
    });
  }

  allowNavigate(event: MouseEvent) {
    var promiice = window.confirm('Are you sure want to leave current page');
    if (promiice) {
      // user Event
      // const address = (event.target as HTMLAnchorElement).href;
      // (event.target as HTMLAnchorElement).href =
      //   address + '?userId=' + this.queryParam();

      //Using elementRef
      const address = this.hrefElementRef.nativeElement.href;
      this.hrefElementRef.nativeElement.href =
        address + '?userId=' + this.queryParam();
      return;
    }
    event.preventDefault();
  }
}
