import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('homeContainer', { read: ViewContainerRef })
  private homeViewContainerRef!: ViewContainerRef;

  private users$!: Observable<User[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.users$ = this.http.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  public async lazyLoadHomeWidget(): Promise<void> {
    const { SingletonComponent } = await import(
      './singleton/singleton.component'
    );

    /**
     * 🚀 HINT: think about standalone components for lazy loading.
     */
    // const { CardComponent } = await import('../card/card.component');

    if (this.homeViewContainerRef.length === 0) {
      const ref = this.homeViewContainerRef.createComponent(SingletonComponent);
      ref.instance.users$ = this.users$;
    }

  }
}
