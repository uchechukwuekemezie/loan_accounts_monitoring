export const getChartData = (deposits) => {
  // Months list
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

  // Parse amount: "₦200,000" → 200000
  const parseAmount = (str) => {
    if (!str) return 0;
    return parseFloat(str.replace("₦", "").replace(/,/g, "").trim()) || 0;
  };

  // Group by month (2025 only for now)
  const monthlyTotals = labels.map((month, idx) => {
    const monthIndex = idx; // 0 = Jan, 11 = Dec
    return deposits.reduce((sum, d) => {
      const bookingMonth = new Date(d.bookingDate).getMonth(); // 0-11
      return bookingMonth === monthIndex
        ? sum + parseAmount(d.depositAmount)
        : sum;
    }, 0);
  });

  return {
    labels,
    datasets: [
      {
        label: "Deposits (₦)",
        data: monthlyTotals,
        backgroundColor: "rgba(249, 115, 22, 1)",
        borderColor: "rgba(255, 130, 40, 1)",
        borderWidth: 1,
      },
    ],
  };
};
