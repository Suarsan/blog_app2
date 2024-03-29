import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this._setMetaInfo();
  }

  private _setMetaInfo() {
    this.seoService.setMetaTags({
      title: 'Temas legales · descubrelavera.com',
      description: 'Toda la información disponible acerca de los temas legales y políticas asociadas con el sitio www.descubrelavera.com',
      slug: 'legal'
    });
    this.seoService._setNoIndex();
  }

}
