export default function (currency = "PHP") {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });
}
