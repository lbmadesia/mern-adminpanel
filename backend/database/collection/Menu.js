const menu = [
    {
        type: 'panel',
        name: 'panel Sidebar Menu',
        items: [{
            name: 'Dashboard',
            backendUrl: "api/admin/dashboard",
            frontendUrl: "admin/dashboard",
            openInNewTab: 0,
            icon: "fa-dashboard",
            permissionId: null,
            content: "Customer Management"
        }],
        createdBy: 'admin'
    }
];
module.exports = menu;