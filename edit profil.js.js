document.addEventListener('DOMContentLoaded', function () {
    const editForm = document.getElementById('editForm');
    const avatarInput = document.getElementById('avatarInput');
    const usernameInput = document.getElementById('usernameInput');
    const emailInput = document.getElementById('emailInput');
    const bioInput = document.getElementById('bioInput');

    editForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const bio = bioInput.value.trim();

        // Perform edit profile (simulate here)
        const profileData = {
            username: username,
            email: email,
            bio: bio
        };
        console.log('Edited Profile:', profileData);

        // Reset form fields
        editForm.reset();
    });
});
