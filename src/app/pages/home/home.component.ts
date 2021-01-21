import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Home - EncoreDragon');
    /* this.meta.updateTag({ name: "title", content: "Título de la página" })
    this.meta.updateTag({ name: "description", content: "Descripción del contenido de la página" })
    this.meta.updateTag({ name: "image", content: "https://www.prueba.com/blog-image.jpg" })
    this.meta.updateTag({ name: "site", content: "Mi sitio web" }) */
  }

}
