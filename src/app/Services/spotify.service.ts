import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  searchUrl: string;

  serverUrl: 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  logIn() {
    return this.http.get('http://localhost:3000/login').toPromise().then(res => {
      console.log(res);
    });
  } 

  searchMusic(str: string, type="artist") {
    this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
    return this.http.get(this.searchUrl);
  }
}
