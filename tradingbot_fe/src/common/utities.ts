


export const formatJson = (obj: any) => {
    return JSON.stringify(obj, null, "\t");
};


export const formatDate = (input: Date | string | number) => {
    const date = new Date(input);
    const local = new Date(date);
    local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return local.toISOString().slice(0, 16).replace('T', ' ');
};