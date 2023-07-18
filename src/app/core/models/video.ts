// import { Injectable } from "@angular/core";

// Injectable({
//     providedIn: 'root'
// })

export interface Video {
    title: string;
    description: string;
    linkUrl: string;
    publicationDate: string;
    // isPrivate: boolean;
    // hasTeaser: boolean;
    categories: Array<string>;
}   
