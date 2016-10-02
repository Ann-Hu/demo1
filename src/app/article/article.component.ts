import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() item:any
  @Output() delete = new EventEmitter<any>();

  constructor(private datasvc: DataService) { }

  ngOnInit() {
  }

  /*doDelete(item){
      //this.delete.emit(item);
      this.datasvc.doDeleteArticle(item);
  }*/

}
