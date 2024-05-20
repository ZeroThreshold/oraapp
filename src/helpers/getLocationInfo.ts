import { locationsData } from "@/data/locationsdata";

export const getLocationInfo = (locationName: string) => {
  const location = locationName.replace(/-/g, "_");
  const locationData = locationsData[location as keyof typeof locationsData];
  if (!locationData) {
    return { locationData: null, courses: null };
  }
  const courses = Object.entries(locationData.courses).map(([key, value]) => {
    return { ...value, id: Number(key) };
  });
  return { locationData, courses };
};

export const getCourseInfo = (locationName: string, courseId: string) => {
  const location = locationName.replace(/-/g, "_");
  const locationData = locationsData[location as keyof typeof locationsData];
  if (!locationData) {
    return { locationData: null, course: null };
  }
  const course =
    locationData.courses[
      courseId as unknown as keyof typeof locationData.courses
    ];
  return { locationData, course };
};
