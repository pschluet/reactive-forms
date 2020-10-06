import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



interface Report {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive-forms';

  reports: Report[] = [
    { id: 0, name: 'One' },
    { id: 1, name: 'Two' },
    { id: 2, name: 'Three' },
    { id: 3, name: 'Four' },
    { id: 4, name: 'Five' },
  ];

  form = this.fb.group({
    report: ['']
  });

  constructor(private fb: FormBuilder) {
  }

  onSubmit(): void {
    console.log('submitted');
  }
}
