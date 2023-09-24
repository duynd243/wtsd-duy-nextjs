import { cn } from "@/utils";
import React, { LegacyRef, forwardRef, useId } from "react";

type Props = {
  isTextArea?: boolean;
  label?: string;
  requiredSymbol?: boolean;
  error?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type Ref = HTMLInputElement | HTMLTextAreaElement;

const Input = forwardRef<Ref, Props>(
  ({ label, isTextArea, requiredSymbol, className, error, ...props }, ref) => {
    const id = useId();

    const Component = isTextArea ? "textarea" : "input";

    return (
      <div className='flex flex-col'>
        {label && (
          <label
            className='w-fit text-[18px] font-medium leading-[183.333%] text-jet'
            htmlFor={id}
          >
            {label} {requiredSymbol && <span>*</span>}
          </label>
        )}

        {
          <Component
            id={id}
            ref={
              ref as LegacyRef<HTMLInputElement> &
                LegacyRef<HTMLTextAreaElement>
            }
            className={cn(
              "rounded-[10px] border-silver-sand p-[14px] text-[18px] focus:outline-none",
              {
                "mt-[10px]": label,
                "border-red focus:border-red focus:ring-red": error,
              },
              className
            )}
            {...props}
          />
        }
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
