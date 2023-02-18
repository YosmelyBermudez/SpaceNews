import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceService } from '../space.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  id:string
  resultado1:any
  constructor(
    private activateRoute: ActivatedRoute,
    private _spaceNews: SpaceService
  ){
    this.id= this.activateRoute.snapshot.paramMap.get("id") || ""
    this.init()
  }
  async init(){
    try{
      const detalle = await this._spaceNews.getSpaceId(this.id) 
      this.resultado1 = {...detalle}
    }catch(e){
      console.log(e)
    }
  }

}
