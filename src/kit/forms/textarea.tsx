// src/kit/forms/textarea.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';
    import { signal } from '@minejs/signals';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface TextareaProps {
        // Value
        value?: string;
        onChange?: (value: string) => void;

        // Placeholder
        placeholder?: string;

        // Size
        rows?: number;
        cols?: number;

        // States
        disabled?: boolean;
        readOnly?: boolean;

        // Styling
        class?: string;

        // HTML attributes
        id?: string;
        name?: string;
        maxLength?: number;
        minLength?: number;

        // Accessibility
        'aria-label'?: string;
        'aria-describedby'?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Textarea(props: TextareaProps): JSXElement {
        const {
            value: initialValue = '',
            onChange,
            placeholder = 'Enter text...',
            rows = 4,
            cols = 40,
            disabled = false,
            readOnly = false,
            class: className,
            ...restProps
        } = props;

        const textValue = signal(initialValue);

        const handleChange = (e: Event) => {
            const target = e.target as HTMLTextAreaElement;
            textValue.set(target.value);
            onChange?.(target.value);
        };

        return (
            <textarea
                value={textValue()}
                onChange={handleChange}
                placeholder={placeholder}
                rows={rows}
                cols={cols}
                disabled={disabled}
                readOnly={readOnly}
                class={`
                    w-full px-4 py-2 rounded-lg border border-border-primary
                    bg-surface text-primary text-sm font-medium
                    transition-colors focus:outline-none focus:ring-2
                    focus:ring-color-primary/50 focus:border-color-primary
                    disabled:opacity-50 disabled:cursor-not-allowed
                    resize-vertical overflow-auto
                    ${className || ''}
                `.trim()}
                {...restProps}
            />
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
