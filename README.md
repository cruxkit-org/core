<!-- ╔══════════════════════════════ BEG ══════════════════════════════╗ -->

<br>
<div align="center">
    <p>
        <img src="./assets/img/logo.png" alt="logo" style="" height="60" />
    </p>
</div>

<div align="center">
    <img src="https://img.shields.io/badge/v-0.0.2-black"/>
    <a href="https://github.com/cruxkit-org"><img src="https://img.shields.io/badge/🔥-@cruxkit-black"/></a>
    <br>
    <img src="https://img.shields.io/github/issues/cruxkit-org/core?style=flat" alt="Github Repo Issues" />
    <img src="https://img.shields.io/github/stars/cruxkit-org/core?style=social" alt="GitHub Repo stars" />
</div>
<br>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ DOC ══════════════════════════════╗ -->

- ## Overview 👀

    - #### Why?
        > **@cruxkit/core** is a complete component library built with **pure [@minejs/jsx](https://github.com/minejs-org/jsx)** and styled with **[@mineui](https://github.com/mineui-org)** semantic tokens.
        >
        > It eliminates framework lock-in while providing production-ready, accessible, and fully-typed UI components.
        >
        > No React. No overhead. Pure logic. Every UI pattern you've built 1000 times—this is the last time.

    - #### When?
        > Use **@cruxkit/core** when you need:
        >
        > • **Modular components** without framework dependencies
        >
        > • **Full TypeScript support** with IntelliSense
        >
        > • **Accessible UI** with ARIA attributes and keyboard navigation
        >
        > • **Theme flexibility** with [@mineui](https://github.com/mineui-org) semantic CSS variables
        >
        > • **Reactive state** powered by [@minejs/signals](https://github.com/minejs-org/signals)
        >
        > • **Fast performance** with zero overhead abstractions
        >
        > and when using [@cruxjs/app](https://github.com/cruxjs-org/app).


    <br>
    <br>

- ## Quick Start 🔥

    > install [`hmm`](https://github.com/minejs-org/hmm) first.

    ```bash
    # in your terminal
    hmm i @cruxkit/core @minejs/jsx @minejs/signals
    ```

    ```ts
    // In your (.tsx) files
    import { ... } from '@cruxkit/core';
    ```

    <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> </div>
    <br>

    - ### Example

        ```typescript
        import { Stack, Group, Grid, Container } from '@cruxkit/core';

        // Vertical layout
        <Stack gap={4}>
          <div>Item 1</div>
          <div>Item 2</div>
        </Stack>

        // Horizontal layout
        <Group gap={4} justify="between">
          <div>Left</div>
          <div>Right</div>
        </Group>

        // Responsive grid
        <Grid cols={1} colsMd={2} colsLg={3} gap={6}>
          {items.map(item => <Card key={item.id}>{item.name}</Card>)}
        </Grid>

        // Max-width container
        <Container maxWidth="lg" class="mx-auto">
          <h1>Centered content</h1>
        </Container>
        ```

    <br>
    <br>

- ## Documentation 📑

    - ### API ⛓️

        | Components                                                  | Phase | Section                       |
        | ----------------------------------------------------------- | ----- | ----------------------------- |
        | Button, Input, Text, Badge, Avatar, Spinner, Skeleton       | 1     | [Primitives](#primitives)     |
        | Stack, Group, Grid, Container, Spacer, Divider, Center, Box | 2     | [Layout](#layout)             |
        | Alert, Toast, Progress, Notification                        | 3     | [Feedback](#feedback)         |
        | Modal, Drawer, Popover, Tooltip, DropdownMenu               | 4     | [Overlays](#overlays)         |
        | Form, Checkbox, Radio, Switch, Select, Slider, Textarea     | 5     | [Forms](#forms)               |
        | Nav, Tabs, Breadcrumb, Pagination                           | 6     | [Navigation](#navigation)     |
        | Card, Table, List, Tag, Stat                                | 7     | [Data Display](#data-display) |

        - #### Primitives

            **Button Component**
            ```typescript
            import { Button } from '@cruxkit/core';

            interface ButtonProps {
                variant?            : 'solid' | 'outline' | 'ghost' | 'link';
                color?              : 'brand' | 'success' | 'warning' | 'error' | 'neutral';
                size?               : 'sm' | 'md' | 'lg';
                disabled?           : boolean;
                loading?            : boolean;
                active?             : boolean;
                fullWidth?          : boolean;
                leftIcon?           : JSXElement;
                rightIcon?          : JSXElement;
                onClick?            : (e: MouseEvent) => void;
                type?               : 'button' | 'submit' | 'reset';
                children?           : JSXElement | string;
                class?              : string;
            }

            <Button variant="solid" color="brand">Click me</Button>
            ```

            **Text Component**
            ```typescript
            import { Text } from '@cruxkit/core';

            interface TextProps {
                as?                 : 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'label' | 'small';
                size?               : 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
                weight?             : 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
                color?              : '1' | '2' | '3' | '4' | 'inverse' | 'brand' | 'success' | 'warning' | 'error';
                italic?             : boolean;
                underline?          : boolean;
                truncate?           : boolean;
                align?              : 'start' | 'center' | 'end' | 'justify';
                children?           : JSXElement | string;
                class?              : string;
            }

            <Text as="h1" size="4xl" weight="bold">Heading</Text>
            ```

            **Badge Component**
            ```typescript
            import { Badge } from '@cruxkit/core';

            interface BadgeProps {
                variant?            : 'solid' | 'outline' | 'subtle';
                color?              : 'brand' | 'success' | 'warning' | 'error' | 'neutral';
                size?               : 'sm' | 'md' | 'lg';
                rounded?            : 'base' | 'full';
                dot?                : boolean;
                leftIcon?           : JSXElement;
                rightIcon?          : JSXElement;
                children?           : JSXElement | string | number;
                class?              : string;
            }

            <Badge variant="solid" color="success">Active</Badge>
            ```

            **Avatar Component**
            ```typescript
            import { Avatar, AvatarGroup } from '@cruxkit/core';

            interface AvatarProps {
                src?                : string;
                alt?                : string;
                name?               : string;
                size?               : 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
                rounded?            : 'base' | 'full';
                badge?              : JSXElement;
                badgePosition?      : 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
                onClick?            : (e: MouseEvent) => void;
                class?              : string;
            }

            <Avatar src="/user.jpg" name="John Doe" size="md" />
            ```

            **Spinner Component**
            ```typescript
            import { Spinner } from '@cruxkit/core';

            interface SpinnerProps {
                size?               : 'xs' | 'sm' | 'md' | 'lg' | 'xl';
                color?              : 'current' | 'brand' | 'success' | 'warning' | 'error';
                thickness?          : 'thin' | 'normal' | 'thick';
                speed?              : 'slow' | 'normal' | 'fast';
                class?              : string;
            }

            <Spinner size="md" color="brand" />
            ```

            **Skeleton Component**
            ```typescript
            import { Skeleton } from '@cruxkit/core';

            interface SkeletonProps {
                width?              : string;
                height?             : string;
                variant?            : 'text' | 'circular' | 'rectangular';
                animate?            : boolean;
                class?              : string;
            }

            <Skeleton variant="text" width="100%" height="20px" />
            ```

            **Input Component**
            ```typescript
            import { Input } from '@cruxkit/core';

            interface InputProps {
                variant?            : 'outline' | 'filled' | 'flushed';
                size?               : 'sm' | 'md' | 'lg';
                disabled?           : boolean;
                required?           : boolean;
                invalid?            : boolean;
                fullWidth?          : boolean;
                leftIcon?           : JSXElement;
                rightIcon?          : JSXElement;
                leftAddon?          : JSXElement | string;
                rightAddon?         : JSXElement | string;
                type?               : 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
                placeholder?        : string;
                value?              : string | number;
                onChange?           : (e: Event) => void;
                onFocus?            : (e: FocusEvent) => void;
                onBlur?             : (e: FocusEvent) => void;
                class?              : string;
            }

            <Input type="email" placeholder="your@email.com" required />
            ```

        - #### Layout

            **Stack Component (Vertical Layout)**
            ```typescript
            import { Stack } from '@cruxkit/core';

            interface StackProps {
                gap?                : 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
                align?              : 'start' | 'center' | 'end' | 'stretch' | 'baseline';
                justify?            : 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
                reverse?            : boolean;
                wrap?               : boolean;
                as?                 : 'div' | 'section' | 'article' | 'header' | 'footer' | 'nav';
                children?           : JSXElement | JSXElement[];
                class?              : string;
            }

            <Stack gap={4} align="center">
                <div>Item 1</div>
                <div>Item 2</div>
            </Stack>
            ```

            **Group Component (Horizontal Layout)**
            ```typescript
            import { Group } from '@cruxkit/core';

            interface GroupProps {
                gap?                : 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
                align?              : 'start' | 'center' | 'end' | 'stretch' | 'baseline';
                justify?            : 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
                reverse?            : boolean;
                wrap?               : boolean;
                children?           : JSXElement | JSXElement[];
                class?              : string;
            }

            <Group gap={4} justify="between">
                <div>Left</div>
                <div>Right</div>
            </Group>
            ```

            **Grid Component**
            ```typescript
            import { Grid } from '@cruxkit/core';

            interface GridProps {
                cols?               : 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
                colsSm?             : GridProps['cols'];
                colsMd?             : GridProps['cols'];
                colsLg?             : GridProps['cols'];
                colsXl?             : GridProps['cols'];
                gap?                : 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
                gapX?               : GridProps['gap'];
                gapY?               : GridProps['gap'];
                align?              : 'start' | 'center' | 'end' | 'stretch';
                justify?            : 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
                children?           : JSXElement | JSXElement[];
                class?              : string;
            }

            <Grid cols={1} colsMd={2} colsLg={3} gap={6}>
                {items.map(item => <Card key={item.id}>{item.name}</Card>)}
            </Grid>
            ```

            **Container Component**
            ```typescript
            import { Container } from '@cruxkit/core';

            interface ContainerProps {
                maxWidth?           : 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
                px?                 : 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12;
                py?                 : 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12;
                centerContent?      : boolean;
                as?                 : 'div' | 'main' | 'section' | 'article';
                children?           : JSXElement | JSXElement[];
                class?              : string;
            }

            <Container maxWidth="lg">
                <h1>Centered content</h1>
            </Container>
            ```

            **Divider Component**
            ```typescript
            import { Divider } from '@cruxkit/core';

            interface DividerProps {
                orientation?        : 'horizontal' | 'vertical';
                variant?            : 'solid' | 'dashed' | 'dotted';
                thickness?          : 'thin' | 'medium' | 'thick';
                color?              : '1' | '2' | '3' | 'brand' | 'current';
                label?              : string | JSXElement;
                labelPosition?      : 'start' | 'center' | 'end';
                spacing?            : 0 | 1 | 2 | 3 | 4 | 6 | 8 | 12;
                class?              : string;
            }

            <Divider label="OR" labelPosition="center" />
            ```

            **Center Component**
            ```typescript
            import { Center } from '@cruxkit/core';

            interface CenterProps {
                inline?             : boolean;
                children?           : JSXElement | JSXElement[];
                class?              : string;
            }

            <Center class="h-screen">
                <Spinner />
            </Center>
            ```

            **Box Component**
            ```typescript
            import { Box } from '@cruxkit/core';

            interface BoxProps {
                as?                 : 'div' | 'section' | 'article' | 'aside';
                children?           : JSXElement | JSXElement[];
                class?              : string;
            }

            <Box as="section" class="p-4 bg-surface rounded-lg">
                Content here
            </Box>
            ```

        - #### Feedback

            **Alert Component**
            ```typescript
            import { Alert } from '@cruxkit/core';

            interface AlertProps {
                status?             : 'info' | 'success' | 'warning' | 'error';
                variant?            : 'solid' | 'subtle' | 'left-accent' | 'top-accent';
                title?              : string | JSXElement;
                description?        : string | JSXElement;
                icon?               : JSXElement;
                showIcon?           : boolean;
                closable?           : boolean;
                onClose?            : () => void;
                actions?            : JSXElement;
                children?           : JSXElement | string;
                class?              : string;
            }

            <Alert status="success" variant="solid" title="Success!">
                Your changes have been saved.
            </Alert>
            ```

            **Toast Component**
            ```typescript
            import { Toast } from '@cruxkit/core';

            interface ToastProps {
                status?             : 'info' | 'success' | 'warning' | 'error';
                title?              : string | JSXElement;
                description?        : string | JSXElement;
                duration?           : number;
                closable?           : boolean;
                icon?               : JSXElement;
                action?             : JSXElement;
                onClose?            : () => void;
                class?              : string;
            }

            <Toast status="success" title="Saved!" duration={5000} />
            ```

            **Progress Component**
            ```typescript
            import { Progress } from '@cruxkit/core';

            interface ProgressProps {
                value?              : number;
                max?                : number;
                size?               : 'xs' | 'sm' | 'md' | 'lg';
                color?              : 'brand' | 'success' | 'warning' | 'error';
                variant?            : 'linear' | 'circular';
                label?              : string | JSXElement;
                showValue?          : boolean;
                indeterminate?      : boolean;
                striped?            : boolean;
                animated?           : boolean;
                class?              : string;
            }

            <Progress value={75} showValue />
            ```

            **Notification Component**
            ```typescript
            import { Notification } from '@cruxkit/core';

            interface NotificationProps {
                status?             : 'info' | 'success' | 'warning' | 'error';
                title?              : string | JSXElement;
                description?        : string | JSXElement;
                duration?           : number;
                position?           : 'top' | 'bottom' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
                closable?           : boolean;
                onClose?            : () => void;
                class?              : string;
            }

            <Notification status="info" title="New message" position="top-end" />
            ```

        - #### Overlays

            **Modal Component**
            ```typescript
            import { Modal } from '@cruxkit/core';

            interface ModalProps {
                isOpen?             : boolean;
                onClose?            : () => void;
                title?              : string | JSXElement;
                description?        : string | JSXElement;
                size?               : 'sm' | 'md' | 'lg' | 'xl' | 'full';
                backdrop?           : boolean;
                closeOnBackdrop?    : boolean;
                actions?            : JSXElement;
                children?           : JSXElement | string;
                class?              : string;
            }

            <Modal isOpen={isOpen()} onClose={() => setIsOpen(false)} title="Confirm">
                Are you sure?
            </Modal>
            ```

            **Drawer Component**
            ```typescript
            import { Drawer } from '@cruxkit/core';

            interface DrawerProps {
                isOpen?             : boolean;
                onClose?            : () => void;
                title?              : string | JSXElement;
                position?           : 'left' | 'right' | 'top' | 'bottom';
                size?               : 'sm' | 'md' | 'lg' | 'xl';
                backdrop?           : boolean;
                closeOnBackdrop?    : boolean;
                children?           : JSXElement | string;
                class?              : string;
            }

            <Drawer isOpen={isOpen()} position="left" title="Menu">
                Drawer content
            </Drawer>
            ```

            **Popover Component**
            ```typescript
            import { Popover } from '@cruxkit/core';

            interface PopoverProps {
                trigger?            : JSXElement;
                position?           : 'top' | 'bottom' | 'left' | 'right';
                isOpen?             : boolean;
                onOpenChange?       : (open: boolean) => void;
                closeOnClickOutside?: boolean;
                closeOnEscape?      : boolean;
                children?           : JSXElement | string;
                class?              : string;
            }

            <Popover trigger={<Button>Open</Button>}>
                Popover content
            </Popover>
            ```

            **Tooltip Component**
            ```typescript
            import { Tooltip } from '@cruxkit/core';

            interface TooltipProps {
                content?            : string | JSXElement;
                position?           : 'top' | 'bottom' | 'left' | 'right';
                delayShow?          : number;
                delayHide?          : number;
                children?           : JSXElement;
                class?              : string;
            }

            <Tooltip content="Help text" position="top">
                <Button>Hover me</Button>
            </Tooltip>
            ```

            **DropdownMenu Component**
            ```typescript
            import { DropdownMenu } from '@cruxkit/core';

            interface DropdownMenuProps {
                trigger?            : JSXElement;
                items?              : any[];
                onItemClick?        : (item: any) => void;
                position?           : 'top' | 'bottom';
                closeOnClick?       : boolean;
                class?              : string;
            }

            <DropdownMenu trigger={<Button>Menu</Button>} items={menuItems} />
            ```

        - #### Forms

            **Form Component**
            ```typescript
            import { Form, FormField, FormLabel, FormError, FormHint } from '@cruxkit/core';

            interface FormProps {
                children?           : JSXElement | JSXElement[];
                onSubmit?           : (e: SubmitEvent) => void;
                onChange?           : (e: Event) => void;
                method?             : 'GET' | 'POST';
                action?             : string;
                noValidate?         : boolean;
                class?              : string;
            }

            <Form onSubmit={handleSubmit}>
                <FormField>
                    <FormLabel for="email" required>Email</FormLabel>
                    <Input id="email" type="email" required />
                    <FormHint>We'll never share your email.</FormHint>
                    <FormError>Email is invalid</FormError>
                </FormField>
                <Button type="submit">Submit</Button>
            </Form>
            ```

            **Checkbox Component**
            ```typescript
            import { Checkbox } from '@cruxkit/core';

            interface CheckboxProps {
                checked?            : boolean;
                onChange?           : (checked: boolean) => void;
                label?              : string | JSXElement;
                disabled?           : boolean;
                name?               : string;
                value?              : string;
                class?              : string;
            }

            <Checkbox label="I agree" onChange={(checked) => console.log(checked)} />
            ```

            **Radio Component**
            ```typescript
            import { Radio, RadioGroup } from '@cruxkit/core';

            interface RadioProps {
                value               : string;
                checked?            : boolean;
                onChange?           : (value: string) => void;
                label?              : string | JSXElement;
                disabled?           : boolean;
                class?              : string;
            }

            interface RadioGroupProps {
                value?              : string;
                onChange?           : (value: string) => void;
                options             : { value: string; label: string }[];
                orientation?        : 'vertical' | 'horizontal';
                class?              : string;
            }

            <RadioGroup
                options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' }
                ]}
                onChange={(value) => console.log(value)}
            />
            ```

            **Switch Component**
            ```typescript
            import { Switch } from '@cruxkit/core';

            interface SwitchProps {
                checked?            : boolean;
                onChange?           : (checked: boolean) => void;
                label?              : string | JSXElement;
                disabled?           : boolean;
                name?               : string;
                class?              : string;
            }

            <Switch label="Enable notifications" onChange={handleToggle} />
            ```

            **Select Component**
            ```typescript
            import { Select } from '@cruxkit/core';

            interface SelectOption {
                value               : string;
                label               : string;
                disabled?           : boolean;
            }

            interface SelectProps {
                options             : SelectOption[];
                value?              : string;
                onChange?           : (value: string) => void;
                placeholder?        : string;
                disabled?           : boolean;
                name?               : string;
                class?              : string;
            }

            <Select
                options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' }
                ]}
                onChange={handleChange}
            />
            ```

            **Slider Component**
            ```typescript
            import { Slider } from '@cruxkit/core';

            interface SliderProps {
                value?              : number;
                onChange?           : (value: number) => void;
                min?                : number;
                max?                : number;
                step?               : number;
                label?              : string | JSXElement;
                showValue?          : boolean;
                disabled?           : boolean;
                class?              : string;
            }

            <Slider min={0} max={100} value={50} onChange={handleChange} showValue />
            ```

            **Textarea Component**
            ```typescript
            import { Textarea } from '@cruxkit/core';

            interface TextareaProps {
                value?              : string;
                onChange?           : (e: Event) => void;
                placeholder?        : string;
                rows?               : number;
                cols?               : number;
                disabled?           : boolean;
                required?           : boolean;
                resize?             : 'none' | 'vertical' | 'horizontal' | 'both';
                maxLength?          : number;
                class?              : string;
            }

            <Textarea placeholder="Your message..." rows={4} />
            ```

        - #### Navigation

            **Nav Component**
            ```typescript
            import { Nav } from '@cruxkit/core';

            interface NavItem {
                label               : string | JSXElement;
                href                : string;
                active?             : boolean;
                disabled?           : boolean;
                icon?               : JSXElement;
            }

            interface NavProps {
                items               : NavItem[];
                orientation?        : 'horizontal' | 'vertical';
                class?              : string;
            }

            <Nav items={navItems} orientation="horizontal" />
            ```

            **Tabs Component**
            ```typescript
            import { Tabs } from '@cruxkit/core';

            interface TabItem {
                id                  : string;
                label               : string | JSXElement;
                content?            : JSXElement | string;
                disabled?           : boolean;
                icon?               : JSXElement;
            }

            interface TabsProps {
                tabs                : TabItem[];
                defaultTab?         : string;
                activeTab?          : string;
                variant?            : 'line' | 'solid' | 'outline';
                onTabChange?        : (tabId: string) => void;
                class?              : string;
            }

            <Tabs tabs={tabs} variant="line" />
            ```

            **Breadcrumb Component**
            ```typescript
            import { Breadcrumb } from '@cruxkit/core';

            interface BreadcrumbItem {
                label               : string | JSXElement;
                href?               : string;
                active?             : boolean;
                icon?               : JSXElement;
            }

            interface BreadcrumbProps {
                items               : BreadcrumbItem[];
                separator?          : JSXElement | string;
                class?              : string;
            }

            <Breadcrumb items={breadcrumbItems} />
            ```

            **Pagination Component**
            ```typescript
            import { Pagination } from '@cruxkit/core';

            interface PaginationProps {
                current             : number;
                total               : number;
                onChange            : (page: number) => void;
                siblingCount?       : number;
                showFirstLast?      : boolean;
                class?              : string;
            }

            <Pagination current={1} total={10} onChange={handlePageChange} />
            ```

        - #### Data Display

            **Card Component**
            ```typescript
            import { Card, CardHeader, CardBody, CardFooter } from '@cruxkit/core';

            interface CardProps {
                variant?            : 'elevated' | 'outlined' | 'filled';
                padding?            : 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
                rounded?            : 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
                hover?              : boolean;
                clickable?          : boolean;
                onClick?            : () => void;
                children            : JSXElement;
                class?              : string;
            }

            <Card variant="outlined" hover>
                <CardHeader divider><h3>Title</h3></CardHeader>
                <CardBody>Content</CardBody>
                <CardFooter divider><Button>Action</Button></CardFooter>
            </Card>
            ```

            **Table Component**
            ```typescript
            import { Table } from '@cruxkit/core';

            interface TableColumn<T> {
                key                 : keyof T;
                label               : string;
                width?              : string | number;
                align?              : 'left' | 'center' | 'right';
                sortable?           : boolean;
                render?             : (value: any, row: T, index: number) => JSXElement | string;
            }

            interface TableProps<T> {
                data                : T[];
                columns             : TableColumn<T>[];
                striped?            : boolean;
                hoverable?          : boolean;
                sortBy?             : keyof T;
                sortOrder?          : 'asc' | 'desc';
                onSort?             : (column: keyof T, order: 'asc' | 'desc') => void;
                class?              : string;
            }

            <Table data={users} columns={columns} striped hoverable />
            ```

            **List Component**
            ```typescript
            import { List } from '@cruxkit/core';

            interface ListItem<T = any> {
                id?                 : string | number;
                label?              : string | JSXElement;
                description?        : string | JSXElement;
                icon?               : JSXElement;
                avatar?             : JSXElement;
                trailing?           : JSXElement;
                disabled?           : boolean;
                onClick?            : () => void;
            }

            interface ListProps<T = any> {
                items               : ListItem<T>[];
                variant?            : 'simple' | 'divider' | 'spaced';
                size?               : 'sm' | 'md' | 'lg';
                selectable?         : boolean;
                onItemClick?        : (item: ListItem<T>, index: number) => void;
                class?              : string;
            }

            <List items={listItems} variant="divider" />
            ```

            **Tag Component**
            ```typescript
            import { Tag } from '@cruxkit/core';

            interface TagProps {
                variant?            : 'solid' | 'outline' | 'subtle';
                color?              : 'primary' | 'success' | 'warning' | 'error';
                size?               : 'sm' | 'md' | 'lg';
                icon?               : JSXElement;
                closeable?          : boolean;
                onClose?            : () => void;
                disabled?           : boolean;
                children            : JSXElement | string;
                class?              : string;
            }

            <Tag variant="solid" color="success" closeable>Active</Tag>
            ```

            **Stat Component**
            ```typescript
            import { Stat } from '@cruxkit/core';

            interface StatProps {
                value               : string | number | JSXElement;
                label               : string | JSXElement;
                description?        : string | JSXElement;
                icon?               : JSXElement;
                variant?            : 'card' | 'simple' | 'bordered';
                size?               : 'sm' | 'md' | 'lg';
                change?             : number;
                changeLabel?        : string;
                trend?              : 'up' | 'down' | 'neutral';
                color?              : 'primary' | 'success' | 'warning' | 'error';
                class?              : string;
            }

            <Stat value={1250} label="Total Users" trend="up" change={12} />
            ```

        <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> </div>
        <br>

    - ### Related 🔗

        - ##### [@minejs/jsx](https://github.com/minejs-org/jsx)
            > JSX runtime - No React, pure JavaScript implementation

        - ##### [@minejs/signals](https://github.com/minejs-org/signals)
            > Reactive state management with signals and effects

        - ##### [@mineui](https://github.com/mineui-org)
            > Semantic CSS variable system for theming and styling

        - ##### [@cruxjs/app](https://github.com/cruxjs-org/app)
            > Application framework built on @cruxkit components

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ END ══════════════════════════════╗ -->

<br>
<br>

---

<div align="center">
    <a href="https://github.com/maysara-elshewehy"><img src="https://img.shields.io/badge/by-Maysara-black"/></a>
</div>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->