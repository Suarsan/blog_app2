import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-rrss',
  templateUrl: './rrss.component.html',
  styleUrls: ['./rrss.component.scss']
})
export class RrssComponent implements OnInit {

  @Input() post;
  @Input() hasTitle: boolean;
  twitterUrl;
  facebookUrl;
  mailUrl;
  telegramUrl;
  whatsappUrl;

  constructor(private ds: DomSanitizer) { }
  
  ngOnInit() {
    this.twitterUrl = `https://twitter.com/intent/tweet?url=https://descubrelavera.com/${ this.post?.parent?.slug ? this.post?.parent?.slug + '/' + this.post?.slug : this.post?.slug }&text=${ this.post?.title }&via=descubrelavera&hashtags=descubrelavera`;
    this.facebookUrl = `http://www.facebook.com/sharer.php?u=https://descubrelavera.com/${ this.post?.parent?.slug ? this.post?.parent?.slug + '/' + this.post?.slug : this.post?.slug}`; 
    this.mailUrl = `mailto:?subject=Descubre la Vera · ${this.post?.slug}&body=https://descubrelavera.com/${ this.post?.parent?.slug ? this.post?.parent?.slug + '/' + this.post?.slug : this.post?.slug}`; 
    this.telegramUrl = this.ds.bypassSecurityTrustUrl(`tg://msg?text=https://descubrelavera.com/${ this.post?.parent?.slug ? this.post?.parent?.slug + '/'  + this.post?.slug : this.post?.slug }`);
    this.whatsappUrl = this.ds.bypassSecurityTrustUrl(`whatsapp://send?text=https://descubrelavera.com/${ this.post?.parent?.slug ? this.post?.parent?.slug + '/'  + this.post?.slug : this.post?.slug }`);
  }

}
