import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {

  @Input() teamMember

  photo

  constructor () { }

  ngOnInit () {
    this.photo = `https:${this.teamMember.photo.fields.file.url}`
  }

}
