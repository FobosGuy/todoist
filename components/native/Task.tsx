"use client";

import React, { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { IBaseProps } from "@/typescript/props";
import { cn } from "@/lib/utils";

interface ITaskProps extends IBaseProps {
  name: string;
  completed: boolean;
}

export const Task = ({ name, completed, className, ...props }: ITaskProps) => {
  const [checked, setChecked] = useState(completed);

  function toggleCompleted() {
    setChecked((prev) => !prev);
  }

  return (
    <div
      className={cn(
        "flex items-center gap-2 transition duration-500",
        checked && "opacity-50",
        className
      )}
      {...props}
    >
      <Checkbox id="task-id" checked={checked} onClick={toggleCompleted} />
      <label className="relative" htmlFor="task-id">
        <span
          className={cn(
            "absolute top-1/2 h-[1px] w-full bg-black transition duration-500 origin-left scale-x-0",
            checked && "scale-x-100"
          )}
        />
        <span>{name}</span>
      </label>
    </div>
  );
};
