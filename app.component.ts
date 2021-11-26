import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'validationForm'
  errorFirstName :string = "";
  errorGender :string = "";
  errorCountry :string = "";
  errorCity :string = "";
  errorAge :string = "";
  submit(firstname:string,genderFemale:boolean,genderMale:boolean,country:string,city:string,age:string) {
    console.log("FirstName = ",firstname,"GenderFemale = ",genderFemale,"GenderMale = ",genderMale,"Country = ",country,"City = ",city,"Age = ",age);
    firstname = firstname.trim().replace(/\s+/g, " ");
    country = country.replace(/\s+/g, " ");
    city = city.replace(/\s+/g, " ");
    this.errorFirstName  = "";
    this.errorGender  = "";
    this.errorCountry  = "";
    this.errorCity  = "";
    this.errorAge  = "";

    if (firstname === " " || firstname === "") {
      this.errorFirstName = "Please Enter Valid Email";
    }
    if (genderFemale === false && genderMale === false) {
      this.errorGender = "Please Choose your Gender";
    }
    if (country === " " || country === "") {
      this.errorCountry = "Please Enter your Country";
    }
    if (city === " " || city === "") {
      this.errorCity = "Please Enter your City";
    }
    if (country.toLowerCase()=== "usa" || country.toLowerCase()=== "canada" || country.toLowerCase()=== "india" || country.toLowerCase()=== "us") {
      if (age === " " || age === "0" || age === "") {
        this.errorAge = "Please Enter your age";
      }
    }
  }
  
}
