
interface IProps{
src:string;
alt:string;
className:string;

}
const Image = ({src,alt,className}:IProps) => {
  return (
    src  ?  <img src={src} alt={alt} className={className} /> : null
  )
}

export default Image