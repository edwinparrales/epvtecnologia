import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SeoService} from "./services/seo.service";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {Meta, Title} from "@angular/platform-browser";
import {BtnWhatsappComponent} from "./components/btn-whatsapp/btn-whatsapp.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, BtnWhatsappComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  title = 'epvsite';
  constructor(private titulo:Title,private meta:Meta) {
    meta.updateTag({name:"description",content:"Reparacion de computadores Cali Epvtecnologia sobre tecnologia desarrollo de software electronica"});
    meta.updateTag({name:"keywords",content:"Reparacion pc, desarrollo de software, electronica,computadores"});
    meta.updateTag({name:"robots",content:"Index"});
    meta.updateTag({name:"follow",content:"Follow"});
    this.title = 'epvsite';
  }


}
