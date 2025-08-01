import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
    isMenuOpen = false;
    toggleBlock() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
