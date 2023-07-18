import { Injectable } from "@angular/core";
import { Video } from "./video";

Injectable({
    providedIn: 'root'
})
export interface Section {
    name: String;
    description: String;
    videos: Array<Video>;
}
