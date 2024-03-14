class EDate extends Date{
    get day() {
        return checkValueIsLessThanTen(this.getDate());
    }

    get month() {
        return monthName(this.getMonth());
    }

    get year(){
        return this.getFullYear();
    }

    get minutes(){
        return checkValueIsLessThanTen(this.getMinutes());
    }

    get hours(){
        return checkValueIsLessThanTen(this.getHours());
    }
}

export const formatDate = () => {
    const { day, month, year, hours, minutes} = new EDate();
    return `${day} ${month} ${year} - ${hours}:${minutes}`
}

const monthName = (month) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[month];
}

export const checkValueIsLessThanTen = (value) => {
    return value < 10 ? `0${value}` : value;
}