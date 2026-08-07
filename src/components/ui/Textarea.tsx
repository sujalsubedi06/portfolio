import { useId, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function Textarea({ label, error, className, id, ...props }: TextareaProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="font-mono text-xs uppercase tracking-widest text-muted">
        {label}
      </label>
      <textarea
        id={inputId}
        rows={5}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'resize-none rounded-sm border border-border bg-surface px-4 py-3 text-secondary placeholder:text-muted/60',
          'transition-colors duration-200 focus:border-purple focus:outline-none',
          error && 'border-orange',
          className,
        )}
        {...props}
      />
      {error && (
        <p id={errorId} role="alert" className="text-xs text-orange-soft">
          {error}
        </p>
      )}
    </div>
  );
}
