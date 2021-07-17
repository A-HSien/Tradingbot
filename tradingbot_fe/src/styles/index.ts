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


const styles = {
    background,
    textColor,
    pageEdge,
    border,
    borderGray,
    buttonStyle,
};
export default styles;