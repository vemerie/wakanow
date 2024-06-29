import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { User } from '../auth/auth.service';
import { BASE_API, ENDPOINTS } from '../../../core/endpoints';
import { IAPIResponseData } from '../../../admin/interfaces/admin.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  approveUser(id: string): Observable<{ updatedAt: string }> {
    const user = { approval: true, admin: true };
    return this.http
      .put<{ updatedAt: string }>(
        `${BASE_API + ENDPOINTS.AUTH.register}/${id}`,
        user
      )
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getAllUsers(): Observable<IAPIResponseData> {
    return this.http
      .get<IAPIResponseData>(`${BASE_API + ENDPOINTS.USER.get_user}`)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  getCurrentUser() {}

  logout(): void {}
}
