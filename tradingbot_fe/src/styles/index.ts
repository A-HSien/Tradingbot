import { classnames } from "./classnames";
export const createClass = classnames;


export const background = createClass(
    'bg-gray-100', 'dark:bg-gray-700'
);

export const textColor = createClass(
    'text-gray-900', 'dark:text-gray-100',
);

export const pageEdge = createClass(
    'py-3', 'px-6',
);

export const border = createClass(
    'rounded', 'border',
);

export const borderGray = createClass(
    border,
    'border-gray-100', 'dark:border-gray-600'
);

export const selectStyle = createClass(
    border, 'border-blue-500',
    'bg-gray-100', 'dark:bg-gray-700',
    'py-2', 'px-4',
    'font-semibold','text-blue-500',
);

export const buttonStyle = createClass(
    'block', 'w-full', 'text-center',
    'py-2', 'px-4',
    'hover:bg-blue-500',
    'font-semibold', 'text-blue-500', 'hover:text-white',
    border, 'border-blue-500', 'hover:border-transparent',
);


export const table = createClass(
    'table-auto', 'rounded',
    'border-collapse', 'border', 'border-gray-800',
    'w-full'
);

export const tableCell = createClass(
    'py-3', 'px-2',
    'border', 'border-gray-600',
    'h-10',
    'text-center'
);


export const codeBlockStyle = createClass(
    'overflow-auto',
    'rounded',
    'bg-gray-600',
    'p-2', 'mb-3',
    'text-left',
);

export const scrollable = createClass(
    'overflow-auto',
);

const styles = {
    background,
    textColor,
    pageEdge,
    border,
    borderGray,
    selectStyle,
    buttonStyle,
    table, tableCell,
    codeBlockStyle
};
export default styles;