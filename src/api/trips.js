import { instance } from ".";

const getAllItrip = async () => {
  const res = await instance.get("/mini-project/api/items");

  return res.data;
};

const getTripById = async (_id) => {
  const res = await instance.get(`/mini-project/api/items/${_id}`);
  return res.data;
};
export { getAllItrip, getTripById };
