
interface IProps{
    msg:string;
}
const Error = ({msg}:IProps) => {
  return msg ? <span className="text-red-700 text-xs md:text-lg font-semibold">{msg}</span> : null;
}

export default Error