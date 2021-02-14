import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from './company.dto';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient ) { }

  public getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiServerUrl}/api/companies/all`);
  }
}
