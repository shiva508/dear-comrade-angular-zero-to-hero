import {
  Component,
  DestroyRef,
  Input,
  OnDestroy,
  OnInit,
  effect,
  inject,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private destroyRef = inject(DestroyRef);
  // private interval?: ReturnType<typeof setInterval>;
  constructor() {
    effect((onCleanup) => {
      //console.log(this.currentStatus());
      onCleanup(() => {
        //console.log('onCleanup');
      });
    });
  }
  ngOnDestroy(): void {
    //console.log('Destroyed');
  }
  ngOnInit() {
    const interval = setInterval(() => {
      const rans = Math.random();
      if (rans < 0.5) {
        this.currentStatus.set('online');
      } else if (rans < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
