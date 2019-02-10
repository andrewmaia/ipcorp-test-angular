import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { LogSistema } from '../app/log-sistema';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LogSistemaService {
  private apiUrl =  'https://localhost:5001/api/';    
  constructor(private http: HttpClient) { }


  getLogs(): Observable<LogSistema[]>  {
    return this.http.get<LogSistema[]>(this.apiUrl + "logsistema");
  }  

  getLogsFromSource(): Observable<string> {
    return this.http.get<string>(this.apiUrl + "logsistema/GetLogsFromSource");
  }

}


