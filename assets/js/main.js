// tanggal berakhir
function calculateDaysRemaining(endDate) {
    const currentDate = new Date();
    const timeDifference = new Date(endDate) - currentDate;
    return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
}
// Get element
const dateElements = document.querySelectorAll('[data-end-date]');
// Iteration
dateElements.forEach(element => {
    const endDate = element.getAttribute('data-end-date');
    const daysRemaining = calculateDaysRemaining(endDate);
    if (daysRemaining > 0) {
        element.textContent = `Valid for ${daysRemaining} more days`;
    } else {
        element.textContent = "The validity period has ended.";
    }
});

// footer current year
const currentYear = new Date().getFullYear();
// get element
const yearElement = document.getElementById('current-year');
// set the text
yearElement.textContent = currentYear;

console.log('%cStill in development!', 'color: red; background-color: yellow; font-weight: bold; font-size: 30px;');