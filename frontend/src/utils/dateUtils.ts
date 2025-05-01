const PT_BR = 'pt-br';

export const convertToPrBrStringDate = (date: Date | string, options?: any): string =>  {
    return new Date(date).toLocaleDateString(PT_BR, options);
}