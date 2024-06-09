let notificationCount = 0;

function showNotification(title, text, iconColor, iconClass, duration = 5000, playSound) {
    if (playSound) {
        new Audio('notification.mp3').play();
    }

    const box = document.createElement('div');
    box.className = 'top-right-box slide-in';
    box.style.borderLeft = `5px solid ${iconColor}`;
    box.style.top = `${getTopPosition()}px`;

    box.innerHTML = `
        <i class="fa-solid ${iconClass}" style="color: ${iconColor}; margin-right: 15px; width: 30px; height: 30px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 26px;"></i>
        <div class="text-content">
            <h3 class="title">${title}</h3>
            <p class="text">${text}</p>
        </div>
    `;

    document.body.appendChild(box);
    notificationCount++;

    setTimeout(() => box.style.transition = 'top 0.4s ease', 100);

    setTimeout(() => {
        box.classList.replace('slide-in', 'slide-out');
        setTimeout(() => {
            box.remove();
            notificationCount--;
            adjustNotifications();
        }, 500);
    }, duration);
}

function getTopPosition() {
    const notificationSpacing = 10;
    if (notificationCount === 0) return 10;
    const lastNotification = document.querySelector('.top-right-box:last-child');
    return parseInt(lastNotification.style.top) + lastNotification.offsetHeight + notificationSpacing;
}

function adjustNotifications() {
    const notifications = document.querySelectorAll('.top-right-box');
    notifications.forEach((notification, index) => {
        notification.style.top = `${index * (notification.offsetHeight + 10) + 10}px`;
    });
}

window.addEventListener('message', ({ data: { type, title, text, duration, playSound } }) => {
    if (type) {
        const notificationTypes = {
            'success': ['#3dec78', 'fa-circle-check'],
            'info': ['#3077ad', 'fa-circle-info'],
            'warning': ['#FFD43B', 'fa-triangle-exclamation'],
            'error': ['#ff0a2f', 'fa-circle-xmark']
        };
        const [iconColor, iconClass] = notificationTypes[type];
        showNotification(title, text, iconColor, iconClass, duration, playSound);
    }
});
