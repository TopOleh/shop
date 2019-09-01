import { Component, OnInit, Inject, Optional } from '@angular/core';

import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { ConstantService } from 'src/app/core/services/constant.service';
import { LocalStorageService } from './../../../core/services/local-storage.service';
import { GetRandomStringThree } from 'src/app/core/services/generator-factory.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private localStoreService: LocalStorageService,
    private configService: ConfigOptionsService,
    private constantService: ConstantService,
    @Inject( GetRandomStringThree ) private getThreeRandomChars: any[]
    ) { }

  ngOnInit() {
    console.log('LocalStorageService', this.localStoreService);
    console.log('ConfigService', this.configService);
    console.log('ConstantService', this.constantService);
    console.log('GetThreeRandomCharsService', this.getThreeRandomChars);
  }

}
