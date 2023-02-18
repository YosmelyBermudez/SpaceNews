import { Component } from '@angular/core';
import { SpaceService } from '../space.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loading = true;
  notispace: any = [];
  constructor(private _spaceNews: SpaceService){
    setTimeout(() => {
      this._spaceNews.getSpaceNews().subscribe({
        next: (response: any) => {
          console.log(response);
          this.notispace = response;
          this.loading = false;
        },
        error: (error) => {
          console.log(error);
          this.loading=true
        },
      });
    }, 1000);
  }

}
