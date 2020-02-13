import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import {HttpServiceService } from '../http-service.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cats;
  regesterationCats=[];
  wanteddata;
  places;
  constructor( private placeService :PlacesService,private httpService:HttpServiceService) {

    this.httpService.gettingData().subscribe(
      data=>
      {
       this.cats=data;  
       console.log(this.cats)

       for(let regstCat of this.cats)
       {
        console.log("inside for")
         if(regstCat.reservation=="true"){
           this.regesterationCats.push(regstCat);
           console.log("inside if")
         }
       }

      }
    )
 
    console.log(this.cats)

  this.httpService.gettingPlaces().subscribe(data=>{
    this.places=data;
    // console.log(this.places)
  })
   }

  ngOnInit() {
    // this.cats=this.placeService.obj.categories;
   
  }
  lowerPlaceSearch;
  lowerPlaceData;


  handlingSearch(inputVal)
  {
  inputVal.value="";
  this.wanteddata=[];
  }  

  lookingFor(event)
{
  this.wanteddata=[];
for (let i=0;i<this.places.length;i++)
{ 
  this.lowerPlaceSearch=event.target.value.toLowerCase();
  this.lowerPlaceData=this.places[i].name.toLowerCase();
  
  if (this.lowerPlaceData.includes(this.lowerPlaceSearch) && event.target.value.length!==0 )
  // || ( this.places[i].location.includes(event.target.value) && event.target.value.length!==0 )
  {
    
    this.wanteddata.push(this.places[i])
  }
}

console.log(this.wanteddata)
}
   
}
 


