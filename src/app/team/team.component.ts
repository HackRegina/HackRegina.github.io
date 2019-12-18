import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, AfterViewInit {

  @ViewChildren('item') items: QueryList<ElementRef>;
  @ViewChildren('indicator') indicators: QueryList<ElementRef>;

  teamMembers = [];

  constructor (private contentful: ContentfulService, private renderer: Renderer2) { }

  ngOnInit () {
    this.contentful.getTeamMembers()
      .subscribe(res => this.teamMembers = res.sort((a, b) => a.fields.order - b.fields.order).map(t => t.fields));
  }

  ngAfterViewInit() {
    this.items.changes.subscribe(() => this.renderer.addClass(this.items.first.nativeElement, 'active'));
    this.indicators.changes.subscribe(() => this.renderer.addClass(this.indicators.first.nativeElement, 'active'));
  }

}
