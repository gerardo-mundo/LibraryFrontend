import { Component, OnInit } from '@angular/core';
import { IEmployeeData } from 'src/app/dashboard/interfaces/user.interface';
import { AccountsService } from 'src/app/dashboard/services/accounts.service';

@Component({
  selector: 'app-registered-accounts-page',
  templateUrl: './registered-accounts-page.component.html',
  styles: [
  ]
})
export class RegisteredAccountsPageComponent implements OnInit {
  constructor(private accountsService: AccountsService) {}
  
  ngOnInit(): void {
    this.getAccounts();
  }

  public accounts: IEmployeeData[] = [];

  private getAccounts(): void {
    this.accountsService.getAccountsList().subscribe(accounts => this.accounts = accounts);
  };

}
