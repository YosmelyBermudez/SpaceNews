import { Component} from '@angular/core';
import { SpaceService } from '../space.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  valor:string=''
  title!:string
  resultado1:any =[]
  loading=true
  constructor(
    private activateRoute: ActivatedRoute,
    private _spaceNews: SpaceService
  ){
    this.activateRoute.params.subscribe((params) => {
      this.title = params['title'];
      this.init();
      });
  }
    
    init(){
      setTimeout(() => {
        const title = this._spaceNews.getAllPipe(this.title);
        title.subscribe({
          next: (response: any) => {
            console.log(response);
            this.resultado1 = response;
            this.loading = false;
          },
          error: (error) => {
            console.log(error);
            this.loading=true
          },
        });
      }, 1000);
    

/**NO USÉ EL SEARCH-FILTER PIPE */}
}
