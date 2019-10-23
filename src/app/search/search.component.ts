import { Component, OnInit } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {SearchService} from '../services/search.service';
import {torrentSearchModel} from './torrentSearchModel';
import {DataViewModule} from 'primeng/dataview';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService:SearchService,private domSanitizer:DomSanitizer) { }

  searchQuery;
  torrentSearchModel:torrentSearchModel[]=new Array();
  flag;

  ngOnInit() {
  }

  search(){
    console.log('Search hit!:'+this.searchQuery);
    this.searchService.getSearchData(this.searchQuery).subscribe(res=>{
      this.processResponse(res);
    });
  }

  processResponse(res){
    //console.log(res);
    this.flag=true;
    console.log('setting flag :'+this.flag);
    this.torrentSearchModel=new Array();
    for(var property in res){
      res[property].file=this.urlCheck(res[property].file);
      this.torrentSearchModel.push(res[property]);
      console.log(res[property]);
      
    }
  }

  urlCheck(url){
    return this.domSanitizer.bypassSecurityTrustUrl(url);
    }
}
