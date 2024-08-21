export function formatDate(timestamp: number | string | Date | undefined) {
  if (
    timestamp === undefined ||
    timestamp === 0 ||
    timestamp === "0" ||
    timestamp === ""
  ) {
    return "-";
  }
  const date = new Date(timestamp);
  const res = date.toLocaleDateString();
  if (res === "01/01/1970") {
    return "-";
  }
  return res;
}
