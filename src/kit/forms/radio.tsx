// src/kit/forms/radio.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';
    import { signal } from '@minejs/signals';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface RadioProps {
        // Value
        value: string;
        checked?: boolean;
        onChange?: (value: string) => void;

        // Label
        label?: string | JSXElement;

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

    export interface RadioGroupProps {
        // Value
        value?: string;
        onChange?: (value: string) => void;

        // Options
        options: {
            value: string;
            label: string | JSXElement;
            disabled?: boolean;
        }[];

        // Direction
        direction?: 'vertical' | 'horizontal';

        // States
        disabled?: boolean;

        // Styling
        class?: string;

        // HTML attributes
        name?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Radio(props: RadioProps): JSXElement {
        const {
            value,
            checked: initialChecked = false,
            onChange,
            label,
            disabled = false,
            class: className,
            ...restProps
        } = props;

        const isChecked = signal(initialChecked);

        const handleChange = (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (target.checked) {
                isChecked.set(true);
                onChange?.(value);
            }
        };

        return (
            <label class={`flex items-center gap-2 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className || ''}`}>
                <input
                    type="radio"
                    value={value}
                    checked={isChecked()}
                    onChange={handleChange}
                    disabled={disabled}
                    class={`
                        w-5 h-5 rounded-full border-2 border-border-primary
                        bg-surface cursor-pointer transition-colors
                        checked:border-color-primary
                        focus:outline-none focus:ring-2 focus:ring-color-primary/50
                        disabled:opacity-50 disabled:cursor-not-allowed
                        accent-color-primary
                    `.trim()}
                    {...restProps}
                />
                {label && (
                    <span class="text-sm text-primary font-medium">
                        {label}
                    </span>
                )}
            </label>
        );
    }

    export function RadioGroup(props: RadioGroupProps): JSXElement {
        const {
            value: initialValue = '',
            onChange,
            options,
            direction = 'vertical',
            disabled = false,
            class: className,
            name,
            ...restProps
        } = props;

        const selectedValue = signal(initialValue);

        const handleChange = (value: string) => {
            selectedValue.set(value);
            onChange?.(value);
        };

        const directionClass = direction === 'horizontal' ? 'flex-row' : 'flex-col';

        return (
            <div class={`flex ${directionClass} gap-3 ${className || ''}`} {...restProps}>
                {options.map((option) => (
                    <Radio
                        value={option.value}
                        label={option.label}
                        checked={selectedValue() === option.value}
                        onChange={handleChange}
                        disabled={disabled || option.disabled}
                        name={name}
                    />
                ))}
            </div>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
