import { instance } from ".";

const getAllItrips = async () => {
  // const res = await instance.get("/trip/");
  // console.log(res.data);
  // return res.data;
  try {
    const response = await instance.get("/trip/");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getTripById = async (_id) => {
  const res = await instance.get(`/trip/${_id}`);
  return res.data;
};

const createTrip = async (tripInfo) => {
  console.log(
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +
      tripInfo
  );
  try {
    const formData = new FormData();

    // Append text data
    for (let key in tripInfo) {
      if (key !== "image") formData.append(key, tripInfo[key]);
    }

    // Append image file
    if (tripInfo.image) {
      formData.append("image", tripInfo.image);
    }

    const { data } = await instance.post("/trips", formData);
    return data;
  } catch (error) {
    // console.error(error);
  }
};
export { getAllItrips, getTripById, createTrip };
