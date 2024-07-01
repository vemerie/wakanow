import { Component } from '@angular/core';
import { SearchComponent } from '../../../core/shared/search/search.component';
import { UserItemComponent } from '../../components/user-item.component';
import { SharedModule } from '../../../core/shared/shared.module';
import { IUser } from '../../interfaces/admin.interface';
import { UserService } from '../../../auth/services/user/user.service';
import { RouterEvent } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [SharedModule, SearchComponent, UserItemComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  loading!: boolean;
  users!: IUser[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.loading = true;
    this.userService.getAllUsers().subscribe((res: any) => {
      this.users = res.data;
      this.loading = false;
    });
  }

  public search(event: any) {}

  public approveUser(id: string) {
    this.userService.approveUser(id).subscribe();
  }

  logout() {}
}
