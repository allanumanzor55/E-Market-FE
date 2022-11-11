import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PlansService} from 'app/services/plans.service'
import {TPlans,ROUTES} from 'contants'



@Component({
  selector: 'app-plan-selection',
  templateUrl: './plan-selection.component.html',
  styleUrls: ['./plan-selection.component.scss'],
})
export class PlanSelectionComponent implements OnInit {
  
  plansList:TPlans[] = [];
  
  constructor(private planService:PlansService, private router:Router) {}

  ngOnInit(): void {
    this.planService.getPlansList().subscribe({
      next: (data) => {
        this.plansList = data.data.list;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  selectPlan(id:number){
    this.router.navigate([ROUTES.COMPANY_ADMIN.ROOT])
  }
}
