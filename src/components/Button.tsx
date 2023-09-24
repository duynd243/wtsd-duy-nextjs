import { cn } from "@/utils";
import React from "react";

type Props = {
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, ...props }: Props) => {
  return (
    <button
      className={cn(
        "rounded-full bg-black text-center text-white disabled:opacity-50",
        className
      )}
      {...props}
    ></button>
  );
};

export default Button;
