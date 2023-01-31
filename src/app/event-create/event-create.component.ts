import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  eventfromgroup!:FormGroup
  constructor(private http:HttpClient,private routeNav:Router) { 
    this.eventfromgroup=new FormGroup({
      nom:new FormControl(''),
      ville:new FormControl(''),
      description:new FormControl(''),
      nb_place:new FormControl(''),
      date:new FormControl('')
    })
  }

  ngOnInit(): void {
  }
  CreateEvent()
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
