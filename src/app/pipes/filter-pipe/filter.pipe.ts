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
        item.Title.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.Description.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.Name.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.CreationDate.toString().toLowerCase().includes(filterValue.toLowerCase()) ||
        item.Duration.toString().toLowerCase().includes(filterValue.toLowerCase())
    );
  }
}
