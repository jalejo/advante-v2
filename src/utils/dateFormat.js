function getMonthName(isoDate) {
    const date = new Date(isoDate);
    const options = { month: 'short' };
    return date.toLocaleDateString('en-US', options);
}

function getDay(isoDate) {
    const date = new Date(isoDate);
    return date.getDate();
}

function formatTime(isoDate) {
    const date = new Date(isoDate);
    const options = { hour: '2-digit', minute: '2-digit' };
    return date.toLocaleTimeString('en-US', options);
}

export { getMonthName, getDay, formatTime };