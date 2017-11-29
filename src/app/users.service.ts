import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
    size = 8;

    constructor(private http: Http) {}

    getUsers() {
        return this.http
            .get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=gb')
            .map(response => response.json())
            .map(response => response.results)
            .map(users =>
                users.map(u => ({
                    name: u.name.first + ' ' + u.name.last,
                    picture: u.picture.large,
                    geo: u.location.city + ', ' + u.location.state + ', ' + u.location.street
                }))
            );
    }

    setSize(size) {
        this.size = size;
    }
}
