import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataService } from "./data.service";


@Injectable({
    providedIn: 'root'
})

export class DataResolver implements Resolve<any>{

    constructor(private dataService: DataService){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.dataService.getData();
    }
}