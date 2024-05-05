import { ReactElement } from "react";
import classnames from 'classnames'
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    primary?: boolean,
    secondary?: boolean,
    warning?: boolean,
    success?: boolean,
    danger?: boolean,
    outline?: boolean,
    rounded?: boolean
}

function Button(props: ButtonProps): ReactElement {
    const { children, primary, secondary, warning, success, danger, outline, rounded, ...rest } = props;

    const classes = twMerge(
        classnames(rest.className,
            'flex flex-row items-center gap-1 px-3 py-1.5 border', {
            'border-blue-300 bg-blue-500 text-white': props.primary,
            'border-gray-300 bg-gray-500 text-white': props.secondary,
            'border-green-300 bg-green-500 text-white': props.success,
            'border-yellow-300 bg-yellow-500 text-white': props.warning,
            'border-red-300 bg-red-500 text-white': props.danger,
            'rounded-full': props.rounded,
            'bg-white': props.outline,
            'text-blue-500': props.outline && props.primary,
            'text-gray-900': props.outline && props.secondary,
            'text-green-500': props.outline && props.success,
            'text-yellow-400': props.outline && props.warning,
            'text-red-500': props.outline && props.danger,
        })
    )
    return (
        <button {...rest} className={classes}>{props.children}</button>
    )
}

export default Button