import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SeoService} from "./services/seo.service";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  title = 'epvsite';
  constructor(private titulo:Title,private meta:Meta) {
    meta.updateTag({name:"description",content:"Pagina personal Epvtecnologia sobre tecnologia desarrollo de software electronica"});
    meta.updateTag({name:"keywords",content:"Tecnologia, desarrollo de software, electronica,computadores"});
    meta.updateTag({name:"robots",content:"index"});
    meta.updateTag({name:"follow",content:"follow"});
    this.title = 'epvsite';
  }


}
