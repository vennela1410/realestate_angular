import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentModel } from 'src/app/models/agent-model.model';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent  implements OnInit{

  newAgent : AgentModel = new AgentModel;

  constructor(private service: CommonServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  addNewAgent() {
    console.log('add clicked ',this.newAgent.agentFirstName);
    this.service.addNewAgent(this.newAgent).subscribe(resp => {
      if(resp.statusCode == 200){
        window.alert("Agent has been added, Agent Id is : "+resp.id);
        this.router.navigate(["home"]);
      }
      else
        window.alert("Something went wrong when trying to add Agent, please try again later.");
    });
  }
  clearAgentDetails() {
    console.log('clear clicked');
    this.newAgent = new AgentModel;
  }

}
