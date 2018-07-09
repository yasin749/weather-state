function dateTimeFormat(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'Februar', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return {
        dayNumber: date.getDate(),
        mounthNumber: date.getMonth(),
        yearNumber: date.getFullYear(),
        timeNumber: `${date.getHours().toString().length < 2 ? '0' : ''}${date.getHours()}:${date.getMinutes().toString().length < 2 ? '0' : ''}${date.getMinutes()}`,

        dayName: days[date.getDay()],
        monthName: months[date.getMonth()],
    }
}

export default dateTimeFormat;

