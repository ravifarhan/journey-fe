import API from "..";

interface ILogin {
  email: string;
  password: string;
}

// interface IUser {
//   fullname?: string
//   email?: string
// }

export const getUser = async (token: string) => {
  return await API.get("user", {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const loginAPI = async (body: ILogin) => {
  return await API.post("login", body);
};


export const getUsers = async () => {
  return await API.get("users", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
}
