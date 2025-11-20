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

  // Robust parser for Naira strings (handles ₦, commas, spaces, nulls)
  const parseAmount = (str) => {
    if (!str || typeof str !== "string") return 0;
    const cleaned = str.replace(/[^0-9.-]+/g, "").trim();
    const num = parseFloat(cleaned);
    return isNaN(num) ? 0 : num;
  };

  const monthlyTotals = labels.map((_, index) => {
    return delinquencies.reduce((sum, item) => {
      try {
        const lastPaymentDate = new Date(item.lastDateOfPayment);
        if (isNaN(lastPaymentDate.getTime())) return sum;

        if (lastPaymentDate.getMonth() === index) {
          const principal = parseAmount(item.principalInArrears);
          const interest = parseAmount(item.interestInArrears);
          return sum + principal + interest;
        }
        return sum;
      } catch {
        console.warn("Invalid delinquency record skipped:", item);
        return sum;
      }
    }, 0);
  });

  return {
    labels,
    datasets: [
      {
        label: "Delinquency Overdue (₦)",
        data: monthlyTotals,
        backgroundColor: "rgba(147, 51, 234, 0.88)", // Strong purple (perfect for risk/alerts)
        borderColor: "#9333ea", // Vibrant purple-600
        borderWidth: 3,
        borderRadius: 10,
        borderSkipped: false,
        hoverBackgroundColor: "#7e22ce",
        hoverBorderColor: "#6b21a8",
        pointBackgroundColor: "#9333ea",
        pointHoverBackgroundColor: "#c4b5fd",
        pointRadius: 6,
        pointHoverRadius: 9,
        tension: 0.2,
        fill: true,
      },
    ],
  };
};
