import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SeoService} from "./services/seo.service";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  title = 'epvsite';



}
