export interface CourseInterface {
    Id: number;
    Title: string;
    CreationDate: Date;
    Duration: string;
    DescriptionL: string;
}

export class Course implements CourseInterface {
    Id: number;
    Title: string;
    CreationDate: Date;
    Duration: string;
    DescriptionL: string;
}
