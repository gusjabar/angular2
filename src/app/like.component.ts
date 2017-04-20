import { Component, Input } from "@angular/core";

@Component({
    selector: "like",
    styles: [`
        .glyphicon-heart{
            color:#ccc;
            cursor:pointer;
        }
        .higlighted{
            color:deeppink;
        }
    `],
    template: `
            <i   
                class="glyphicon glyphicon-heart"
                [class.higlighted]="isLike"
                (click)="onClick($event)" 
                ></i>
                <span>{{totalLikes}}</span>
    `
})
export class LikeComponent {
    @Input() isLike: boolean = false;
    @Input() totalLikes: number = 0;
    onClick($event) {
        this.isLike = !this.isLike;
        this.totalLikes += this.isLike ? 1 : -1;
    }

} 