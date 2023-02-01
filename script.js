const unRead = document.querySelectorAll('.new');
const notifBox = document.getElementById('notif');
const markAll = document.getElementById('mark_all');

notifBox.innerText = unRead.length;


unRead.forEach((message) => {
    message.addEventListener('click', () => {
        message.classList.remove('new');
        const newUnread = document.querySelectorAll('.new');
        notifBox.innerText = newUnread.length;
    })
})

markAll.addEventListener('click', () => {
    unRead.forEach((message) => {
        message.classList.remove('new');
    })
    const newUnread = document.querySelectorAll('.new');
    notifBox.innerText = newUnread.length;
})