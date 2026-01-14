import * as _minejs_signals from '@minejs/signals';
import { JSXElement } from '@minejs/jsx';

/**
 * Merge class names, filtering out falsy values
 */
declare function cn(...classes: (string | undefined | null | false | 0)[]): string;
/**
 * Conditionally apply classes based on variants
 */
declare function clsx(base: string, variants?: Record<string, string | boolean | undefined>): string;
/**
 * Create a portal container and mount content
 */
declare function createPortal(children: JSXElement, container?: HTMLElement): void;
/**
 * Portal component for rendering outside the component tree
 */
declare function Portal(props: {
    children: JSXElement;
    container?: HTMLElement;
}): null;
/**
 * Focus trap - keep focus within a container
 */
declare function useFocusTrap(containerRef: {
    current: HTMLElement | null;
}): void;
/**
 * Return focus to previously focused element
 */
declare function useReturnFocus(): void;
/**
 * Detect clicks outside an element
 */
declare function useOutsideClick(ref: {
    current: HTMLElement | null;
}, callback: (e: MouseEvent) => void): void;
/**
 * Detect escape key press
 */
declare function useEscapeKey(callback: () => void): void;
type Theme = 'light' | 'dark';
/**
 * Manage theme state and persistence
 */
declare function useTheme(): {
    theme: _minejs_signals.Signal<Theme>;
    setTheme: (value: Theme) => void;
    toggle: () => void;
    isDark: () => boolean;
    isLight: () => boolean;
};
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
/**
 * Get current breakpoint
 */
declare function useBreakpoint(): {
    current: _minejs_signals.Signal<Breakpoint>;
    isXs: () => boolean;
    isSm: () => boolean;
    isMd: () => boolean;
    isLg: () => boolean;
    isXl: () => boolean;
    is2Xl: () => boolean;
    isAbove: (bp: Breakpoint) => boolean;
    isBelow: (bp: Breakpoint) => boolean;
};
/**
 * Listen to media query changes
 */
declare function useMediaQuery(query: string): _minejs_signals.Signal<boolean>;
/**
 * Lock body scroll (for modals, drawers)
 */
declare function useScrollLock(locked?: boolean): void;
/**
 * Debounce a function
 */
declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void;
/**
 * Throttle a function
 */
declare function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void;
/**
 * Generate a random ID for accessibility
 */
declare function useId(prefix?: string): string;
/**
 * Copy text to clipboard
 */
declare function copyToClipboard(text: string): Promise<boolean>;
/**
 * Hook for clipboard operations
 */
declare function useClipboard(timeout?: number): {
    copied: _minejs_signals.Signal<boolean>;
    copy: (text: string) => Promise<boolean>;
};
/**
 * Get current text direction
 */
declare function useDirection(): {
    dir: _minejs_signals.Signal<"ltr" | "rtl">;
    isRtl: () => boolean;
    isLtr: () => boolean;
    toggle: () => void;
};

interface TextProps {
    as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'small' | 'strong' | 'em';
    size?: 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
    align?: 'start' | 'center' | 'end' | 'justify';
    color?: '1' | '2' | '3' | '4' | 'inverse' | 'brand' | 'success' | 'warning' | 'error';
    italic?: boolean;
    underline?: boolean;
    lineThrough?: boolean;
    truncate?: boolean;
    noWrap?: boolean;
    display?: 'block' | 'inline' | 'inline-block';
    children?: JSXElement | string | number;
    class?: string;
    id?: string;
    title?: string;
    'aria-label'?: string;
    role?: string;
}
declare function Text(props: TextProps): JSXElement;

