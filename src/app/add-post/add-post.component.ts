import { Component } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  UserId=""
  Id=""
  Title=""
  Body=""
  readValue=()=>{
    let data={"UserId":this.UserId,"Id":this.Id,"Title":this.Title,"Body":this.Body}
    console.log(data)
  }
}
