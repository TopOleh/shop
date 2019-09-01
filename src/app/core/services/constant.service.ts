import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule,
  useValue: { App: 'TaskManager', Ver: '1.0' }
})

export class ConstantService {}
