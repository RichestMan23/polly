document.getElementById('send').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Email ${email} royhatga olindi!`);
    } else {
        alert('iltimos email lingizni kiriting');
    }
});
