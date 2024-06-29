import { Component, Input } from '@angular/core';
import { SharedModule } from '../../core/shared/shared.module';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class UserItemComponent {
  @Input() user: any;
}