interface ButtonProps {
    variant?: 'solid' | 'outline' | 'ghost' | 'link';
    color?: 'brand' | 'success' | 'warning' | 'error' | 'neutral';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    loading?: boolean;
    active?: boolean;
    fullWidth?: boolean;
    leftIcon?: JSXElement;
    rightIcon?: JSXElement;
    children?: JSXElement | string;
    onClick?: (e: MouseEvent) => void;
    onPointerDown?: (e: PointerEvent) => void;
    onPointerUp?: (e: PointerEvent) => void;
    type?: 'button' | 'submit' | 'reset';
    class?: string;
    id?: string;
    name?: string;
    value?: string;
    form?: string;
    'aria-label'?: string;
    'aria-describedby'?: string;
    'aria-pressed'?: boolean;
    'aria-expanded'?: boolean;
    role?: string;
}
interface ButtonGroupProps {
    children?: JSXElement | JSXElement[];
    attached?: boolean;
    spacing?: 0 | 1 | 2 | 3 | 4;
    class?: string;
}
interface IconButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'children'> {
    icon: JSXElement;
    'aria-label': string;
}
declare function Button(props: ButtonProps): JSXElement;
declare function IconButton(props: IconButtonProps): JSXElement;
declare function ButtonGroup(props: ButtonGroupProps): JSXElement;

interface InputProps {
    variant?: 'outline' | 'filled' | 'flushed';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    invalid?: boolean;
    fullWidth?: boolean;
    leftIcon?: JSXElement;
    rightIcon?: JSXElement;
    leftAddon?: JSXElement | string;
    rightAddon?: JSXElement | string;
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local';
    value?: string | number;
    defaultValue?: string | number;
    placeholder?: string;
    name?: string;
    id?: string;
    autocomplete?: string;
    pattern?: string;
    min?: number | string;
    max?: number | string;
    step?: number | string;
    maxLength?: number;
    minLength?: number;
    onInput?: (e: InputEvent) => void;
    onChange?: (e: Event) => void;
    onFocus?: (e: FocusEvent) => void;
    onBlur?: (e: FocusEvent) => void;
    onKeyDown?: (e: KeyboardEvent) => void;
    onKeyUp?: (e: KeyboardEvent) => void;
    class?: string;
    inputClass?: string;
    'aria-label'?: string;
    'aria-describedby'?: string;
    'aria-invalid'?: boolean;
    'aria-required'?: boolean;
}
interface InputGroupProps {
    children?: JSXElement | JSXElement[];
    class?: string;
}
interface TextareaProps extends Omit<InputProps, 'type' | 'leftIcon' | 'rightIcon' | 'leftAddon' | 'rightAddon'> {
    rows?: number;
    cols?: number;
    resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}
declare function Input(props: InputProps): JSXElement;
declare function InputGroup(props: InputGroupProps): JSXElement;
declare function Textarea(props: TextareaProps): JSXElement;

interface AvatarProps {
    src?: string;
    alt?: string;
    name?: string;
    fallback?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    rounded?: 'base' | 'full';
    badge?: JSXElement;
    badgePosition?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
    class?: string;
    onClick?: (e: MouseEvent) => void;
    'aria-label'?: string;
}
interface AvatarGroupProps {
    children?: JSXElement | JSXElement[];
    max?: number;
    spacing?: 'tight' | 'normal' | 'loose';
    size?: AvatarProps['size'];
    class?: string;
}
declare function Avatar(props: AvatarProps): JSXElement;
declare function AvatarGroup(props: AvatarGroupProps): JSXElement;

interface BadgeProps {
    variant?: 'solid' | 'outline' | 'subtle';
    color?: 'brand' | 'success' | 'warning' | 'error' | 'neutral';
    size?: 'sm' | 'md' | 'lg';
    rounded?: 'base' | 'full';
    children?: JSXElement | string | number;
    leftIcon?: JSXElement;
    rightIcon?: JSXElement;
    dot?: boolean;
    class?: string;
    'aria-label'?: string;
}
declare function Badge(props: BadgeProps): JSXElement;

interface SpinnerProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: 'current' | 'brand' | 'success' | 'warning' | 'error';
    thickness?: 'thin' | 'normal' | 'thick';
    speed?: 'slow' | 'normal' | 'fast';
    class?: string;
    'aria-label'?: string;
}
declare function Spinner(props: SpinnerProps): JSXElement;

interface SkeletonProps {
    width?: string;
    height?: string;
    variant?: 'text' | 'circular' | 'rectangular';
    animate?: boolean;
    class?: string;
}
declare function Skeleton(props: SkeletonProps): JSXElement;

interface ContainerProps {
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    px?: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12;
    py?: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12;
    centerContent?: boolean;
    children?: JSXElement | JSXElement[];
    class?: string;
    id?: string;
    as?: 'div' | 'main' | 'section' | 'article' | 'aside' | 'header' | 'footer';
}
declare function Container(props: ContainerProps): JSXElement;

