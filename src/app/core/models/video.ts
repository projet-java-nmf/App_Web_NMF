import { Injectable } from "@angular/core";

Injectable({
    providedIn: 'root'
})
export interface Video {
    title: String;
    description: String;
    privated?: boolean ;
    hasTeaser?: boolean ;
}
