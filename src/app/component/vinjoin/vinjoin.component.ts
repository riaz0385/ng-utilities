import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-vinjoin',
  templateUrl: './vinjoin.component.html',
  styleUrls: ['./vinjoin.component.css']
})


export class VinjoinComponent implements OnInit {
  vinPattern = /\b[A-Z0-9]{17}\b/gm;
  numberPattern = /\d+/gm;
  anyPattern = /\w+/gm;
  regex;
  data: string = "";
  delimiter: string = "', '";
  typeSelected: string = "1";
  unique: boolean = true;
  result: String = "";
  r: string = "";

  constructor() {
  }

  ngOnInit() {
    this.regex = this.vinPattern;
    this.delimiter = "', '";
    this.typeSelected = "1";
    this.unique = true;
    this.result = "";
    this.r = "";
  }

  submit() {
    //console.log("----------------Start------------------");
    this.result = "";
    this.r = "";
    this.result = this.data;

    switch (this.typeSelected) {
      case "1": {
        //console.log("Vin Only");
        this.regex = this.vinPattern;
        break;
      }
      case "2": {
        //console.log("Number Only");
        this.regex = this.numberPattern;
        this.delimiter = ", ";
        break;
      }
      case "3": {
        //console.log("Any");
        this.regex = this.anyPattern;
        break;
      }
      default: {
        //console.log("Invalid choice assuming Vin Only");
        this.regex = this.vinPattern;
        break;
      }
    }


    let m;
    let s = new Set();
    while ((m = this.regex.exec(this.data)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === this.regex.lastIndex) {
        this.regex.lastIndex++;
      }
      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        //console.log(`Found match, group ${groupIndex}: ${match}`);
        if (this.unique) {
          s.add(match);
        } else {
          this.r = this.r + match + this.delimiter;
        }
      });
    }


    if (this.unique) {
      this.r = "";
      //console.log("Set Index=",s.size);
      let count=s.size;
      s.forEach((value, valueAgain, s) => {
        //console.log("SETs=" + value)
        this.r += value;
        if(--count===0){
          //console.log("Reached the end.");
        }else{
          this.r += this.delimiter;
        }

      });
    }

    this.result = this.r;
    /*console.log("data=" + this.data);
    console.log("delimiter=" + this.delimiter);
    console.log("typeSelected=" + this.typeSelected);
    console.log("unique=" + this.unique);
    console.log("regex=" + this.regex);
    console.log("result=" + this.result);
    console.log("----------------END------------------");*/
  }

  copyInputMessage(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

}
