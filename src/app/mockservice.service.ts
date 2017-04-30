import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class MockService {
  constructor(private http: Http) {
  }
  
  public getMockSource() {
    return this.http.get('http://localhost:4300/api/public/images');
    
  }
}
