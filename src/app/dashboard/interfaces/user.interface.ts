export interface IUser {
    type: number;
    name: string;
    secondName: string | null;
    lastName: string;
    motherName: string;
    enrollmentNum: string | null;
    employeeKey: string | null;
    address: string | null;
}

export interface IAccount {
    email: string;
    password: string;
    name: string;
    lastName: string;
    employeeKey: string;
}
