export const formatDate = (date) => {
    const newDate = new Date(date)
    
    const [day, month, year] = [newDate.getDate(), newDate.getMonth(), newDate.getFullYear()];
    const [hour, minute] = [newDate.getHours(), newDate.getMinutes()];

    return `${day} ${monthName(month)} ${year} - ${numberFormat(hour)}:${numberFormat(minute)}`;
}

const monthName = (month) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[month];
}

const numberFormat = (number) => {
    return number < 9 ? `0${number}` : number;
}