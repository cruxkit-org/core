// src/kit/forms/form.tsx
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import type { JSXElement } from '@minejs/jsx';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface FormProps {
        // Content
        children?: JSXElement | JSXElement[];

        // Events
        onSubmit?: (e: SubmitEvent) => void;
        onChange?: (e: Event) => void;

        // Styling
        class?: string;

        // HTML attributes
        id?: string;
        method?: 'GET' | 'POST';
        action?: string;
        noValidate?: boolean;
    }

    export interface FormFieldProps {
        label?: string | JSXElement;
        error?: string;
        required?: boolean;
        hint?: string;
        class?: string;
        children?: JSXElement;
    }

    export interface FormLabelProps {
        for?: string;
        required?: boolean;
        children?: JSXElement | string;
        class?: string;
    }

    export interface FormErrorProps {
        children?: JSXElement | string;
        class?: string;
    }

    export interface FormHintProps {
        children?: JSXElement | string;
        class?: string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export function Form(props: FormProps): JSXElement {
        const {
            children,
            onSubmit,
            onChange,
            class: className,
            noValidate = false,
            ...restProps
        } = props;

        return (
            <form
                class={className}
                onSubmit={onSubmit}
                onChange={onChange}
                noValidate={noValidate}
                {...restProps}
            >
                {children}
            </form>
        );
    }

    export function FormField(props: FormFieldProps): JSXElement {
        const {
            label,
            error,
            required = false,
            hint,
            class: className,
            children
        } = props;

        return (
            <div class={`flex flex-col gap-2 ${className || ''}`}>
                {label && (
                    <label class="text-sm font-semibold text-primary">
                        {label}
                        {required && <span class="text-color-error ml-1">*</span>}
                    </label>
                )}

                <div>
                    {children}
                </div>

                {error && (
                    <div class="text-sm text-color-error">
                        {error}
                    </div>
                )}

                {hint && !error && (
                    <div class="text-sm text-primary/60">
                        {hint}
                    </div>
                )}
            </div>
        );
    }

    export function FormLabel(props: FormLabelProps): JSXElement {
        const {
            for: htmlFor,
            required = false,
            children,
            class: className
        } = props;

        return (
            <label
                for={htmlFor}
                class={`text-sm font-semibold text-primary ${className || ''}`}
            >
                {children}
                {required && <span class="text-color-error ml-1">*</span>}
            </label>
        );
    }

    export function FormError(props: FormErrorProps): JSXElement {
        const {
            children,
            class: className
        } = props;

        return (
            <div class={`text-sm text-color-error ${className || ''}`}>
                {children}
            </div>
        );
    }

    export function FormHint(props: FormHintProps): JSXElement {
        const {
            children,
            class: className
        } = props;

        return (
            <div class={`text-sm text-primary/60 ${className || ''}`}>
                {children}
            </div>
        );
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
