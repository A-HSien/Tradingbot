import { classnames } from "./classnames";
export const createClass = classnames;


const background = createClass(
    'bg-gray-100', 'dark:bg-gray-700'
);
const textColor = createClass(
    'text-gray-900', 'dark:text-gray-100',
);
const pageEdge = createClass(
    'py-3', 'px-6',
);

const border = createClass(
    'rounded', 'border',
);

const borderGray = createClass(
    border,
    'border-gray-100', 'dark:border-gray-600'
);

const buttonStyle = createClass(
    'block', 'w-full', 'text-center',
    'py-2', 'px-4',
    'hover:bg-blue-500',
    'font-semibold', 'text-blue-500', 'hover:text-white',
    border, 'border-blue-500', 'hover:border-transparent',
);


const table = createClass(
    'table-auto', 'rounded',
    'border-collapse', 'border', 'border-gray-800',
    'w-full'
);

const tableCell = createClass(
    'py-3', 'px-2',
    'border', 'border-gray-600',
    'h-10',
    'text-center'
);


export const codeBlockStyle = createClass(
    'w-full',
    'rounded',
    'bg-gray-600',
    'p-2', 'mb-3',
    'text-left',
);


const styles = {
    background,
    textColor,
    pageEdge,
    border,
    borderGray,
    buttonStyle,
    table, tableCell,
    codeBlockStyle
};
export default styles;