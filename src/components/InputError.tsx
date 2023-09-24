import React, { PropsWithChildren } from "react";

const InputError = (props: PropsWithChildren) => {
  return <p className='text-red'>{props.children}</p>;
};

export default InputError;
