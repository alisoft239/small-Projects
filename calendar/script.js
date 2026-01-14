const calendarDays = document.getElementById('calendarDays'); // Days 
const monthYear = document.getElementById('monthYear'); // month
const prevButton = document.getElementById('prev'); 
const nextButton = document.getElementById('next');

let currentDate = new Date();

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); 
    const day333 = currentDate.getDay();
    // يحوّل التاريخ إلى نص حسب لغة البلد.
    // ar-EG for arabic - default for lang system
    monthYear.textContent = `${currentDate.toLocaleString('default',
        {weekday: 'long', day: 'numeric', month: 'long' })}
        ${year}`;

    const firstDay = new Date(year, month, 1); // جلب اول يوم في الشهر
    const lastDay = new Date(year, month + 1, 0); // الشهر بيرجع على انه رقم، لو ضفت له واحد معناه الشهر اللي بعده مش الحالي
    const daysInMonth = lastDay.getDate(); // يستخرج رقم اليوم من آخر يوم = عدد أيام الشهر(28، 30، 31 حسب الشهر)

    // Get today's date
    const today = new Date();
    const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;
    const todayDate = today.getDate();

    calendarDays.innerHTML = '';

    // Render days
    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('div');
        day.classList.add('day');
        day.textContent = i;
        
        // Highlight today's date if it's in the current month
        if (isCurrentMonth && i === todayDate) {
            day.classList.add('active');
        }
        
        calendarDays.appendChild(day);
    }
}

prevButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Initial render
renderCalendar();
