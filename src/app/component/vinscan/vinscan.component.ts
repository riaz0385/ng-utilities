import {Component, OnInit} from '@angular/core';
import {Papa} from "ngx-papaparse";
import {DataService} from "../../service/data.service";


@Component({
  selector: 'app-vinscan',
  templateUrl: './vinscan.component.html',
  styleUrls: ['./vinscan.component.css']
})
export class VinscanComponent implements OnInit {
  bayUpdated: number = 0;

  constructor(private papa: Papa, private data: DataService) {
  }

  ngOnInit() {
  }

  public changeListener(files: FileList) {
    console.log(files);
    this.papa.parse(files.item(0), {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        let parsedData = result.data;
        /*console.log('Parsed: ', result);*/
        console.log('ParsedData: ', parsedData);

        for (let parsedDataKey in parsedData) {
          console.log(parsedData[parsedDataKey]);
          /*console.log(parsedData[parsedDataKey].VIN);
          console.log(parsedData[parsedDataKey].Bay);*/
          this.data.updateBay(0, parsedData[parsedDataKey].VIN, parsedData[parsedDataKey].Bay).subscribe(
            response => {
              console.log('Response=' + response)
              //do something with response
            }, err => {
              console.log('Error=' + err.message);
            }, () => {
              /*console.log('completed');*/
              this.bayUpdated += 1;
            }
          );
        }

      }
    });
    /*    if(files && files.length > 0) {
          let file : File = files.item(0);
          console.log(file.name);
          console.log(file.size);
          console.log(file.type);
          let reader: FileReader = new FileReader();
          reader.readAsText(file);
          reader.onload = (e) => {
            let csv : string = reader.result;
            console.log(csv);
            this.bayUpdated +=1;
          }
        }*/
  }

}
