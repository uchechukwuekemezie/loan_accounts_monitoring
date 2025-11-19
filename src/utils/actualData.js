export const getChartData = (actualsData) => {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = labels.map((month) => {
    return actualsData.reduce((sum, actual) => {
      const actualMonth = new Date(actual.dateDisbursed).getMonth();
      const monthIndex = new Date(`2025-${month}`).getMonth();
      return actualMonth === monthIndex
        ? sum +
            parseFloat(actual.amountDisbursed.replace("₦", "").replace(",", ""))
        : sum;
    }, 0);
  });

  return {
    labels,
    datasets: [
      {
        label: "Actuals (₦)",
        data,
        backgroundColor: "rgba(249, 115, 22, 1)",
        borderColor: "rgba(255, 130, 40, 1)",
        borderWidth: 1,
      },
    ],
  };
};
