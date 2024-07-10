import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  private apiUrl = 'http://localhost:3000'

  constructor(
    private readonly http: HttpClient
  ) { }

  getClasses(): Observable<any> {
    return this.http.get(this.apiUrl+'/class')
  }

  addStudent(classId: number, studentId: number): Observable<any> {
    return this.http.post(this.apiUrl + '/class/add-student', { classId: classId, studentId: studentId })
  }

  getClassesForStudent(studentId: number): Observable<any> {
    return this.http.get(this.apiUrl + '/class/get-classes-for/' + studentId)
  }

  removeStudentFromClass(classId: number, studentId: number) {
    return this.http.post(this.apiUrl + '/class/remove-student-from-class', { classId: classId, studentId: studentId })
  }

  getClassesNotEnrolledByStudent(studentId: number): Observable<any> {
    return this.http.get(this.apiUrl + '/class/get-classes-not-enrolled/' + studentId)
  }

  //asdasd@a

}
