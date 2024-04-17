const profilePictureForm = document.getElementById('profile-picture-form');

profilePictureForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append('profilePicture', document.getElementById('profilePictureInput').files[0]);

  try {
    const response = await fetch('/api/users/upload-profile-picture', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.message === 'Profile picture uploaded successfully.') {
      console.log('Profile picture uploaded successfully!');
      // Optional: Update UI to display success message or uploaded image
    } else {
      console.error(data.message);
      // Optional: Update UI to display error message
    }
  } catch (err) {
    console.error(err);
    // Optional: Update UI to display error message
  }
});
