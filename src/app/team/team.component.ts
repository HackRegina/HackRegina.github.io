import { Component, OnInit } from '@angular/core'
import { ContentfulService } from '../contentful.service'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teamMembers = []

  constructor (private contentful: ContentfulService) { }

  ngOnInit () {
    this.contentful.getTeamMembers()
      .subscribe(res => this.teamMembers = res.sort((a, b) => a.fields.order - b.fields.order))
  }

}
