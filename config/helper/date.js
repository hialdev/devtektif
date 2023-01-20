export function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString("id-ID", {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', timeZone: "UTC"});
}