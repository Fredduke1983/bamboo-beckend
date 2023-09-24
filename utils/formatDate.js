const formatDate = (date) => {
  const inputDate = new Date(date);

  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, "0");
  const day = String(inputDate.getDate()).padStart(2, "0");
  const hours = String(inputDate.getHours()).padStart(2, "0");
  const minutes = String(inputDate.getMinutes()).padStart(2, "0");
  const seconds = String(inputDate.getSeconds()).padStart(2, "0");

  const formattedDate = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  return formattedDate;
};

module.exports = formatDate;
