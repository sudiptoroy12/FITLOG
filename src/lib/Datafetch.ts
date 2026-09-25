export const getAllData = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching fitlog all data:", error);
    return [];
  }
};
export const getSingleData = async () => {
  try {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching fitlog details data:", error);
    return [];
  }
};
