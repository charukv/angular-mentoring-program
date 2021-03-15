export interface CourseInterface {
    Id: number;
    Title: string;
    CreationDate: Date;
    Duration: number;
    Description: string;
    topRated: boolean;
    Name: string;
}

export class Course implements CourseInterface {
    Id: number;
    Title: string;
    CreationDate: Date;
    Duration: number;
    Description: string;
    topRated: boolean;
    Name: string;
}
