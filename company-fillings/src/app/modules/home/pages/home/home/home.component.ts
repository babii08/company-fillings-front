import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Company } from '../company.dto';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public companies: Company[];
  constructor(private companyService: CompanyService ) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  public getCompanies(): void {
    this.companyService.getCompanies().subscribe(
      (response: Company[]) => {
        this.companies = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
