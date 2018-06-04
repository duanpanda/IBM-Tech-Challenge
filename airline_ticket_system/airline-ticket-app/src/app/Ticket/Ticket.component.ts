/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TicketService } from './Ticket.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Ticket',
	templateUrl: './Ticket.component.html',
	styleUrls: ['./Ticket.component.css'],
  providers: [TicketService]
})
export class TicketComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          ticketId = new FormControl("", Validators.required);
        
  
      
          seat = new FormControl("", Validators.required);
        
  
      
          classType = new FormControl("", Validators.required);
        
  
      
          arivalTime = new FormControl("", Validators.required);
        
  
      
          departLoc = new FormControl("", Validators.required);
        
  
      
          arrivalLoc = new FormControl("", Validators.required);
        
  
      
          owner = new FormControl("", Validators.required);
        
  
      
          value = new FormControl("", Validators.required);
        
  


  constructor(private serviceTicket:TicketService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          ticketId:this.ticketId,
        
    
        
          seat:this.seat,
        
    
        
          classType:this.classType,
        
    
        
          arivalTime:this.arivalTime,
        
    
        
          departLoc:this.departLoc,
        
    
        
          arrivalLoc:this.arrivalLoc,
        
    
        
          owner:this.owner,
        
    
        
          value:this.value
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceTicket.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "com.airlineticketsystem.ticket.Ticket",
      
        
          "ticketId":this.ticketId.value,
        
      
        
          "seat":this.seat.value,
        
      
        
          "classType":this.classType.value,
        
      
        
          "arivalTime":this.arivalTime.value,
        
      
        
          "departLoc":this.departLoc.value,
        
      
        
          "arrivalLoc":this.arrivalLoc.value,
        
      
        
          "owner":this.owner.value,
        
      
        
          "value":this.value.value
        
      
    };

    this.myForm.setValue({
      
        
          "ticketId":null,
        
      
        
          "seat":null,
        
      
        
          "classType":null,
        
      
        
          "arivalTime":null,
        
      
        
          "departLoc":null,
        
      
        
          "arrivalLoc":null,
        
      
        
          "owner":null,
        
      
        
          "value":null
        
      
    });

    return this.serviceTicket.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "ticketId":null,
        
      
        
          "seat":null,
        
      
        
          "classType":null,
        
      
        
          "arivalTime":null,
        
      
        
          "departLoc":null,
        
      
        
          "arrivalLoc":null,
        
      
        
          "owner":null,
        
      
        
          "value":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "com.airlineticketsystem.ticket.Ticket",
      
        
          
        
    
        
          
            "seat":this.seat.value,
          
        
    
        
          
            "classType":this.classType.value,
          
        
    
        
          
            "arivalTime":this.arivalTime.value,
          
        
    
        
          
            "departLoc":this.departLoc.value,
          
        
    
        
          
            "arrivalLoc":this.arrivalLoc.value,
          
        
    
        
          
            "owner":this.owner.value,
          
        
    
        
          
            "value":this.value.value
          
        
    
    };

    return this.serviceTicket.updateAsset(form.get("ticketId").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceTicket.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceTicket.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "ticketId":null,
          
        
          
            "seat":null,
          
        
          
            "classType":null,
          
        
          
            "arivalTime":null,
          
        
          
            "departLoc":null,
          
        
          
            "arrivalLoc":null,
          
        
          
            "owner":null,
          
        
          
            "value":null 
          
        
      };



      
        if(result.ticketId){
          
            formObject.ticketId = result.ticketId;
          
        }else{
          formObject.ticketId = null;
        }
      
        if(result.seat){
          
            formObject.seat = result.seat;
          
        }else{
          formObject.seat = null;
        }
      
        if(result.classType){
          
            formObject.classType = result.classType;
          
        }else{
          formObject.classType = null;
        }
      
        if(result.arivalTime){
          
            formObject.arivalTime = result.arivalTime;
          
        }else{
          formObject.arivalTime = null;
        }
      
        if(result.departLoc){
          
            formObject.departLoc = result.departLoc;
          
        }else{
          formObject.departLoc = null;
        }
      
        if(result.arrivalLoc){
          
            formObject.arrivalLoc = result.arrivalLoc;
          
        }else{
          formObject.arrivalLoc = null;
        }
      
        if(result.owner){
          
            formObject.owner = result.owner;
          
        }else{
          formObject.owner = null;
        }
      
        if(result.value){
          
            formObject.value = result.value;
          
        }else{
          formObject.value = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "ticketId":null,
        
      
        
          "seat":null,
        
      
        
          "classType":null,
        
      
        
          "arivalTime":null,
        
      
        
          "departLoc":null,
        
      
        
          "arrivalLoc":null,
        
      
        
          "owner":null,
        
      
        
          "value":null 
        
      
      });
  }

}
