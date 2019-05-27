import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'presentation';
  ngOnInit(){
    console.log("test");
    $(document).ready(function() {
      console.log("success!");
      $.ajax({
      url: 'http://127.0.0.1:8000/api/posts',
      data: '',
      success: function(result){
          console.log(result);
          result.forEach(function(post){
              console.log(post.content);
          })
      },
      dataType: "JSON"
      });
  });    
  }
}
