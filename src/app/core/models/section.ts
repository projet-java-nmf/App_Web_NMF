import { Injectable } from "@angular/core";

Injectable({
    providedIn: 'root'
})
export interface Section {
    name: String;
    description: String;
    listVideos: Array<any>;
}
