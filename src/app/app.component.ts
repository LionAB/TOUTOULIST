import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TOUTOULIST';
  list:any[]=[];
  donelist:any[]=[];
  addTask(item:string)
  {
    
    this.list.push({id:this.list.length,name:item,completed:false})
    //console.warn(this.list);
  }
  removeTask(id:number)
  {
    console.warn(id)
    this.list=this.list.filter(item=>item.id!==id)
  }
  removeTaskdone(id:number){
    this.donelist=this.donelist.filter(item=>item.id!==id)
  }
  uncompleteTask(id:number,item:string){

    this.list.push({id:this.list.length,name:item,completed:false})
    this.donelist=this.donelist.filter(item=>item.id!==id)
  }
  completeTask(id:number,item:string)
  {
    //console.warn(this.list[id])
    //this.list[id]
    //console.warn(this.list[id].completed)
    this.list[id].completed= true
    //console.warn(this.list[id].completed)
    if(this.list[id].completed == true){
      this.donelist.push({id:this.list.length,name:item,completed:true})
      this.list=this.list.filter(item=>item.id!==id)
     console.warn(this.donelist)
    
    }
  }
  editTask(id:number,edit:string){
    this.list[id].name=edit
    //console.warn(this.list)
  }
  editTaskdone(id:number,editdone:string){
    console.warn(this.donelist[id]);
    this.donelist[id].name=editdone
  }
}
