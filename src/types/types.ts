export interface ActivityType {
    id: number;
    label: string;
    value: string;
}

export interface BarChartData {
    labels: string[];
    datasets: {
      data: (string | number)[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number;
    }[];
};

export interface PieChartData {
    labels: string[];
    datasets: {
      label: string;
      data: (string | number)[];
      backgroundColor: string[];
      hoverOffset: number;
    }[];
};