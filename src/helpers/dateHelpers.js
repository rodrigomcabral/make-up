export default function getAgeFrom(birthDate) {
  if (!birthDate) {
    //dealing with 31st day
    return "?";
  }

  //split functions breaks a string into arrays
  const [birthYear, birthMonth, birthDay] = birthDate.split("-");

  const today = new Date();
  const todayYear = today.getFullYear();
  //january = 0;
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();

  //convert string to number
  const age = todayYear - parseInt(birthYear, 10);

  if (parseInt(birthMonth, 10) > todayMonth) {
    return age - 1;
  }
  if (
    parseInt(birthMonth, 10) === todayMonth &&
    parseInt(birthDay, 10) > todayDay
  ) {
    return age - 1;
  }

  return age;
}
