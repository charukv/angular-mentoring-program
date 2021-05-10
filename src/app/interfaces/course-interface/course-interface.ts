import { Author } from "../author-interface/author-interface";

export interface CourseInterface {
    id: number;
    date: Date;
    length: number;
    description: string;
    isTopRated: boolean;
    name: string;
    authors: Author[];
}

export class Course implements CourseInterface {
    id: number;
    date: Date;
    length: number;
    description: string;
    isTopRated: boolean;
    name: string;
    authors: Author[];
}
