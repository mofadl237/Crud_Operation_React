export interface IProduct{
    id?:string|undefined;
    title:string;
    description:string;
    imageURL:string;
    price:string;
    colors:string[];
    category:{
        name:string,
        imageURL:string
    }
}
type InputName = 'title' |'description'|'imageURL'|'price';

export interface IInput{
    id:string;
    type:string;
    name:InputName;
    label:string;
}


export interface ICategory {id:number|string , name:string ,imageURL:string}