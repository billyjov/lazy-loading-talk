import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { environment } from 'src/environments/environment';

// import * as xlsx from 'xlsx';

@Component({
  selector: 'app-observer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.css'],
})
export class ObserverComponent implements OnInit {
  @ViewChild('observerChildContainer', { read: ViewContainerRef })
  private observerChildContainerRef!: ViewContainerRef;

  @ViewChild('observerChildWrapper', {
    read: ElementRef,
    static: true,
  })
  private observerChildContainerElementRef!: ElementRef;

  ngOnInit(): void {
    this.lazyRenderObserverChild();
  }

  public downloadExcelFile(): void {

    // 🚀 HINT: Bad.... why?	🤔
    // console.log('👀', xlsx);
    // const wb: xlsx.WorkBook = xlsx.utils.book_new();
    // DO SOMETHING WITH XLSX


    // 🚀 HINT: Lazy load xlsx library
    import(
      /* webpackChunkName: 'xlsx-bundle-random-name-dev-days' */
      'xlsx'
    ).then((xlsx) => {
      console.log('👀', xlsx);

      // 🍿 USAGE
      // const wb: import('xlsx').WorkBook = xlsx.utils.book_new();
    });
  }

  private lazyRenderObserverChild(): void {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          console.log('👀', entry);
          console.log('👀', entry.isIntersecting);

          if (entry.isIntersecting) {

            /**
             * 🚀 HINT: Stop watch for changes in the target.
             */
            observer.disconnect();

            this.loadObserverChild();

            // Render CSS
            this.renderCss();
          }
        });
      }
    );

    observer.observe(this.observerChildContainerElementRef.nativeElement);
  }

  private async loadObserverChild(): Promise<void> {
    const { ObserverChildComponent } = await import(
      '../observer-child/observer-child.component'
    );

    this.observerChildContainerRef.createComponent(ObserverChildComponent);
  }

  private renderCss(): void {
    const link = document.createElement('link');

    // 🚔 DON'T CARE ABOUT REAL PATH
    // const stylePath = '/assets/css/mobile-css.css';
    // const stylePath = '/mobile-css.css';

    // CACHING ????
    // const stylePath = `/mobile-css.css?${new Date().getTime()}`;
    const stylePath = `/mobile-css.css?${environment.cssHash}`;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = stylePath;

    // LOAD every time
    // document.head.appendChild(link);

    // LOAD ONLY ONCE
    if (!document.head.querySelector(`link[href="${stylePath}"]`)) {
      document.head.appendChild(link);
    }
  }
}
