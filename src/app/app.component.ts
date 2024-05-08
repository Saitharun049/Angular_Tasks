import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoProject';

  appData: string = "Testing-Data-Bound from app component";


  handleClickFun(msg: string) {
    alert(msg);
  }
}
