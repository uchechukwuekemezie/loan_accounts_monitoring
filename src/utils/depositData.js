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
  // Robust amount parser – handles ₦, commas, spaces, invalid values
  const parseAmount = (str) => {
    if (!str || typeof str !== "string") return 0;
    const cleaned = str.replace(/[^0-9.-]+/g, "").trim();
    const num = parseFloat(cleaned);
    return isNaN(num) ? 0 : num;
  };

  const monthlyTotals = labels.map((_, index) => {
    return deposits.reduce((sum, deposit) => {
      try {
        const depositDate = new Date(deposit.bookingDate);
        if (isNaN(depositDate.getTime())) return sum;

        if (depositDate.getMonth() === index) {
          return sum + parseAmount(deposit.depositAmount);
        }
        return sum;
      } catch {
        console.warn("Invalid deposit entry skipped:", deposit);
        return sum;
      }
    }, 0);
  });

  return {
    labels,
    datasets: [
      {
        label: "Deposits (₦)",
        data: monthlyTotals,
        backgroundColor: "rgba(109, 40, 217, 0.85)", // Deep indigo-purple (perfect for deposits)
        borderColor: "#6d28d9", // Strong violet-700 border
        borderWidth: 2.5,
        borderRadius: 8,
        borderSkipped: false,
        hoverBackgroundColor: "#5b21b6",
        hoverBorderColor: "#4c1d95",
        tension: 0.15, // Slightly smoother curve
        pointBackgroundColor: "#6d28d9",
        pointHoverRadius: 8,
        pointRadius: 5,
      },
    ],
  };
};
