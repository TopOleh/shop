import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('appTitle', {static: true}) title: ElementRef<HTMLHeadingElement>;

  constructor() {}

  ngOnInit(): void {
    console.log(this.title.nativeElement.innerText = 'Shop');
  }
}
