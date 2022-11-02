function redirectDashboard() {
    document.location.replace('/dashboard');
};

if (document.getElementById('#dashboardBtn')) {
    document.querySelector('#dashboardBtn').addEventListener('click', redirectDashboard);
}