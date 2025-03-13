interface IProductCustom{title:string ,description:string,imageURL:string , price:string }
export const validationForm =(product:IProductCustom)=>{
    const {title , description ,imageURL,price,}=product;
    const errors: IProductCustom= {
        title:'',
        description:'',
        imageURL:'',
        price:'',
    }

    const validUrl = /^(https?|ftp):\/\/([^\s/$.?#].[^\s]*)(\/[^\s?#]*)?(\?[^\s#]*)?(#\S*)?$/.test(product.imageURL);
    const validTitle =/^[A-Z]\S{2,}$/.test(product.title);

    if(!title.trim() || !validTitle){
        errors.title =  "Valid Capital Letter && minimum 2 character";
    }
    
    if(!description.trim()  || description.length <10){
        errors.description =  "Valid Description Is 10 character";
    }
    if(!imageURL.trim() || !validUrl ){
        errors.imageURL =  "Image URL Is Not Valid ";
    }
    if(isNaN(parseInt(price)) || parseInt(price)===0){
        errors.price =  "Price Is Not Valid";
    }
    
    


    return errors;
}