export const getChartData = (delinquencies) => {
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

  // Parse Naira string → number
  const parseAmount = (str) => {
    if (!str) return 0;
    return parseFloat(str.replace("₦", "").replace(/,/g, "").trim()) || 0;
  };

  // Use lastDateOfPayment for month grouping
  // Use principalInArrears + interestInArrears = total overdue
  const monthlyTotals = labels.map((_, idx) => {
    return delinquencies.reduce((sum, d) => {
      const paymentMonth = new Date(d.lastDateOfPayment).getMonth();
      const principal = parseAmount(d.principalInArrears);
      const interest = parseAmount(d.interestInArrears);
      return paymentMonth === idx ? sum + principal + interest : sum;
    }, 0);
  });

  return {
    labels,
    datasets: [
      {
        label: "Delinquency Overdue (₦)",
        data: monthlyTotals,
        backgroundColor: "rgba(249, 115, 22, 1)",
        borderColor: "rgba(255, 130, 40, 1)",
        borderWidth: 1,
      },
    ],
  };
};
