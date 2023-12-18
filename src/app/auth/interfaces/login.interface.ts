export interface IUserCredentials {
    email: string,
    password: string
}

export interface IAuthenticationResponse {
    token: string;
    expiration: string;
    errorMessage: string | null;
}

export enum AuthenticationStatus {
    checking = 'cheking',
    authenticated = 'authenticated',
    notAuthenticated = 'not-authenticated'
}