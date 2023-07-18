import { Injectable } from "@angular/core";

Injectable({
    providedIn: 'root'
})
export interface Video {
    title: string;
    description: string;
    linkUrl: string;
    categories: Array<string>;
    publicationDate: string;
}   
