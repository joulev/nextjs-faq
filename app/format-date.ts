export default function formatDate(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formatter.format(date); // 1 January 2021
}
