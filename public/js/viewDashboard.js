function redirectDashboard() {
    document.location.replace('/dashboard');
};

document.getElementById('#dashboardBtn').addEventListener('click', redirectDashboard);