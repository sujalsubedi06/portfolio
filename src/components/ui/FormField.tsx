"use client";

import { type InputHTMLAttributes, type TextareaHTMLAttributes, useId } from "react";
import { cn } from "@/lib/utils";

interface BaseProps {
  label: string;
  className?: string;
}

type InputProps = BaseProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "className"> & { as?: "input" };
type TextareaProps = BaseProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> & { as: "textarea" };

export function FormField(props: InputProps | TextareaProps) {
  const { label, className, as, ...rest } = props;
  const id = useId();
  const baseClasses = cn(
    "w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors duration-200 placeholder:text-[var(--color-text-faint)] focus:border-[var(--color-accent)]",
    className
  );

  if (as === "textarea") {
    return (
      <div>
        <label
          htmlFor={id}
          className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-text-faint)]"
        >
          {label}
        </label>
        <textarea
          id={id}
          rows={5}
          className={cn(baseClasses, "resize-none")}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      </div>
    );
  }

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[var(--color-text-faint)]"
      >
        {label}
      </label>
      <input
        id={id}
        className={baseClasses}
        {...(rest as InputHTMLAttributes<HTMLInputElement>)}
      />
    </div>
  );
}
