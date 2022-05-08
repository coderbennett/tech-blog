function redirectDashboard() {
    document.location.replace('/dashboard');
};

document.querySelector('#dashboardBtn').addEventListener('click', redirectDashboard);