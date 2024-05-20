import { locationsData } from "@/data/locationsdata";

export const getLocationInfo = (locationName: string) => {
  const location = locationName.replace(/-/g, "_");
  const locationData = locationsData[location as keyof typeof locationsData];
  if (!locationData) {
    return { locationData: null, courses: null };
  }
  const courses = Object.values(locationData.courses);
  return { locationData, courses };
};
