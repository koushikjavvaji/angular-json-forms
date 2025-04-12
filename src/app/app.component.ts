import { Component } from '@angular/core';
import {
  JsonFormsAngularMaterialModule,
  angularMaterialRenderers,
} from '@jsonforms/angular-material';
import { JsonFormsModule } from '@jsonforms/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonFormsAngularMaterialModule, JsonFormsModule],
  template: `
    <h2>Basic JSON Form</h2>
    <jsonforms
      [data]="data"
      [schema]="schema"
      [uischema]="uischema"
      [renderers]="renderers"
    >
    </jsonforms>
  `,
})
export class AppComponent {
  data = {
    name: '',
  };

  schema = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        minLength: 3,
      },
    },
    required: ['name'],
  };

  uischema = {
    type: 'Control',
    scope: '#/properties/name',
    label: 'Your Name',
  };

  renderers = angularMaterialRenderers;
}
