import { Component, OnInit } from "@angular/core";
import { Twitter } from "./twitter";
import { TwitterServices } from "app/twitter.services";

@Component({
  selector: 'twitter',
 
  styles: [
    `
    .media-left img{
      border-radius: 10px;
    }
    .media-body {
      font-size:1em;
    }
    .media-body .title{
      font-size:1.4em;
    }
    `
  ],
  template: `
<div class="media" *ngFor="let twitte of twitters">
  <div class="media-left">
    <a href="#">
      <img class="media-object" src="{{twitte.avatar}}" alt="...">
    </a>
  </div>
  <div class="media-body">
    <p><span class="media-heading title"><strong>{{twitte.title}}</strong></span> 
    <span class="text-muted title">{{twitte.user}}</span></p>
    <p>{{twitte.message}}</p>
    <p><like [totalLikes]="twitte.likes" [isLike]="twitte.isLike"></like></p>
  </div>
</div>
`
})
export class TwitterComponent implements OnInit {
  twitters: Twitter[];

  constructor(private _service: TwitterServices) {

  }

  ngOnInit() {
    this.twitters = this._service.getTwitter();
  }
} 