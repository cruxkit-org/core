// src/kit/forms/select.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';
    import { signal } from '@minejs/signals';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface SelectOption {
        value: string;
        label: string;
        disabled?: boolean;
    }

    export interface SelectProps {
        // Value
        value?: string;
        onChange?: (value: string) => void;

        // Options
        options: SelectOption[];

        // Placeholder
        placeholder?: string;

        // States
        disabled?: boolean;

        // Styling
        class?: string;

        // HTML attributes
        id?: string;
        name?: string;

        // Accessibility
        'aria-label'?: string;
        'aria-describedby'?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Select(props: SelectProps): JSXElement {
        const {
            value: initialValue = '',
            onChange,
            options,
            placeholder = 'Select an option',
            disabled = false,
            class: className,
            ...restProps
        } = props;

        const selectedValue = signal(initialValue);

        const handleChange = (e: Event) => {
            const target = e.target as HTMLSelectElement;
            selectedValue.set(target.value);
            onChange?.(target.value);
        };

        return (
            <select
                value={selectedValue()}
                onChange={handleChange}
                disabled={disabled}
                class={`
                    w-full px-4 py-2 rounded-lg border border-border-primary
                    bg-surface text-primary text-sm font-medium
                    transition-colors focus:outline-none focus:ring-2
                    focus:ring-color-primary/50 focus:border-color-primary
                    disabled:opacity-50 disabled:cursor-not-allowed
                    appearance-none cursor-pointer
                    ${className || ''}
                `.trim()}
                {...restProps}
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
