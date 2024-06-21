import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public title:Title,
    public meta:Meta){}

  setCanonicalUrl(url?:string) {
    const canURL = url == undefined ? this.document.URL : url;
    const head = document.getElementsByTagName("head")[0];
    let element:HTMLElement | null = this.document.querySelector( `link[rel="canonical"]` );
      if(!element){
         element = this.document.createElement('link') as HTMLElement;
         head.appendChild(element);
      }
      element.setAttribute("rel", "canonical");
      element.setAttribute("href",canURL);
  }

  setIndexFollowing(state: boolean=true) {
    this.meta.updateTag({name:"robots",content:state ? "idex,follow": "noindex,nofollow"})
  }


}
