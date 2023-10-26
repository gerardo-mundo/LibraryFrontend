import { Injectable } from '@angular/core';
import { Table } from 'primeng/table';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UtilitiesService {
  private isVisibleSubject = new BehaviorSubject<boolean>(false);
  public isVisible$: Observable<boolean> = this.isVisibleSubject.asObservable();

  constructor() {}

  public setVisibility(isVisible: boolean) {
    this.isVisibleSubject.next(isVisible);
  }

  public filtering($event: any, stringVal: string, dt: Table) {
    dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
}
