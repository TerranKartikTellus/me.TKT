
// validate if entireStr start with initialStr
export function Validate(initialStr,entireStr){
        
        let result=true;
        const inLen=initialStr.length , enLen=entireStr.length ;
        
        if(inLen>enLen) return "error"
         for(let i=0;i<inLen;i++){
             if(initialStr[i]==entireStr[i]){
                 result=true
             }
             else{
                 result=false;
                 break;
             }
         }

          return result ;
}
