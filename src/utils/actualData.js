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

  // Safe amount parser – handles ₦, commas, empty strings, etc.
  const parseAmount = (amountStr) => {
    if (!amountStr || typeof amountStr !== "string") return 0;
    const cleaned = amountStr.replace(/[^0-9.-]+/g, "");
    const num = parseFloat(cleaned);
    return isNaN(num) ? 0 : num;
  };

  const data = labels.map((_, index) => {
    return actualsData.reduce((sum, actual) => {
      try {
        // Safely parse the date
        const actualDate = new Date(actual.dateDisbursed);
        if (isNaN(actualDate.getTime())) return sum;

        if (actualDate.getMonth() === index) {
          return sum + parseAmount(actual.amountDisbursed);
        }
        return sum;
      } catch {
        console.warn("Invalid actual entry skipped:", actual);
        return sum;
      }
    }, 0);
  });

  return {
    labels,
    datasets: [
      {
        label: "Actuals (₦)",
        data,
        backgroundColor: "rgba(139, 92, 246, 0.85)", // soft violet fill
        borderColor: "#8b5cf6",
        borderWidth: 2.5,
        borderRadius: 8,
        borderSkipped: false,
        hoverBackgroundColor: "#7c3aed",
        hoverBorderColor: "#4c1d95",
        tension: 0.1, // slight curve for line charts
      },
    ],
  };
};
