const slicerText =(text:string , maxLength:number = 50  )=>{
    if(text.length >= maxLength){
        return `${text.slice(0,maxLength)}...`;
    }
    else{
        return text;
    }
}

export {slicerText};