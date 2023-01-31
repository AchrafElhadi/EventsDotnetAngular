import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events!:Array<any>
  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.http.get<Array<any>>("https://localhost:7102/api/Evenement").subscribe({
      next:(data)=>{
        console.log("nothing")
        this.events=data
          
      },
      error:()=>{
        console.log("nothing")
      }})
  }
  Delete(num:number)
  {
      let v=window.confirm("are you sure")

      if(v)
      {
        this.http.delete("https://localhost:7102/api/Evenement/"+num).subscribe({
          next:(data)=>{            
              this.events=this.events.filter(x=>x.id!=num)
          },
          error:()=>{
            console.log("nothing")
          }})
      }

  }

}
