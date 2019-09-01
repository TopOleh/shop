import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneratorFactoryService, GetRandomStringThree } from './services/generator-factory.service';
import { GeneratorService } from './services/generator.service';
import { ConfigOptionsService } from './services/config-options.service';
import { LocalStorageService } from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ConfigOptionsService,
    GeneratorService,
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: GetRandomStringThree, useFactory: GeneratorFactoryService(3), deps: [GeneratorService]}
  ]
})
export class CoreModule { }
