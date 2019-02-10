import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LogSistema } from '../app/log-sistema';
import { LogSistemaService } from '../app/log-sistema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logs$: Observable<LogSistema[]>;
  importing: boolean;
  constructor(private logSistemaService: LogSistemaService) { }
  ngOnInit() {
    this.importing=false;
    this.logs$ = this.logSistemaService.getLogs();
  }  

  import() {
    this.importing=true;
    this.logSistemaService.getLogsFromSource().subscribe(()=>{
      this.logs$ = this.logSistemaService.getLogs();
      this.importing=false;
    });
  }    
}




