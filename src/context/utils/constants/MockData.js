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
        color: 'rgba(255, 99, 132, 0.9)' // red
    },
    {
        id: 2,
        label: 'GL Bookkeeping',
        value: 'GL Bookkeeping',
        color: 'rgba(54, 162, 235, 0.9)' // blue
    },
    {
        id: 3,
        label: 'Tax Forms',
        value: 'Tax Forms', 
        color: 'rgba(255, 206, 86, 0.9)' // yellow
    },
    {
        id: 4,
        label: 'Expense Tracking',
        value: 'Expense Tracking',
        color: 'rgba(75, 192, 192, 0.9)', // Teal'
    },
    {
        id: 5,
        label: 'Bank Reconciliation',
        value: 'Bank Reconciliation',
        color: 'rgba(153, 102, 255, 0.9)', // Purple
    },
    {
        id: 6,
        label: 'Monthly End Closing',
        value: 'Monthly End Closing',
        color: 'rgba(255, 159, 64, 0.9)', // Orange
    },
    {
        id: 7,
        label: 'Monthly FS',
        value: 'Monthly FS',
        color: 'rgba(100, 181, 246, 0.9)', // Light Blue
    },
    {
        id: 8,
        label: 'Monthly EWT',
        value: 'Monthly EWT',
        color: 'rgba(244, 67, 54, 0.9)',  // Deep Red
    },
    {
        id: 9,
        label: 'Monthly Wtax Compensation',
        value: 'Monthly Wtax Compensation',
        color: 'rgba(76, 175, 80, 0.9)',  // Green
    },
    {
        id: 10,
        label: 'Schedules',
        value: 'Schedules',
        color: 'rgba(255, 87, 34, 0.9)',  // Deep Orange
    },
    {
        id: 11,
        label: 'Quarterly VAT',
        value: 'Quarterly VAT',
        color: 'rgba(33, 150, 243, 0.9)', // Indigo Blue
    },
    {
        id: 12,
        label: 'Quarterly ITR',
        value: 'Quarterly ITR',
        color: 'rgba(121, 85, 72, 0.9)',  // Brown
    },
    {
        id: 13,
        label: 'Updating Tracker',
        value: 'Updating Tracker',
        color: 'rgba(96, 125, 139, 0.9)', // Blue Grey
    },
    {
        id: 14,
        label: 'Break',
        value: 'Break',
        color: 'rgba(0, 188, 212, 0.9)',  // Cyan
    },
    {
        id: 15,
        label: 'Others',
        value: 'Others',
        color: 'rgba(233, 30, 99, 0.9)',    // Pink
    },
  ];


  export const filterByData = [
    {
        id: 1,
        label: 'Today',
        value: 'Today',
    },
    {
        id: 2,
        label: 'Daily',
        value: 'Daily',
    },
    {
        id: 3,
        label: 'Monthly',
        value: 'Monthly',
    }
  ];


  export const monthlyLabels = [
    'October', 'November', 'December'
  ];
  
  export const monthlyBarChartData = {
    labels: monthlyLabels,
    datasets: [
      {
        label: 'Expense Tracking',
        data: [120, 150, 180],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color for the Sales bars
      },
      {
        label: 'Bank Reconciliation',
        data: [100, 130, 160],
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Color for the Expenses bars
      },
      {
        label: 'Updating Tracker',
        data: [20, 20, 20],
        backgroundColor: 'rgba(255, 206, 86, 0.6)', // Color for the Profits bars
      },
    ],
  };

  export const dailyLabels = [
    'October 14', 'October 15', 'October 16'
  ];
  
  export const dailyBarChartData = {
    labels: dailyLabels,
    datasets: [
      {
        label: 'Expense Tracking',
        data: [120, 150, 180],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Color for the Sales bars
      },
      {
        label: 'Bank Reconciliation',
        data: [100, 130, 160],
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Color for the Expenses bars
      },
      {
        label: 'Updating Tracker',
        data: [20, 20, 20],
        backgroundColor: 'rgba(255, 206, 86, 0.6)', // Color for the Profits bars
      },
    ],
  };

  export const sampleDailyLabels = [
    'October 07'
  ];
  
  export const sampleDailyBarChartData = [
    {
        labels: 'October 07',
        datasets: [
          {
            label: 'GL Bookkeeping',
            data: [0.17],
            backgroundColor: 'rgba(54, 162, 235, 0.9)', // Color for the Sales bars
          },
          {
            label: 'Bank Reconciliation',
            data: [0.05],
            backgroundColor: 'rgba(153, 102, 255, 0.9)', // Color for the Expenses bars
          },
          {
            label: 'Quarterly VAT',
            data: [0.07],
            backgroundColor: 'rgba(33, 150, 243, 0.9)', // Color for the Profits bars
          },
          {
            label: 'Tax Forms',
            data: [0.01],
            backgroundColor: 'rgba(255, 206, 86, 0.9)', // Color for the Profits bars
          },
          {
            label: 'Others',
            data: [0.01],
            backgroundColor: 'rgba(233, 30, 99, 0.9)', // Color for the Profits bars
          },
          {
            label: 'Break',
            data: [0.04],
            backgroundColor: 'rgba(0, 188, 212, 0.9)', // Color for the Profits bars
          },
          {
            label: 'AP Bookkeeping',
            data: [0.01],
            backgroundColor: 'rgba(255, 99, 132, 0.9)', // Color for the Profits bars
          },
          {
            label: 'Updating Tracker',
            data: [0.02],
            backgroundColor: 'rgba(96, 125, 139, 0.9)', // Color for the Profits bars
          },
        ],
    },
    {
        labels: 'October 08',
        datasets: [
          {
            label: 'GL Bookkeeping',
            data: [0.02],
            backgroundColor: 'rgba(54, 162, 235, 0.9)', // Color for the Sales bars
          },
          {
            label: 'Bank Reconciliation',
            data: [0.03],
            backgroundColor: 'rgba(153, 102, 255, 0.9)', // Color for the Expenses bars
          },
          {
            label: 'Quarterly VAT',
            data: [0.06],
            backgroundColor: 'rgba(33, 150, 243, 0.9)', // Color for the Profits bars
          },
        ],
    },
  ]

