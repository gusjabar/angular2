import { Injectable } from "@angular/core";
import { Twitter } from "./twitter";

@Injectable()
export class TwitterServices {
    _twitter: Twitter[] = [
        {
            likes: 2,
            message: "Petentium iracundia ex per. An quo nisl tantas. Ne periculis torquatos his, esse laudem disputationi vix et. An eam dico mutat. Minimum definitiones eos no.",
            title: "Sodales vestibulum proin",
            user: "@email",
            avatar: "http://lorempixel.com/100/100/people?2",
            isLike: true
        },
        {
            likes: 0,
            message: "Lorem ipsum dolor sit amet, ea malorum electram facilisis qui, facilis facilisis assueverit nam ei. Pro ad alienum imperdiet. Nam alii phaedrum et, eam iudico atomorum evertitur ad, iriure aliquip disputationi est cu. Vel tractatos argumentum no.",
            title: "Posuere congue lobortis",
            user: "@email2",
            avatar: "http://lorempixel.com/100/100/people?9",
            isLike: false
        },
        {
            likes: 1,
            message: "Eripuit vulputate et pri. Per erat corrumpit no, id veri tamquam sensibus vix. In soluta offendit appellantur has, invidunt praesent te mea, id pri quodsi disputando. Cum prompta repudiandae eu, errem offendit ea cum. Pro rebum adipisci id, dolor putant veritus his i",
            title: "Faucibus wisi nec bibendum",
            user: "@email3",
            avatar: "http://lorempixel.com/100/100/people?1",
            isLike: true
        },
        {
            likes: 5,
            message: "Lorem ipsum dolor sit amet, ea malorum electram facilisis qui, facilis facilisis assueverit nam ei.",
            title: "Invidunt praesent te mea",
            user: "@email7",
            avatar: "http://lorempixel.com/100/100/people?8",
            isLike: true
        }
    ]


    getTwitter(): Twitter[] {
        return this._twitter;
    }
}