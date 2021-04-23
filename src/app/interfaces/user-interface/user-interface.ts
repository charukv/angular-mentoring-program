export interface UserInterface {
    Id: number;
    FirstName: string;
    LastName: string;
}

interface Name {
    first: string;
    last: string;
}

export class User implements UserInterface {
    Id: number;
    name: Name;
    fullName: string;
    FirstName: string;
    LastName: string;
    public get FullName(): string {
        return this.name.first + '' + this.name.last;
    }
}