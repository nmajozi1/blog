import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lambda',
  templateUrl: './lambda.component.html',
  styleUrls: ['./lambda.component.scss']
})
export class LambdaComponent implements OnInit {

  public key: string | undefined = environment.AWS_KEY;
  public secret: string | undefined = environment.AWS_SECRET;

  constructor() { }

  ngOnInit(): void {
  }

}
