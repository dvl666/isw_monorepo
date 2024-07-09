import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  private apiUrl = 'http://localhost:3000'

  getTeachers(): Observable<any> {
    return this.http.get(this.apiUrl+'/user')
  }

  acceptTeacherRequest(teacherId: string): Observable<any> {
    console.log(teacherId)
    return this.http.post(this.apiUrl+'/user/accept-request/', {id: teacherId })
  }

}
