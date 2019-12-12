import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router'

let issueTemplate = `# {title}
## {name}

### Description
{description}

### Bio
{bio}

### Contact
Twitter: {twitter}
Website: {website}
Github: {github}
Email: {email}`

@Component({
  selector: 'app-call-for-presenters',
  templateUrl: './call-for-presenters.component.html',
  styleUrls: ['./call-for-presenters.component.scss']
})
export class CallForPresentersComponent implements OnInit {

  form: FormGroup
  err: boolean
  url: string

  constructor (private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit () {

    this.form = this.fb.group({
      'title': ['', Validators.required],
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'bio': ['', Validators.required],
      'twitter': '',
      'website': '',
      'github': '',
      'email': ['', Validators.required]
    })

    let state = this.route.snapshot.queryParams.state
    let code = this.route.snapshot.queryParams.code

    if (state && code) {
      state = JSON.parse(state)
      this.form.patchValue(state)
      this.http.post('https://j6jcwrrbbi.execute-api.us-east-1.amazonaws.com/default/hackregina_github_oauth', {
        code,
        state
      }).subscribe(res => {
          debugger
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': `token ${(<any>res).access_token}`
            })
          }

          this.http.post(`https://api.github.com/repos/HackRegina/cfp/issues`, {
            title: `${state.name} - ${state.title}`,
            body: this.getTemplate(issueTemplate)
          }, httpOptions)
            .subscribe(res => {
                this.url = (<any>res).html_url
              }, () => this.err = true
            )
        }, () => this.err = true
      )
    }
  }

  getTemplate(state) {
    return issueTemplate.replace('{title}', state.title)
      .replace('{name}', state.name)
      .replace('{description}', state.description)
      .replace('{bio}', state.bio)
      .replace('{twitter}', state.twitter)
      .replace('{website}', state.website)
      .replace('{github}', state.github)
      .replace('{email}', state.email)
  }

  submit () {
    Object.keys(this.form.controls).forEach(key => this.form.controls[key].markAsDirty())

    if (this.form.valid) {
      let val = this.form.value

      ;(<any>window).location = `https://github.com/login/oauth/authorize?client_id=b2d2249d42691fffb3a8&state=${JSON.stringify(val)}&scope=user:email`
    } else {
      this.err = true
    }

  }

}
