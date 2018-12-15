import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'content': 'application/json'
    , 'cache-control': 'no-cache'
  })
};

@Injectable({
  providedIn: 'root'
})


export class DataService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  updateBay(orderNumber, vin, bay) {
    let url = this.baseUrl + `/api/tmw/Order/injectBay?ordHdrNum=${orderNumber}&vin=${vin}&bayLoc=${bay}`;
    /*console.log("URL=" + url);*/
    return this.http.put<any>(url, httpOptions);
  }

}
