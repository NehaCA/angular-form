import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent {

  userModel = new User('abc', 'def', 'nehamf.mda', 'agshdgasd', 'female', 'chf', 'ddsbcd', 'hsaghja', 'absa', 6798, false );
   

}
