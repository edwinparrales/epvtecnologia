import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(

    public title:Title,
    public meta:Meta){}



  setIndexFollowing(state: boolean=true) {
    this.meta.updateTag({name:"robots",content:state ? "idex,follow": "noindex,nofollow"})
  }


}
