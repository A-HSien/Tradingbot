import { classnames } from "./classnames";
export const createClass = classnames;

export const buttonStyle = createClass(
    'block', 'w-full', 'text-center',
    'py-2', 'px-4', 'mb-2', 'rounded',
    'bg-transparent', 'hover:bg-blue-500',
    'font-semibold', 'text-blue-500', 'hover:text-white',
    'border', 'border-blue-500', 'hover:border-transparent',
);