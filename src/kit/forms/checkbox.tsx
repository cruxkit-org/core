// src/kit/forms/checkbox.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';
    import { signal } from '@minejs/signals';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface CheckboxProps {
        // Value
        checked?: boolean;
        onChange?: (checked: boolean) => void;

        // Label
        label?: string | JSXElement;

        // States
        disabled?: boolean;

        // Styling
        class?: string;

        // HTML attributes
        id?: string;
        name?: string;
        value?: string;

        // Accessibility
        'aria-label'?: string;
        'aria-describedby'?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Checkbox(props: CheckboxProps): JSXElement {
        const {
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
            isChecked.set(target.checked);
            onChange?.(target.checked);
        };

        return (
            <label class={`flex items-center gap-2 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className || ''}`}>
                <input
                    type="checkbox"
                    checked={isChecked()}
                    onChange={handleChange}
                    disabled={disabled}
                    class={`
                        w-5 h-5 rounded border-2 border-border-primary
                        bg-surface cursor-pointer transition-colors
                        checked:bg-color-primary checked:border-color-primary
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

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
