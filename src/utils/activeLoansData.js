export const getChartData = (loansData) => {
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
    return loansData.reduce((sum, loan) => {
      const loanMonth = new Date(loan.disbursedDate).getMonth();
      const monthIndex = new Date(`2025-${month}`).getMonth();
      return loanMonth === monthIndex
        ? sum +
            parseFloat(loan.amountDisbursed.replace("₦", "").replace(",", ""))
        : sum;
    }, 0);
  });

  return {
    labels,
    datasets: [
      {
        label: "Active Loans (₦)",
        data,
        backgroundColor: "rgba(249, 115, 22, 1)",
        borderColor: "rgba(255, 130, 40, 1)",
        borderWidth: 1,
      },
    ],
  };
};
