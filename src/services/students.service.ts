import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { NetworkService } from './network.serivce';
import { Students } from "../models/students";
import { HttpClient } from '@angular/common/http';
import { environment } from '../config/config';


interface IStudentService {
    getStudents(): Observable<any>;
    getStudentById(id: string) : Observable<any>;
    addStudent(payload: {
        firstName: string,
        lastName: string,
        rollNo: string,
        className: string,
        dob: string,
        city: string,
        email: string,
        phone: string }): Observable<Students>;
    updateStudent(id: string, payload: {
        firstName: string,
        lastName: string,
        rollNo: string,
        className: string,
        dob: string,
        city: string,
        email: string,
        phone: string }): Observable<Students>;
    deleteStudent(id: string): Observable<Students>;

}

@Injectable()

export class StudentService implements IStudentService {
    constructor (public network: NetworkService, private http: HttpClient) {}
 
    getStudents(): Observable<any> {
        return this.http
        .get(`${environment.base_uri}/students`, {headers: this.network.getHeaders()})
    }

    getStudentById(id: string): Observable<any> {
        return this.http
        .get(`${environment.base_uri}/students/${id}`, {headers: this.network.getHeaders()})
    }

    addStudent(payload: {
        firstName: string,
        lastName: string,
        rollNo: string,
        className: string,
        dob: string,
        city: string,
        email: string,
        phone: string 
    }) : Observable<Students> {
        return this.http
        .post(`${environment.base_uri}/students`, payload, {headers: this.network.getHeaders()})

    }
    updateStudent(id:string, payload: {
        firstName: string,
        lastName: string,
        rollNo: string,
        className: string,
        dob: string,
        city: string,
        email: string,
        phone: string 
    }) : Observable<Students> {
        return this.http
        .post(`${environment.base_uri}/students/${id}`, payload, {headers: this.network.getHeaders()})
    }

    deleteStudent(id:string) {
        return this.http
        .delete(`${environment.base_uri}/students/${id}`, {headers: this.network.getHeaders()})
    }


}