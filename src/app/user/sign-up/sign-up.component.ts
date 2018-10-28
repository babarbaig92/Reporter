import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/user.model';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user : User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private userService : UserService, private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form? : NgForm){ //? makes parameter nullable
    if(form != null)
      form.reset();
    this.user = {
      UserName : '',
      Password : '',
      Email : '',
      FirstName : '',
      LastName : ''
    }
  }
  OnSubmit(form : NgForm){
    this.userService.registerUser(form.value).subscribe((data : any)=>{
      if(data.id){
        this.resetForm(form);
        this.toastr.success('User registration is successfull.');
      }else{
        this.toastr.error("Registration Failed.");
      }
    });
  }
}