import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StudentService} from '../../services/students.service';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [StudentService]
})
export class ListPage {

  studentList;
  constructor(public navCtrl: NavController, public navParams: NavParams, public studentApi: StudentService) {
  
    this.onGetStudentList();
  }
  onGetStudentList() {
    this.studentApi.getStudents().subscribe(res=>{
      console.log(res);
      this.studentList = res;
    }, err=> {
      console.log(err);
    });
  }
}
