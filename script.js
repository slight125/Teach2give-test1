
document.addEventListener('DOMContentLoaded', function() {
    
    const dashboardImage = document.getElementById('dashboard-image');
    
    
    dashboardImage.src = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-16%20at%2012.24.36_62429e18.jpg-djnc1EyZKRm7JrdSs5qeIT5GPsWNHa.jpeg';
    
    
    dashboardImage.addEventListener('load', function() {
        console.log('Dashboard image loaded successfully');
    });
    
    
    dashboardImage.addEventListener('error', function() {
        console.error('Failed to load the dashboard image');
        
        dashboardImage.style.display = 'none';
        const container = document.querySelector('.dashboard-container');
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Unable to load the dashboard image. Please check your internet connection and try again.';
        container.appendChild(errorMessage);
    });
});
