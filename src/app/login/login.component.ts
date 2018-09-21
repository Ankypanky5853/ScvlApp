import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  images: Array<string>;

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    // this._http.get('https://picsum.photos/list')
    //     .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
    //     .subscribe(images => this.images = images);
  }

  // private _randomImageUrls(images: Array<{id: number}>): Array<string> {
  //   return [1, 2, 3].map(() => {
  //     const randomId = images[Math.floor(Math.random() * images.length)].id;
  //     return `http://localhost:4200/assets/img/logo/=${randomId}`;
  //     // return `../assets/img/=${randomId}`;
  //   });
  // }

//   setTimeout (function() {
//        this.edited = false;
//        console.log(this.edited);
//    }.bind(this) 3000)
// 
};
