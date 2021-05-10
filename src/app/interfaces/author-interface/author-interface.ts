export interface AuthorInterface {
    id: number;
    name: string;
}

export class Author implements AuthorInterface {
    id: number;
    name: string;
}