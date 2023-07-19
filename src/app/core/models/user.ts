// import { Injectable } from "@angular/core";


// @Injectable ({
//     providedIn: 'root'
// })

export interface User {
    firstname: string;
    lastname: string;
    email: string;
    isEmailVerified: boolean;
    roles: Array<any>;
    favoritesList: Array<any>;
}