interface StackProps {
    gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    reverse?: boolean;
    wrap?: boolean;
    children?: JSXElement | JSXElement[];
    class?: string;
    id?: string;
    as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'nav' | 'ul' | 'ol';
}
declare function Stack(props: StackProps): JSXElement;

interface GroupProps {
    gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    reverse?: boolean;
    wrap?: boolean;
    children?: JSXElement | JSXElement[];
    class?: string;
    id?: string;
    as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'nav' | 'ul' | 'ol';
}
declare function Group(props: GroupProps): JSXElement;

interface GridProps {
    cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    colsSm?: GridProps['cols'];
    colsMd?: GridProps['cols'];
    colsLg?: GridProps['cols'];
    colsXl?: GridProps['cols'];
    rows?: 1 | 2 | 3 | 4 | 5 | 6;
    gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
    gapX?: GridProps['gap'];
    gapY?: GridProps['gap'];
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    flow?: 'row' | 'col' | 'dense' | 'row-dense' | 'col-dense';
    children?: JSXElement | JSXElement[];
    class?: string;
    id?: string;
    as?: 'div' | 'section' | 'article' | 'ul' | 'ol';
}
declare function Grid(props: GridProps): JSXElement;

interface SpacerProps {
    size?: 1 | 2 | 3 | 4 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
    axis?: 'x' | 'y' | 'both';
    flex?: boolean;
    class?: string;
}
declare function Spacer(props: SpacerProps): JSXElement;

interface DividerProps {
    orientation?: 'horizontal' | 'vertical';
    variant?: 'solid' | 'dashed' | 'dotted';
    thickness?: 'thin' | 'medium' | 'thick';
    color?: '1' | '2' | '3' | 'brand' | 'current';
    label?: string | JSXElement;
    labelPosition?: 'start' | 'center' | 'end';
    spacing?: 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12;
    class?: string;
    role?: string;
    'aria-orientation'?: 'horizontal' | 'vertical';
}
declare function Divider(props: DividerProps): JSXElement;

interface CenterProps {
    inline?: boolean;
    children?: JSXElement | JSXElement[];
    class?: string;
    id?: string;
    as?: 'div' | 'section' | 'article';
}
declare function Center(props: CenterProps): JSXElement;

interface BoxProps {
    children?: JSXElement | JSXElement[];
    class?: string;
    id?: string;
    as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'main' | 'nav' | 'span';
    onClick?: (e: MouseEvent) => void;
    role?: string;
    'aria-label'?: string;
}
declare function Box(props: BoxProps): JSXElement;

interface AlertProps {
    status?: 'info' | 'success' | 'warning' | 'error';
    variant?: 'solid' | 'subtle' | 'left-accent' | 'top-accent';
    title?: string | JSXElement;
    description?: string | JSXElement;
    children?: JSXElement | string;
    icon?: JSXElement;
    showIcon?: boolean;
    closable?: boolean;
    onClose?: () => void;
    actions?: JSXElement;
    class?: string;
    role?: 'alert' | 'status';
    'aria-live'?: 'polite' | 'assertive';
}
declare function Alert(props: AlertProps): JSXElement | null;

interface ToastProps {
    status?: 'info' | 'success' | 'warning' | 'error';
    title?: string | JSXElement;
    description?: string | JSXElement;
    duration?: number;
    closable?: boolean;
    icon?: JSXElement;
    action?: JSXElement;
    onClose?: () => void;
    id?: string;
    class?: string;
}
declare function Toast(props: ToastProps): JSXElement | null;

interface ProgressProps {
    value?: number;
    max?: number;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    color?: 'brand' | 'success' | 'warning' | 'error';
    variant?: 'linear' | 'circular';
    label?: string | JSXElement;
    showValue?: boolean;
    indeterminate?: boolean;
    striped?: boolean;
    animated?: boolean;
    class?: string;
    'aria-label'?: string;
}
declare function Progress(props: ProgressProps): JSXElement;

