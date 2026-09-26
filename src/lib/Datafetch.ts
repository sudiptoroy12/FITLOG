import next from "next";
import { revalidatePath } from "next/cache";

export const getAllData = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog",{cache:"force-cache"});
     if (!res.ok) {
      throw new Error(`Failed to fetch workouts: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching fitlog all data:", error);
    return [];
  }
};
export const getSingleData = async (id: string) => {
  try {
    const res = await fetch(
      `https://api.abcz.workers.dev/api/fitlog/${id}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch workout: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching fitlog details data:", error);
    return []
  }
};
