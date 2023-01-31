import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  eventfromgroup!:FormGroup
  events!:any
  constructor(private http:HttpClient,private route:ActivatedRoute,private routeNav:Router) {
    this.eventfromgroup=new FormGroup({
      id:new FormControl(''),
      nom:new FormControl(''),
      ville:new FormControl(''),
      description:new FormControl(''),
      nb_place:new FormControl(''),
      date:new FormControl('')
    })
   }

  ngOnInit(): void {
    
    this.http.get("https://localhost:7102/api/Evenement/"+this.route.snapshot.params["id"]).subscribe({
      next:(data)=>{
          this.eventfromgroup.setValue(data)
          console.log(data)
          
      },
      error:()=>{

      }})
  }
  EditEvent()
  {
    this.http.post("https://localhost:7102/api/Evenement",this.eventfromgroup.value).subscribe({
      next:(data)=>{
          console.log(data)
          this.routeNav.navigateByUrl("/events")
      },
      error:()=>{

      }
   })
  }
}
