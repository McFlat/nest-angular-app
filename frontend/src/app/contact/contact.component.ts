import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  displayedColumns  :  string[] = ['id', 'name', 'title', 'email', 'phone', 'address', 'city', 'actions'];
  dataSource : Contact[]  = [];
  contact : Contact = {};
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.readContacts().subscribe((result)=>{   
     this.dataSource = result;
    })
  }

  selectContact(contact: Contact){
    this.contact = contact;
  }

  newContact(){
    this.contact = {};
  }

  createContact(f: NgForm){
    this.apiService.createContact(f.value).subscribe((result)=>{
      console.log(result);
    });
    
  }

  deleteContact(id: number){
    this.apiService.deleteContact(id).subscribe((result)=>{
      console.log(result);
    });
  }

  updateContact(f: NgForm){
    f.value.id = this.contact['id'];
    this.apiService.updateContact(f.value).subscribe((result)=>{
      console.log(result);
    });
  }
}
