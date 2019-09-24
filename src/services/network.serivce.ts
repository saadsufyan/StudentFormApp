import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NetworkService {
  public iosClientKey = '';
  public androidClientKey = '';
  public device;
  public authorizationkey;

  constructor(public http: HttpClient, public platform: Platform) {
    if (this.platform.is('ios')) {
      this.device = 'ios';
      this.authorizationkey = this.iosClientKey;
    } else {
      this.device = 'android';
      this.authorizationkey = this.androidClientKey;
    }
  }

  getHeaders() {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return headers;
  }
}
