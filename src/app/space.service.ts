import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(private http: HttpClient) { }
  getSpaceNews(){
    const URL =  `https://api.spaceflightnewsapi.net/v3/articles?_limit=100`;
    return this.http.get(URL);
  }
  getSpaceId(id:string){
    const URL =  `https://api.spaceflightnewsapi.net/v3/articles/${id}`;
    return lastValueFrom(this.http.get(URL));
  }
  getAllPipe(title:string){
    return this.http.get(`https://api.spaceflightnewsapi.net/v3/articles?title_contains=${title}`)
    }
}
