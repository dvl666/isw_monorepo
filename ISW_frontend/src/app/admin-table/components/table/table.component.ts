import { Component, Input } from '@angular/core';
import { UserServicesService } from '../../../services/user-services.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  providers: [
    UserServicesService
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  constructor(
    private readonly userService: UserServicesService
  ) {}

  @Input() users: any[]

  public acceptUser(user: any){
    this.userService.acceptTeacherRequest(user.id).subscribe({
      next: (response) => {
        this.users = this.users.filter(u => u.id !== user.id);
        console.log('User accepted:', response);
      },
      error: (err) => {
        console.error('Error accepting user', err);
      }
    });
  }

  public denyUser(user: any){
    console.log(user)
  }

}
