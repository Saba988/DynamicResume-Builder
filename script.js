function displayResume(event) {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email-address").value;
    const phone = document.getElementById("phone-number").value;
    const address = document.getElementById("home-address").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;

    // Populate resume display
    document.getElementById("name-display").textContent = `${firstName} ${lastName}`;
    document.getElementById("email-display").textContent = email;
    document.getElementById("phone-display").textContent = phone;
    document.getElementById("address-display").textContent = address;
    document.getElementById("education-display").textContent = education;
    document.getElementById("experience-display").textContent = experience;
    document.getElementById("skills-display").textContent = skills;

    // Handle profile picture upload
    const profileImage = document.getElementById("profile-image").files[0];
    if (profileImage) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const outputImage = document.getElementById("output-image");
            outputImage.src = event.target.result;
            outputImage.style.display = "block";
        };
        reader.readAsDataURL(profileImage);
    }

    // Show the resume output section
    document.getElementById("output-section").style.display = "block";
}
