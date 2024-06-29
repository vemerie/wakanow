import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import {
  IAPIAuthSuccessResponse,
  IUserLoginPayload,
  IUserRegisterPayload,
} from '../../interfaces/auth.interface';
import { BASE_API, ENDPOINTS } from '../../../core/endpoints';

export interface User {
  username: string;
  approved: boolean;
  admin: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(payload: IUserRegisterPayload): Observable<IAPIAuthSuccessResponse> {
    return this.http
      .post<IAPIAuthSuccessResponse>(
        `${BASE_API + ENDPOINTS.AUTH.register}`,
        payload
      )
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  login(payload: IUserLoginPayload): Observable<IAPIAuthSuccessResponse> {
    return this.http
      .post<IAPIAuthSuccessResponse>(
        `${BASE_API + ENDPOINTS.AUTH.login}`,
        payload
      )
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  logout(): void {}
}
