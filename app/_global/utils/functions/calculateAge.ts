export const calculateAge = (birthDate: Date): number => {
  const today: Date = new Date();
  let age: number = today.getFullYear() - birthDate.getFullYear();
  const monthDifference: number = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }

  return age;
};
