import { Injectable } from '@angular/core';
import { Http, Headers, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// import { AuthService } from './auth.service';
// import { TokenService } from './token.service';


@Injectable()
export class ResourceService {

  constructor(private http: Http) {
  }

  get (link: string) {
    return this.http.get(link)
    .map(this.extractData);
  }

  // post(path: string, body, customHeaders?, put?) : Observable<any> {
  //   return this.http.request(
  //     path,
  //     {
  //       method: put ? RequestMethod.Put : RequestMethod.Post,
  //       body: body,
  //       headers: this.generateHeader(customHeaders),
  //       withCredentials: true
  //     }
  //   )
  //   .map(this.extractData);
  // }

  // private generateHeader(headers: Headers) {
  //   if (headers == null) {
  //     headers = new Headers();
  //   }

  //   const token = this.tokenService.getToken();
  //   if (token != null){
  //     headers.set("Authorization", "Bearer " + this.tokenService.getToken())
  //   }
  //   return headers;
  // }

  private extractData(response : Response) {
    const body = response.json();
    return body || { };
  }
}
