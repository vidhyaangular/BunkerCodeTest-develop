import { Component, OnInit } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { RequestOptions,Headers } from '@angular/http';

@Component({
  selector: 'app-person',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.css']
})
export class AddPersonComponent implements OnInit {

  public fname: String;
  public lname: String;
  public favcolor: String;
  public summary : Object;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  }

  formSubmit()
  {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let req = {
        "firstName": this.fname,
        "lastName": this.lname,
        "favoriteColor": this.favcolor
    };
  
    this.http.post('https://bunkerdev.azure-api.net/codetest/api/people/add',req).toPromise<any>().then(response  => {
        console.log(response.data.summary);
        //let res =per;
       
        //Object.assign(res,data);
        this.summary = response.data.summary;
      });
    
  }
  

}

