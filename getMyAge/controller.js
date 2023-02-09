function getAge(input) {
  let yearNow = new Date().getFullYear();
  if (!input) return input;
  if (input) return (yearNow -= input);
}
