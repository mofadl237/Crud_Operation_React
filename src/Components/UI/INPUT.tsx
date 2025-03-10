import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    //escape Error 
    str?:string;
}

const INPUT = ({ ...rest }: IProps) => {
  return (
    <input
      className="border-[1px] border-gray-300 rounded-md shadow-md hover:shadow-lg focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 px-3 py-3 text-md"
      {...rest}
    />
  );
};

export default INPUT;
