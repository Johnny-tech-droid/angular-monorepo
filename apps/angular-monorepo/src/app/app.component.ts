import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';

@Component({
  imports: [RouterModule, HeaderComponent, FooterComponent, RegisterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-monorepo';
  inputRows = {
    id: 0,
    name: '',
    username: '',
    email: ''
  };
}
