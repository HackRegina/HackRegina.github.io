import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const issueTemplate = `# {title} - {format}
## {name}

### Description
{description}

### Prerequisites
{prerequisites}

### Bio
{bio}

### Contact
Twitter: {twitter}
Website: {website}
Github: {github}
Email: {email}`;

@Component({
  selector: 'app-call-for-presenters',
  templateUrl: './call-for-presenters.component.html',
  styleUrls: ['./call-for-presenters.component.scss']
})
export class CallForPresentersComponent implements OnInit {

  form: FormGroup;
  err: boolean;
  url: string;
  twitterUrlRegex = /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/;
  websiteUrlRegex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  githubUrlRegex = /http(?:s)?:\/\/(?:www\.)?github\.com\/([a-zA-Z0-9_]+)/;

  constructor (private fb: FormBuilder) { }

  ngOnInit () {
    this.form = this.fb.group({
      'title': ['', Validators.required],
      'format': ['', Validators.required],
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'prerequisites': ['', Validators.required],
      'bio': ['', Validators.required],
      'twitter': ['', Validators.pattern(this.twitterUrlRegex)],
      'website': ['', Validators.pattern(this.websiteUrlRegex)],
      'github': ['', Validators.pattern(this.githubUrlRegex)],
      'email': ['', Validators.required]
    });
  }

  getTemplate(state) {
    return issueTemplate.replace('{title}', state.title)
      .replace('{format}', state.format)
      .replace('{name}', state.name)
      .replace('{description}', state.description)
      .replace('{prerequisites}', state.prerequisites)
      .replace('{bio}', state.bio)
      .replace('{twitter}', state.twitter)
      .replace('{website}', state.website)
      .replace('{github}', state.github)
      .replace('{email}', state.email);
  }

  submit () {
    Object.keys(this.form.controls).forEach(key => this.form.controls[key].markAsDirty());

    if (this.form.valid) {
      const val = this.form.value;
      const titleEncoded = encodeURIComponent(`${val.name} - ${val.title}`);
      const bodyEncoded = encodeURIComponent(this.getTemplate(val));
      const labelsEncoded = encodeURIComponent(val.format);
      window.location.href = `https://github.com/HackRegina/cfp/issues/new` +
        `?title=${titleEncoded}&body=${bodyEncoded}&labels=${labelsEncoded}`;
    } else {
      this.err = true;
    }

  }

}
