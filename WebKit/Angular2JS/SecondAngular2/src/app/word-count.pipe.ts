import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCount'
})
export class WordCountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let wc = 0;
    let str = <string>value;
    for(let i=0;i<str.length;i++){
      if(str.charAt(i)===' '||str.charAt(i)==='.')
        wc++;
    }
    return wc;
  }

}
