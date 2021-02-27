export interface CourseInterface {
    Id: number;
    Title: string;
    CreationDate: Date;
    Duration: string;
    Description: string;
}

export class Course implements CourseInterface {
    Id: number;
    Title: string;
    CreationDate: Date;
    Duration: string;
    Description: string;
}
