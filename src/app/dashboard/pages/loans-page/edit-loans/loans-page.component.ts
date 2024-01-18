import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { UtilitiesService } from '../../../services/utilities.service';
import { LoansService } from '../../../services/loans.service';
import { ILoanWithBooks } from '../../../interfaces/loan.interface';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-loans-page',
  templateUrl: './loans-page.component.html',
  styles: [
  ]
})
export class LoansPageComponent implements OnInit {
  constructor(private utilitiesService: UtilitiesService, 
              private loansService: LoansService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {}
  
  ngOnInit(): void {
    this.loansService.getBorrowedBooks().subscribe((loans: ILoanWithBooks[]) => this.loans = loans);
    this.utilitiesService.setVisibility(false);
  }

  public loans: ILoanWithBooks[] = [];
  public loan!: ILoanWithBooks;

  public editLoan(loan: ILoanWithBooks) {
    this.utilitiesService.setVisibility(true);
    this.loan = loan;
  };

  public deleteLoan() {

  };

  public getSeverity(status: boolean): string {
    switch (status) {
        case true:
            return 'success';
        case false:
            return 'danger';
    }
  };

  @ViewChild('dt') dt!: Table;
  public applyFilterGlobal($event: any, stringVal: string) {
    this.utilitiesService.filtering($event, stringVal, this.dt);
  };
}
