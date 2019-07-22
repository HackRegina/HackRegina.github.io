import {Component, Input, Renderer2} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {Label} from "../job";

export enum JobSortType {
  TITLE_ASC, TITLE_DESC, CREATED_DATE_ASC, CREATED_DATE_DESC
}
const SELECTED_ITEM_CLASS: string = "selected-item";

@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.scss']
})
export class JobFilterComponent {

  @Input()
  labels: Label[] = [];
  @Input()
  formGroup: FormGroup;

  jobSortType = JobSortType;
  private selectedSortElement: HTMLElement;

  constructor(private renderer: Renderer2) {}

  setSortBy(sortType: JobSortType, element: HTMLElement) {
    if(this.selectedSortElement) {
      this.renderer.removeClass(this.selectedSortElement, SELECTED_ITEM_CLASS);
    }
    this.selectedSortElement = element;
    this.renderer.addClass(this.selectedSortElement, SELECTED_ITEM_CLASS);
    this.formGroup.get("sortBy").setValue(sortType);
  }

  addLabel(label: Label, element: HTMLElement) {
    const selectedLabels: Label[] = this.formGroup.get("labelFilter").value;
    const labelIndex = selectedLabels.indexOf(label);
    if(labelIndex > -1) {
      this.renderer.removeClass(element, SELECTED_ITEM_CLASS);
      selectedLabels.splice(labelIndex);
    } else {
      this.renderer.addClass(element, SELECTED_ITEM_CLASS);
      selectedLabels.push(label);
    }

    this.formGroup.get("labelFilter").setValue([...selectedLabels]);
  }

}
