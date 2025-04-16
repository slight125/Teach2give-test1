// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the image element
    const dashboardImage = document.getElementById('dashboard-image');
    
    // Set the image source
    dashboardImage.src = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-16%20at%2012.24.36_62429e18.jpg-djnc1EyZKRm7JrdSs5qeIT5GPsWNHa.jpeg';
    
    // Add a loading event to confirm when the image is loaded
    dashboardImage.addEventListener('load', function() {
        console.log('Dashboard image loaded successfully');
    });
    
    // Add an error event in case the image fails to load
    dashboardImage.addEventListener('error', function() {
        console.error('Failed to load the dashboard image');
        // Display a fallback message if the image fails to load
        dashboardImage.style.display = 'none';
        const container = document.querySelector('.dashboard-container');
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Unable to load the dashboard image. Please check your internet connection and try again.';
        container.appendChild(errorMessage);
    });
});
