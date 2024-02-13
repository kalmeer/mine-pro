import { instance } from ".";

const getAllItrip = async () => {
  const res = await instance.get("/trip/");

  return res.data;
};

const getTripById = async (_id) => {
  const res = await instance.get(`/trip/${_id}`);
  return res.data;
};
export { getAllItrip, getTripById };
