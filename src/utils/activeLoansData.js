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

  // Safely extract and parse amount (handles ₦ and commas)
  const parseAmount = (amountStr) => {
    if (typeof amountStr !== "string") return 0;
    return parseFloat(amountStr.replace(/[^0-9.-]+/g, "")) || 0;
  };

  const data = labels.map((month, index) => {
    return loansData.reduce((sum, loan) => {
      try {
        const loanData = new Date(loan.disbursedDate);
        if (isNaN(loanData)) return sum; // to skip invalid dates
        if (loanData.getMonth() === index) {
          return sum + parseAmount(loan.amountDisbursed);
        }
        return sum;
      } catch {
        console.warn("Invalid actual entry skipped:", loan);
        return sum; // skip entries with invalid date format.
      }
    }, 0);
  });

  return {
    labels,
    datasets: [
      {
        label: "Active Loans (₦)",
        data,
        backgroundColor: "rgba(124, 58, 237, 0.85)",
        borderColor: "#7c3aed",
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
        hoverBackgroundColor: "#5b21b6",
        hoverBorderColor: "#4c1d95",
        tension: 0.1, // slight curve for line charts
      },
    ],
  };
};
