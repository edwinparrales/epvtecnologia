import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SeoService} from "./services/seo.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'epvsite';
  seo = inject(SeoService)
  ngOnInit(): void {
    this.seo.title.setTitle("Prueba angular");
    this.seo.meta.updateTag({name:"description",content: "estamos probando meta tag"})
    this.seo.setCanonicalUrl("http://www.prueba,com");
    this.seo.setIndexFollowing(true);

  }

}
