import { Injectable } from "@angular/core";


Injectable({
    providedIn: 'root'
})
export interface User {

    firstname: String;
    lastname: String;
    email: String;
    isEmailVerified?: boolean ;
}