interface NotificationProps extends Omit<AlertProps, 'variant'> {
    position?: 'top' | 'bottom' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
    duration?: number;
}
declare function Notification(props: NotificationProps): JSXElement | null;

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    title?: string | JSXElement;
    description?: string | JSXElement;
    children?: JSXElement | string;
    actions?: JSXElement;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    backdrop?: boolean;
    closeOnBackdrop?: boolean;
    class?: string;
    role?: 'dialog' | 'alertdialog';
    'aria-modal'?: boolean;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
}
declare function Modal(props: ModalProps): JSXElement | null;

interface DrawerProps {
    isOpen?: boolean;
    onClose?: () => void;
    title?: string | JSXElement;
    children?: JSXElement | string;
    position?: 'left' | 'right' | 'top' | 'bottom';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    backdrop?: boolean;
    closeOnBackdrop?: boolean;
    class?: string;
    role?: 'dialog' | 'navigation';
    'aria-modal'?: boolean;
    'aria-labelledby'?: string;
}
declare function Drawer(props: DrawerProps): JSXElement | null;

interface PopoverProps {
    trigger?: JSXElement;
    children?: JSXElement | string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    closeOnClickOutside?: boolean;
    closeOnEscape?: boolean;
    class?: string;
    role?: 'dialog' | 'tooltip';
    'aria-label'?: string;
}
declare function Popover(props: PopoverProps): JSXElement;

interface TooltipProps {
    content?: string | JSXElement;
    children?: JSXElement;
    position?: 'top' | 'bottom' | 'left' | 'right';
    delayShow?: number;
    delayHide?: number;
    class?: string;
    contentClass?: string;
    role?: 'tooltip';
    'aria-label'?: string;
}
declare function Tooltip(props: TooltipProps): JSXElement;

interface DropdownMenuItemProps {
    label: string | JSXElement;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'default' | 'danger';
    icon?: JSXElement;
    class?: string;
}
interface DropdownMenuProps {
    trigger?: JSXElement;
    items: DropdownMenuItemProps[];
    position?: 'top' | 'bottom';
    isOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    closeOnSelect?: boolean;
    closeOnClickOutside?: boolean;
    class?: string;
    role?: 'menu';
}
declare function DropdownMenu(props: DropdownMenuProps): JSXElement;

interface FormProps {
    children?: JSXElement | JSXElement[];
    onSubmit?: (e: SubmitEvent) => void;
    onChange?: (e: Event) => void;
    class?: string;
    id?: string;
    method?: 'GET' | 'POST';
    action?: string;
    noValidate?: boolean;
}
interface FormFieldProps {
    label?: string | JSXElement;
    error?: string;
    required?: boolean;
    hint?: string;
    class?: string;
    children?: JSXElement;
}
interface FormLabelProps {
    for?: string;
    required?: boolean;
    children?: JSXElement | string;
    class?: string;
}
interface FormErrorProps {
    children?: JSXElement | string;
    class?: string;
}
interface FormHintProps {
    children?: JSXElement | string;
    class?: string;
}
declare function Form(props: FormProps): JSXElement;
declare function FormField(props: FormFieldProps): JSXElement;
declare function FormLabel(props: FormLabelProps): JSXElement;
declare function FormError(props: FormErrorProps): JSXElement;
declare function FormHint(props: FormHintProps): JSXElement;

interface CheckboxProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string | JSXElement;
    disabled?: boolean;
    class?: string;
    id?: string;
    name?: string;
    value?: string;
    'aria-label'?: string;
    'aria-describedby'?: string;
}
declare function Checkbox(props: CheckboxProps): JSXElement;

interface RadioProps {
    value: string;
    checked?: boolean;
    onChange?: (value: string) => void;
    label?: string | JSXElement;
    disabled?: boolean;
    class?: string;
    id?: string;
    name?: string;
    'aria-label'?: string;
    'aria-describedby'?: string;
}
interface RadioGroupProps {
    value?: string;
    onChange?: (value: string) => void;
    options: {
        value: string;
        label: string | JSXElement;
        disabled?: boolean;
    }[];
    direction?: 'vertical' | 'horizontal';
    disabled?: boolean;
    class?: string;
    name?: string;
}
declare function Radio(props: RadioProps): JSXElement;
declare function RadioGroup(props: RadioGroupProps): JSXElement;

