import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { getUser, loginAPI } from "../../libs/api/call/user";
import { useAppDispatch } from "../../store";
import { SET_LOGIN } from "../../store/slice/auth";

interface IModalLogin {
  open: boolean;
  handleClose: () => void;
}

const ModalLogin: React.FC<IModalLogin> = ({ open, handleClose }) => {
  const dispatch = useAppDispatch();
  const [formLogin, setformLogin] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setformLogin({ ...formLogin, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await loginAPI(formLogin);
      const token = res.data.data;
      const user = await getUser(token);

      localStorage.setItem("token", token);
      dispatch(SET_LOGIN({ user: user.data.data, token }));
      handleClose();

      console.log(res);
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", gap: 1, width: 300 }}
      >
        <label htmlFor="email">Email</label>
        <TextField
          id="email"
          name="email"
          size="small"
          type="email"
          fullWidth
          variant="outlined"
          value={formLogin.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <TextField
          id="password"
          name="password"
          size="small"
          type="password"
          fullWidth
          variant="outlined"
          value={formLogin.password}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button type="submit" onClick={handleSubmit} color="primary">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalLogin;
