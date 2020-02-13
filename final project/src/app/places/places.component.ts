import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PlacesService } from '../places.service';
import {HttpServiceService } from '../http-service.service'

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  places;
  singlePlace;
  // ........///
  singlePlaceId;
  singlePlaceData; //obj
  constructor(private route: ActivatedRoute,private placeService :PlacesService,private httpService:HttpServiceService) {

    this.route.params.subscribe((param:Params)=>{
      this.singlePlaceId=param["id"];

      // this.httpService.gettingPlaces().subscribe(
      //   data=>
      //   { this.places=data;

      //     this.singlePlaceData=this.getSingleSpesifcPlace(this.singlePlaceId);
      //     console.log(this.singlePlaceData)

      //   })

      this.httpService.gettingPlaces().subscribe(

        data=>
        {
          this.places=data;
          console.log(this.places)
            this.singlePlaceData= this.getSingleSpesifcPlace(this.singlePlaceId);
            console.log("ssssssss")
            console.log(this.singlePlaceData)
        }
      ) 
    
    })
   }

  ngOnInit() {

  }


  
  getSingleSpesifcPlace(id)
  {

   for (let i of this.places)
   {
     if(i.id==id)
     {
       this.singlePlace=i;
     }
   }

   return this.singlePlace;
  }

}
