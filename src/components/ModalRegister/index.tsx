import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { registerAPI } from "../../libs/api/call/register";

interface IModalRegister {
  open: boolean;
  handleClose: () => void;
}

const ModalRegister: React.FC<IModalRegister> = ({ open, handleClose }) => {
  const [formRegister, setFormRegister] = useState<{
    fullname: string;
    email: string;
    password: string;
    phone: string;
  }>({
    fullname: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormRegister({ ...formRegister, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await registerAPI(formRegister);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Register</DialogTitle>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", gap: 1, width: 300 }}
      >
        <label htmlFor="fullname">Fullname</label>
        <TextField
          id="fullname"
          name="fullname"
          size="small"
          type="text"
          fullWidth
          variant="outlined"
          value={formRegister.fullname}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <TextField
          id="email"
          name="email"
          size="small"
          type="email"
          fullWidth
          variant="outlined"
          value={formRegister.email}
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
          value={formRegister.password}
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone</label>
        <TextField
          id="phone"
          name="phone"
          size="small"
          type="text"
          fullWidth
          variant="outlined"
          value={formRegister.phone}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" sx={{}}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          size="small"
          variant="contained"
          color="primary"
          sx={{
            fontWeight: "bold",
            textTransform: "none",
            color: "white",
            // width: "100px",
          }}
        >
          Register
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalRegister;
