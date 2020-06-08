import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ApiService } from "./alawebinars.service";


import { from, Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

const cors = require("cors");

const json_path = 'https://media.alanet.org/ALA_Events_Feed/Public/ALA-Events.json';

const res: string[] = [];

// const displayData: string[] = [];

let x = 0;

@Component({
  selector: 'app-alawebinars',
  templateUrl: './alawebinars.page.html',
  styleUrls: ['./alawebinars.page.scss'],
})

export class AlawebinarsPage implements OnInit {

  preOutput: Observable<any>;
  outputJson: JsonPipe;
  output: string;
  displayData: any;

  constructor(private api: ApiService) { }

  ngOnInit() {



    this.api
      .getListOfGroup(json_path)
      .subscribe(
        data => {


          for (var webinar in data) {
            data.hasOwnProperty(webinar) && res.push(data[webinar])

          }

          this.displayData = data;        



        res.forEach(element => {
          const out: string = res[x];
          console.log(out);
          x++;
          
        });
        },
        err => {
          console.log(err);
        }

      );
  }


}
