export interface UserInterface {
    Id: number;
    FirstName: string;
    LastName: string;
}

export class User implements UserInterface {
    Id: number;
    FirstName: string;
    LastName: string;
    get FullName(): string {
        return this.FirstName + '' + this.LastName;
    }
}