import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-bound',
  templateUrl: './data-bound.component.html',
  styleUrls: ['./data-bound.component.scss']
})
export class DataBoundComponent {

  public myData: string = 'Testing-Data-Bound from data-bound component';

  @Input() parentData: string = '';

  @Output() notifyParent: EventEmitter<string> = new EventEmitter<string>();

  isTextBold: boolean = true;

  items: string[] = ["Item1", "Item2", "Item3", "Item4"];

  employee: any = null;

  isLoggedIn: boolean = false;

  status: string = 'ACTIVE';

  isClassStyle: boolean = true;

  constructor(private router: Router) {
    this.employee = { name : "Kellton"};
   }

  onClick() {
    this.notifyParent.emit("Cliked on button");
  }

  gotoEmployee(id: any){
    this.router.navigate(['/employee/'+id])
  }

}