interface SwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string | JSXElement;
    disabled?: boolean;
    class?: string;
    id?: string;
    name?: string;
    'aria-label'?: string;
    'aria-describedby'?: string;
}
declare function Switch(props: SwitchProps): JSXElement;

interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface SelectProps {
    value?: string;
    onChange?: (value: string) => void;
    options: SelectOption[];
    placeholder?: string;
    disabled?: boolean;
    class?: string;
    id?: string;
    name?: string;
    'aria-label'?: string;
    'aria-describedby'?: string;
}
declare function Select(props: SelectProps): JSXElement;

interface SliderProps {
    value?: number;
    onChange?: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    label?: string | JSXElement;
    showValue?: boolean;
    disabled?: boolean;
    class?: string;
    id?: string;
    name?: string;
    'aria-label'?: string;
    'aria-describedby'?: string;
}
declare function Slider(props: SliderProps): JSXElement;

interface NavItem {
    label: string | JSXElement;
    href: string;
    active?: boolean;
    disabled?: boolean;
    icon?: JSXElement;
}
interface NavProps {
    items: NavItem[];
    orientation?: 'horizontal' | 'vertical';
    class?: string;
    role?: 'navigation' | 'menubar';
    'aria-label'?: string;
}
declare function Nav(props: NavProps): JSXElement;

interface TabItem {
    id: string;
    label: string | JSXElement;
    content?: JSXElement | string;
    disabled?: boolean;
    icon?: JSXElement;
}
interface TabsProps {
    tabs: TabItem[];
    defaultTab?: string;
    activeTab?: string;
    onTabChange?: (tabId: string) => void;
    variant?: 'line' | 'solid' | 'outline';
    class?: string;
    tabsClass?: string;
    contentClass?: string;
    role?: 'tablist';
}
declare function Tabs(props: TabsProps): JSXElement;

interface BreadcrumbItem {
    label: string | JSXElement;
    href?: string;
    active?: boolean;
    icon?: JSXElement;
}
interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: JSXElement | string;
    class?: string;
    itemClass?: string;
    role?: 'navigation';
}
declare function Breadcrumb(props: BreadcrumbProps): JSXElement;

interface PaginationProps {
    current: number;
    total: number;
    onChange: (page: number) => void;
    siblingCount?: number;
    showFirstLast?: boolean;
    class?: string;
    buttonClass?: string;
    activeButtonClass?: string;
    role?: 'navigation';
}
declare function Pagination(props: PaginationProps): JSXElement;

interface CardProps {
    children: JSXElement;
    class?: string;
    variant?: 'elevated' | 'outlined' | 'filled';
    padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    hover?: boolean;
    clickable?: boolean;
    onClick?: () => void;
}
interface CardHeaderProps {
    children: JSXElement;
    class?: string;
    divider?: boolean;
}
interface CardBodyProps {
    children: JSXElement;
    class?: string;
}
interface CardFooterProps {
    children: JSXElement;
    class?: string;
    divider?: boolean;
}
declare function Card(props: CardProps): JSXElement;
declare function CardHeader(props: CardHeaderProps): JSXElement;
declare function CardBody(props: CardBodyProps): JSXElement;
declare function CardFooter(props: CardFooterProps): JSXElement;

interface TableColumn<T = any> {
    key: keyof T;
    label: string;
    width?: string | number;
    align?: 'left' | 'center' | 'right';
    sortable?: boolean;
    render?: (value: any, row: T, index: number) => JSXElement | string;
}
interface TableProps<T = any> {
    data: T[];
    columns: TableColumn<T>[];
    striped?: boolean;
    bordered?: boolean;
    hoverable?: boolean;
    compact?: boolean;
    sortBy?: keyof T;
    sortOrder?: 'asc' | 'desc';
    onSort?: (column: keyof T, order: 'asc' | 'desc') => void;
    class?: string;
    headerClass?: string;
    rowClass?: string;
    cellClass?: string;
}
interface TableHeaderProps<T = any> {
    columns: TableColumn<T>[];
    sortBy?: keyof T;
    sortOrder?: 'asc' | 'desc';
    onSort?: (column: keyof T, order: 'asc' | 'desc') => void;
    headerClass?: string;
    cellClass?: string;
}
interface TableBodyProps<T = any> {
    data: T[];
    columns: TableColumn<T>[];
    striped?: boolean;
    hoverable?: boolean;
    rowClass?: string;
    cellClass?: string;
}
declare function Table<T = any>(props: TableProps<T>): JSXElement;
declare function TableHeader<T = any>(props: TableHeaderProps<T>): JSXElement;
declare function TableBody<T = any>(props: TableBodyProps<T>): JSXElement;

