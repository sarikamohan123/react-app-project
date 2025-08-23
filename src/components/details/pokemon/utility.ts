export const formatName = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1).replace("-", " ");
};

export const getStatColor = (statValue: number) => {
  if (statValue >= 100) return "green";
  if (statValue >= 70) return "yellow";
  if (statValue >= 50) return "orange";
  return "red";
};
