import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'sponsorshipLevel'
})
export class SponsorshipLevelPipe implements PipeTransform {

  transform (sponsors: any[], level: any): any {
    if (!sponsors || !level) {
      return sponsors
    }
    return sponsors.filter(sponsor => sponsor.fields.sponsorshipLevel.sys.id === level.sys.id)
  }

}
