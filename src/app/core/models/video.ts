import { Injectable } from "@angular/core";

Injectable({
    providedIn: 'root'
})
export interface Video {
    title: String;
    description: String;
    linkUrl: String;
    categories: Array<String>;
    publicationDate: String;
}   
