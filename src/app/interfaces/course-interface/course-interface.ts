export interface CourseInterface {
    id: number;
    date: Date;
    length: number;
    description: string;
    isTopRated: boolean;
    name: string;
    Author: string;
}

export class Course implements CourseInterface {
    id: number;
    date: Date;
    length: number;
    description: string;
    isTopRated: boolean;
    name: string;
    Author: string;
}
