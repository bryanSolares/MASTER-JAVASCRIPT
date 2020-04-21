import { Injectable } from "@angular/core";
import { Global } from "./global.service";

@Injectable()
export class UploadService {
  public url: string;
  constructor() {
    this.url = Global.url;
  }

  makeFileRequest(
    id:string,
    params: Array<string>,
    files: Array<File>,
    name: string
  ) {
      return new Promise((resolve,reject)=>{
        let formData:any = new FormData();
        let xhr = new XMLHttpRequest();

        for (let index = 0; index < files.length; index++) {
            formData.append(name,files[index],files[index].name);
        }

        xhr.onreadystatechange = ()=>{
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.stringify(xhr.response));
                }else{
                    reject(JSON.stringify(xhr.response));
                }
            }
        }

        xhr.open("POST",this.url.concat("project/upload-image/").concat(id),true);
        xhr.send(formData);

      });
  }
}
