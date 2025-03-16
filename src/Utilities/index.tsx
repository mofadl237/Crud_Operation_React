const slicerText = (text: string, maxLength: number = 50) => {
  if (text.length >= maxLength) {
    return `${text.slice(0, maxLength)}...`;
  } else {
    return text;
  }
};

const slicerNumber=(str:string )=>{
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export { slicerText ,slicerNumber};