interface ListItem<T = any> {
    id?: string | number;
    label?: string | JSXElement;
    description?: string | JSXElement;
    icon?: JSXElement;
    avatar?: JSXElement;
    trailing?: JSXElement;
    disabled?: boolean;
    onClick?: () => void;
    data?: T;
}
interface ListProps<T = any> {
    items: ListItem<T>[];
    variant?: 'simple' | 'divider' | 'spaced';
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    itemClass?: string;
    selectable?: boolean;
    onItemClick?: (item: ListItem<T>, index: number) => void;
}
declare function List<T = any>(props: ListProps<T>): JSXElement;

interface TagProps {
    children: JSXElement | string;
    icon?: JSXElement;
    variant?: 'solid' | 'outline' | 'subtle';
    color?: 'primary' | 'success' | 'warning' | 'error';
    size?: 'sm' | 'md' | 'lg';
    closeable?: boolean;
    onClose?: () => void;
    disabled?: boolean;
    class?: string;
}
declare function Tag(props: TagProps): JSXElement;

interface StatProps {
    value: string | number | JSXElement;
    label: string | JSXElement;
    description?: string | JSXElement;
    icon?: JSXElement;
    class?: string;
    variant?: 'card' | 'simple' | 'bordered';
    size?: 'sm' | 'md' | 'lg';
    change?: number;
    changeLabel?: string;
    trend?: 'up' | 'down' | 'neutral';
    color?: 'primary' | 'success' | 'warning' | 'error';
}
declare function Stat(props: StatProps): JSXElement;

export { Alert, type AlertProps, Avatar, AvatarGroup, type AvatarGroupProps, type AvatarProps, Badge, type BadgeProps, Box, type BoxProps, Breadcrumb, type BreadcrumbItem, type BreadcrumbProps, type Breakpoint, Button, ButtonGroup, type ButtonGroupProps, type ButtonProps, Card, CardBody, type CardBodyProps, CardFooter, type CardFooterProps, CardHeader, type CardHeaderProps, type CardProps, Center, type CenterProps, Checkbox, type CheckboxProps, Container, type ContainerProps, Divider, type DividerProps, Drawer, type DrawerProps, DropdownMenu, type DropdownMenuItemProps, type DropdownMenuProps, Form, FormError, type FormErrorProps, FormField, type FormFieldProps, FormHint, type FormHintProps, FormLabel, type FormLabelProps, type FormProps, Grid, type GridProps, Group, type GroupProps, IconButton, type IconButtonProps, Input, InputGroup, type InputGroupProps, type InputProps, List, type ListItem, type ListProps, Modal, type ModalProps, Nav, type NavItem, type NavProps, Notification, type NotificationProps, Pagination, type PaginationProps, Popover, type PopoverProps, Portal, Progress, type ProgressProps, Radio, RadioGroup, type RadioGroupProps, type RadioProps, Select, type SelectOption, type SelectProps, Skeleton, type SkeletonProps, Slider, type SliderProps, Spacer, type SpacerProps, Spinner, type SpinnerProps, Stack, type StackProps, Stat, type StatProps, Switch, type SwitchProps, type TabItem, Table, TableBody, type TableBodyProps, type TableColumn, TableHeader, type TableHeaderProps, type TableProps, Tabs, type TabsProps, Tag, type TagProps, Text, type TextProps, Textarea, type TextareaProps, type Theme, Toast, type ToastProps, Tooltip, type TooltipProps, clsx, cn, copyToClipboard, createPortal, debounce, throttle, useBreakpoint, useClipboard, useDirection, useEscapeKey, useFocusTrap, useId, useMediaQuery, useOutsideClick, useReturnFocus, useScrollLock, useTheme };
