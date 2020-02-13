import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PlacesService } from '../places.service';
import {HttpServiceService } from '../http-service.service'
import { Z_FILTERED } from 'zlib';


@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})
export class SingleCategoryComponent implements OnInit {
cats;  
places;
selctedPlaces=[];
// ......//
singleCatId;
singleCatData;
singleSelecetedPlaces;
// ...............//
repetedLocatins=[];
uniqe;

  constructor(private route: ActivatedRoute,private placeService :PlacesService,private httpService:HttpServiceService) { 
  
    this.route.params.subscribe((param:Params)=>{
      this.singleCatId=param["id"];
      console.log("heeeeee"+ typeof(+this.singleCatId))

      
      this.httpService.gettingData().subscribe(
        data=>
        {
         this.cats=data;  
         console.log(this.cats)
        this.singleCatData= this.loopingforSpecifcCategory(this.singleCatId);
        console.log(this.singleCatData);
  
        }
      )

      this.httpService.gettingPlaces().subscribe(

        data=>
        {
          this.repetedLocatins=[];
          this.places=data;
          console.log(this.places)
            this.singleSelecetedPlaces= this.getPlacesOfSingleCat(this.singleCatId);
            console.log(this.singleSelecetedPlaces)

            for(let i of this.singleSelecetedPlaces)
            {
              this.repetedLocatins.push(i.location);
            }
            this.uniqe= new Set(this.repetedLocatins);

        }
      )

     

      })
  }

  ngOnInit() {
  
  }

  loopingforSpecifcCategory(id)

  {
  for (let i of this.cats)
  {
    if(i.id==id)
    {
      return i;
    }
  }
  }
    

  getPlacesOfSingleCat(id)
  {

  this.selctedPlaces=[];
  for(let place of this.places)
  {
    for(let i of place.catId)
    {
      if(i==id)
      {
        this.selctedPlaces.push(place)
      }
    }
  }
   return this.selctedPlaces
  } 

  filterdarr=[];
  

  clickimhcheckBox(val)
  {
    if (val.target.checked==true)
    {
      for(let i of this.selctedPlaces)
      {
        if (i.location==val.target.value)
        {
              this.filterdarr.push(i); 
        }
      }
    }
    else 
    {
      for (let i=0;i<this.filterdarr.length;i++)
      {
        if (this.filterdarr[i].location==val.target.value)
        {
          this.filterdarr.splice(i, 1);
          i--;
        }
      }
    }
    console.log("ana bara el loop")
    console.log(this.filterdarr)
  }


}


