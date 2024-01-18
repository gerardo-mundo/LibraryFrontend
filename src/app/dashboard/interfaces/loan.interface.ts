export interface ILoan {
    userId: number;
    borrowedBooks: number[];
}
export interface ILoanWithBooks {
    id:             number;
    returned:       boolean;
    loanDate:       string;
    devolutionDate: string;
    accountId:      string;
    userName:       string;
    userId:         number;
    borrowedBooks:  IBorrowedBook[];
}

export interface IBorrowedBook {
    id:          number;
    adquisition: number;
}
