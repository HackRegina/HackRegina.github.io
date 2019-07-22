export class Label {
  name: string
}

export class Job {
  title: string
  labels: Label[]
  created_at: Date
  body: string
  number: number
}
