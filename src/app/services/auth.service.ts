import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private signupUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBllIOhOaguZmQCfU30luPgjELuGtjkdgc';

    constructor(private http: HttpClient) {}

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            this.signupUrl,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        );
    }
}