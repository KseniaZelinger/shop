import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";


@Injectable()
export class ProductService {

    constructor(private httpClient: HttpClient) { }

    public getProducts(): Observable<Product[]> {
        return this.httpClient.get<Product[]>('https://pet-esteban.ru/ited-api/marketplace/users/ksenia/data');
    }
}

export interface Product {
    name: string;
    article: string;
    price: number;
    color: string;
    description: string;
    image: string;
}