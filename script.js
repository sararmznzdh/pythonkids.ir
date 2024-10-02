// Simple form validation (optional)
document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (!name || !email) {
        alert('لطفا تمامی فیلدها را پر کنید');
        event.preventDefault();
    }
});



