import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  keyword:string="test"

  doSearch($event: KeyboardEvent){
    if($event.keyCode==13){
      let inputDom = $event.target as HTMLInputElement;
      this.keyword = inputDom.value
    }
  }
  /*doDeleteArticle(item) {
     this.datasvc.doDeleteArticle(item);
  }*/

  //data=[]

  constructor(private datasvc: DataService) {
   //  this.data = datasvc.data;
  }


}
