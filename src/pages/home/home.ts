import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StudentService} from '../../services/students.service';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [StudentService]
})
export class HomePage {

  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  className: string;
  rollNo: string;
  city: string;

  constructor(public navCtrl: NavController, public studentApi: StudentService, private toastCtrl: ToastController) {

  }
  onAddStudent() {
    const studentData = {

      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      dob: this.dob,
      className: this.className,
      rollNo: this.rollNo,
      city: this.city,

    }
    this.studentApi.addStudent(studentData).subscribe(res=>{
      console.log(res);
      this.presentToast('User Created Succussfully');
    }, err => {
      console.log(err);
      this.presentToast(err.message);
    })
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
