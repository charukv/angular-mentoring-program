import { Pipe, PipeTransform } from "@angular/core";
import { Course } from "../../interfaces/course-interface/course-interface";

export enum SortDirection {
  Asc = "asc",
  Desc = "desc",
}

@Pipe({
  name: "orderBy",
})
export class OrderByPipe implements PipeTransform {
  transform(items: Course[], direction: SortDirection): any {
    if (!items || !direction) {
      return items;
    }
    return items.sort((item1: Course, item2: Course) => {
      if (direction === SortDirection.Asc) {
        return item1.CreationDate.getTime() - item2.CreationDate.getTime()
      } else {
        return item2.CreationDate.getTime() - item1.CreationDate.getTime();
      }
    });
  }
}
