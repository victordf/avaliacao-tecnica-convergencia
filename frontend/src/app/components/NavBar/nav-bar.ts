import { Component, signal } from "@angular/core";

interface NavBarItem {
    label: string;
    route: string;
}

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.html',
    styleUrl: './nav-bar.css',
    imports: []
})
export class NavBar {
    protected readonly items = signal<NavBarItem[]>([
        { label: 'Home', route: '/' },
        { label: 'About', route: '/about' },
        { label: 'Contact', route: '/contact' }
    ]);
}