import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-template-admin',
  templateUrl: './template-admin.component.html',
  styleUrls: ['./template-admin.component.scss']
})
export class TemplateAdminComponent implements OnInit {
  idTemplate = 1;
  idUserAdmin = 1;
  cols=[
    {
      class:"col-3",
      id:1
    },
    {
      class:"col-5",
      id:2
    },
    {
      class:"col-10",
      id:3
    },
    {
      class:"col-2",
      id:4
    },
    {
      class:"col-12",
      id:5
    },
    {
      class:"col-6",
      id:6
    },
    {
      class:"col-1",
      id:7
    },
    {
      class:"col-7",
      id:8
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  colOption(idcol:number){
    console.log("id col seleccionada:"+idcol.toString()+" id plantilla:"+this.idTemplate+" id user:"+this.idUserAdmin)
  }

  newCol(){
    console.log('new col')
  }

}
