import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private calendar: Calendar) {

  }

  createEvent() {
    var calOptions: any = {
      "attendees": {
        1: {
          "firstName": "Sameer",
          "lastName": "Sharma",
          "emailAddress": "sameer.sharma@metacube.com"
        },
        2: {
          "firstName": "Umashankar",
          "lastName": "Arora",
          "emailAddress": "umashankar.arora@metacube.com"
        }, 
        3: {
          "firstName": "Raghavendra",
          "lastName": "Dadeech",
          "emailAddress": "raghavendra.dadeech@metacube.com"
        },
       }
    };

    var startDate = new Date();
    startDate.setTime(startDate.getTime() + (2*60*60*1000));
    var endDate = new Date();
    endDate.setTime(endDate.getTime() + (2*60*60*1000 + 45*60*1000));

    this.calendar.createEventWithOptions("Reboot Testing", "Jaipur", "Raghavendra Please Complete Web App", 
    startDate, endDate, calOptions).then(data => {
      console.log(data);
    }).catch(err=> {
      console.log(err);
    });  
  }

}
