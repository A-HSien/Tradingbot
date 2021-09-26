import _ from "lodash";
import { classnames } from "./classnames";
export const createClass: typeof classnames =
    (...args) => {
        const map = _.flatMap(args, a => (a as string).split(' '))
            .reduce((map, curr) => {
                const tokens = curr.split('-');
                let grouped = false;
                if (tokens.length > 1) {
                    const val = tokens.pop();
                    const key = tokens.join('-');
                    if (key !== 'flex') {
                        grouped = true;
                        map.set(key, `${key}-${val}`);
                    }
                }
                if (!grouped) {
                    map.set(curr, curr);
                }
                return map;
            }, new Map<string, string>())
        const vals: any[] = Array.from(map.values());
        return classnames(...vals);
    };


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
    border, 'border-gray-100', 'dark:border-gray-600',
    'bg-gray-100', 'dark:bg-gray-700',
    'py-2', 'px-4',
    'font-semibold', 'text-blue-500',
);

export const buttonStyle = createClass(
    'block', 'w-full', 'text-center',
    'py-2', 'px-4',
    'hover:bg-blue-500',
    'font-semibold', 'text-blue-500', 'hover:text-white',
    border, 'border-blue-500', 'hover:border-transparent',
);

export const inputStyle = createClass(
    background, borderGray
);


export const scrollable = createClass(
    'overflow-auto',
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
    scrollable,
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
    selectStyle,
    buttonStyle,
    table, tableCell,
    codeBlockStyle
};
export default styles;