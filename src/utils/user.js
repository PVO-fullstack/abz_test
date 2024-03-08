import axios from "axios";

export const instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
});

export const getToken = async () => {
  const res = await instance.get("/api/v1/token");
  const data = res.data.token;

  return data;
};

export const sign_in = async (data) => {
  const token = await getToken();
  const res = await instance.post(`/api/v1/users`, data, {
    headers: { token },
  });
  return res;
};

export const getUsers = async (page, count) => {
  const res = await instance.get(`/api/v1/users?page=${page}&count=${count}`);
  const data = res.data.users;
  return data;
};

export const getPosition = async () => {
  const res = await instance.get("/api/v1/positions");
  const data = res.data.positions;
  return data;
};
