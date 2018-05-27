function dateFormatter(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'Februar', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];

    return {
        dayNumber : date.getDate(),
        mounthNumber : date.getMonth(),
        yearNumber : date.getFullYear(),

        dayName : days[date.getDay()],
        monthName : months[date.getMonth()],
    }
}

export default dateFormatter;

