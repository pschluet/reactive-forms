import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface Report {
  id: number;
  name: string;
}

enum FruitType {
  Apple, Banana, Orange
}

interface Fruit {
  name: string;
  type: FruitType;
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

  fruits: Fruit[] = [
    { name: 'Apple', type: FruitType.Apple },
    { name: 'Banana', type: FruitType.Banana },
    { name: 'Orange', type: FruitType.Orange }
  ];

  form = this.fb.group({
    report: [''],
    fruits: this.fb.array(
      this.fruits.map(_ => false)
    )
  });

  constructor(private fb: FormBuilder) {
  }

  onSubmit(): void {
    console.log('submitted');
  }
}
