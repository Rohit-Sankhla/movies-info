import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { constantData } from "../../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http: HttpClient ) {}

  getMovies(): Observable<any> {
    return this.http.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${constantData.apiKey}`)
  }
}
