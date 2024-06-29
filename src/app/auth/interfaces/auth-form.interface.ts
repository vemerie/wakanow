import { FormControl } from '@angular/forms';

export interface IUserPayloadForm {
  username: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}
