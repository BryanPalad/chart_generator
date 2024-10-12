export const lineChartData = {
    labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],
    datasets: [
        {
            label: "Steps By Bryan",
            data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
            borderColor: "rgb(75, 192,192)"
        },
        {
            label: "Steps By Joyce",
            data: [1000, 2000, 3500, 4000, 5000, 6000, 7000],
            borderColor: "red"
        }
    ]
};

export const barChartData = {
    labels: [
        'Check SSS Premium Payable', 
        'Bank Reconciliation',
        'Break (Energy Boost by HR)', 
        'Relief Data Entry', 
        '2316 Preparation', 
        'Discuss the CA & liquidation', 
        'Relief Data Entry',
        'Break',
        'Receipt Allowance',
        'Update JV Monitoring', 
        'Check SSS Premium Payable',
        'Bank Reconciliation',
        'Journal Entry', 
        'AP Bookkeeping', 
        'Updating of Activity Tracker',
        'Check the Government Contribution',
    ],
    datasets: [
        {
            label: 'Total Time Spent (hrs)',
            data: [0.5, 0.67, 0.17, 1.17, 0.17, 0.17, 0.33, 1.0, 2.25, 0.08, 0.5, 0.42, 0.017, 0.07, 0.05, 1.0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)',
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)',
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export const pieChartData = {
    labels: [
        'Check SSS Premium Payable', 
        'Bank Reconciliation',
        'Break (Energy Boost by HR)', 
        'Relief Data Entry', 
        '2316 Preparation', 
        'Discuss the CA & liquidation', 
        'Relief Data Entry',
        'Break',
        'Receipt Allowance',
        'Update JV Monitoring', 
        'Check SSS Premium Payable',
        'Bank Reconciliation',
        'Journal Entry', 
        'AP Bookkeeping', 
        'Updating of Activity Tracker', 
        'Check the Government Contribution',
    ],
    datasets: [
        {
            label: 'Total Time Spent (hrs)',
            data: [0.5, 0.67, 0.17, 1.17, 0.17, 0.17, 0.33, 1.0, 2.25, 0.08, 0.5, 0.42, 0.017, 0.07, 0.05, 1.0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)',
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)',
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
            ],
            hoverOffset: 4,
        }
    ]
};

export const activityData = [
    {
        id: 1,
        label: 'AP Bookkeeping',
        value: 'AP Bookkeeping',
    },
    {
        id: 2,
        label: 'GL Bookkeeping',
        value: 'GL Bookkeeping',
    },
    {
        id: 3,
        label: 'Tax Forms',
        value: 'Tax Forms', 
    },
    {
        id: 4,
        label: 'Expense Tracking',
        value: 'Expense Tracking',
    },
    {
        id: 5,
        label: 'Bank Reconciliation',
        value: 'Bank Reconciliation',
    },
    {
        id: 6,
        label: 'Monthly End Closing',
        value: 'Monthly End Closing',
    },
    {
        id: 7,
        label: 'Monthly FS',
        value: 'Monthly FS',
    },
    {
        id: 8,
        label: 'Monthly EWT',
        value: 'Monthly EWT',
    },
    {
        id: 9,
        label: 'Monthly Wtax Compensation',
        value: 'Monthly Wtax Compensation',
    },
    {
        id: 10,
        label: 'Schedules',
        value: 'Schedules',
    },
    {
        id: 11,
        label: 'Quarterly VAT',
        value: 'Quarterly VAT',
    },
    {
        id: 12,
        label: 'Quarterly ITR',
        value: 'Quarterly ITR',
    },
    {
        id: 13,
        label: 'Updating Tracker',
        value: 'Updating Tracker',
    },
    {
        id: 14,
        label: 'Break',
        value: 'Break',
    },
    {
        id: 15,
        label: 'Others',
        value: 'Others',
    },
]