import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";

@Component({
    selector: 'paises-select',
    templateUrl: './paises-select.html',
    imports: []
})
export class PaisesSelect {
    private http = inject(HttpClient);
    protected paises: string[] = [];

    constructor() {
        this.http.get<{ data: string; }>('http://192.168.15.4:8089/api/paises')
            .subscribe(paises => {
                this.paises = JSON.parse(paises.data)
                console.log(this.paises);
            });

    }

    onChange(pais: string) { 
        console.log('País selecionado:', pais);
    }
}