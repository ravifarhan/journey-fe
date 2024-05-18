import API from "..";

interface IRegister {
  fullname: string;
  email: string;
  password: string;
  phone: string;
}

export const registerAPI = async (body: IRegister) => {
  try {
    return await API.post("register", body);
  } catch (error) {
    console.log(error);
  }
};
