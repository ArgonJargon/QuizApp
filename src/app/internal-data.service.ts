import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InternalDataService {
  public loggedin: boolean = false;
  public userData: any = {
    name: 'Vivek.L',
    email: 'keneddy@gmail.com',
    password: 'kks@12',
    quizAttended: [true, true, true, true, true],
    quizScore: [20, 100, 40, 100, 60],
    title: 'Beginner',
    loggedIn: true,
    id: 1,
  };

  constructor() {}
}
