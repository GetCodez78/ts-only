

export class Footer {

    yinyang(param1:string, param2:string, callback:()=>void) {  // this callback can now use the variables in app.ts 
          console.log(`${param1} ${param2} in da House!!!`);
          callback();  // arg is given here but the definition will be in app.ts 
    }

}
