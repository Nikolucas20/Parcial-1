import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Url="https://localhost:7018/api/"
  constructor(public api: HttpClient) { }
  
  public async Get (controller:string){
    var result:any
    var respo:any
    await this.api.get(this.Url+controller).toPromise().then((res=>{
      respo = res
      console.log(respo);
      result=respo;
    }))
    return result;
  }

  public async post(controller:string, body: any){
    return await this.api.post(this.Url+controller,body).subscribe((res)=>{});
  }

  
  public async delete(controller:string, id:string){
    return await this.api.delete(this.Url+controller+"/"+id);
  }

  
  public async update(controller:string, id:string, body: any){
    return await this.api.put(this.Url+controller+"/"+id,body);
  }
}
