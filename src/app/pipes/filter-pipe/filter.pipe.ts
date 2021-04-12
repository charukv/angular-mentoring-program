import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterValue: string): any {
    if (!items || !filterValue) {
      return items;
    }
    return items.filter(
      (item) =>
        item.description.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.date.toString().toLowerCase().includes(filterValue.toLowerCase()) ||
        item.length.toString().toLowerCase().includes(filterValue.toLowerCase())
    );
  }
}
