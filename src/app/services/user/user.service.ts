import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(obj: any) {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.REGISTER_USER, obj);
  }
  addOrder(obj:any)
  {
    return this.http.post(Constant.API_END_POINT + Constant.METHODS.ADD_ORDER, obj);
  }
}
