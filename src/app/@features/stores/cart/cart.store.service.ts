import { Injectable } from "@angular/core";
import { ListingItem } from "@models/listingitem.interface";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class CartStoreService {
    // private cartItems: Array<ListingItem | any> = [];
    private _cartItems$ = new BehaviorSubject<Array<ListingItem | any>>([]);
    // Expose the observable$ part of the `_cartItems$` subject (read only stream)
    readonly cartItems$: Observable<Array<ListingItem>> = this._cartItems$.asObservable();

    public _lastAddedItem$ = new BehaviorSubject<ListingItem>(null);

    constructor() {}

    // lastest emitted value
    private get cartItems() {
        return this._cartItems$.getValue();
    }

    private set cartItems(val) {
        this._cartItems$.next(val);
    }

    public get get() {
        return itemName => this[itemName];
    }

    // Methods

    public addItemToCart(item: ListingItem) {
        this._lastAddedItem$.next(item);
        this._cartItems$.next([...this._cartItems$.getValue(), item]);
    }

    public resetCart(): void {
        this._cartItems$.next([]);
    }

    public removeCartItem(id: number): void {
        this.cartItems = this.cartItems.filter(item => item.id !== id);
    }
}
