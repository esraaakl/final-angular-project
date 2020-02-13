import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient ) { }


gettingData()
{
  return this.http.get("http://localhost:3000/categories"); 
}

gettingPlaces()
{
  return this.http.get("http://localhost:3000/places"); 
}

gettingUsers()
{
  return this.http.get("http://localhost:3000/users"); 
}

getSingleCategory(id)
{
  return this.http.get("http://localhost:3000/categories/"+id); 
}


}
