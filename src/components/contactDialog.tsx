import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

interface IContactDialogProps {
  open: boolean;
  onClose: () => void;
}

const ContactDialog = (props: IContactDialogProps) => {
  const { t } = useTranslation();
  const serviceId = import.meta.env.EMAILJS_SERVICEID;
  const templateId = import.meta.env.EMAILJS_TEMPLATEID;
  const publicKey = import.meta.env.EMAILJS_PUBLICKEY;

  const textFieldSx = {
    "& .MuiInputLabel-root": { color: "#c9bdbdff" },
    "& .MuiOutlinedInput-root": {
      color: "#c9bdbdff",
      "& fieldset": {
        borderColor: "#c9bdbdff",
      },
      "&:hover fieldset": {
        borderColor: "#c9bdbdff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#c9bdbdff",
      },
    },
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = async () => {
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        publicKey
      );
      alert(t("contactDialog.success"));
      props.onClose();
    } catch (error) {
      alert(t("contactDialog.error"));
    }
  };

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!form.email || !form.subject || !form.message);
  }, [form.email, form.subject, form.message]);

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="contact-dialog-title"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle
        id="contact-dialog-title"
        sx={{ backgroundColor: "#111", color: "#c9bdbdff" }}
      >
        {t("contactDialog.title")}
      </DialogTitle>

      <DialogContent
        sx={{
          backgroundColor: "#111",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          paddingTop: "20px",
          color: "#c9bdbdff",
        }}
      >
        <TextField
          label={t("contactDialog.name")}
          name="name"
          required
          fullWidth
          variant="outlined"
          sx={textFieldSx}
          value={form.name}
          onChange={handleChange}
        />

        <TextField
          label={t("contactDialog.email")}
          type="email"
          name="email"
          required
          fullWidth
          variant="outlined"
          sx={textFieldSx}
          value={form.email}
          onChange={handleChange}
        />

        <TextField
          label={t("contactDialog.subject")}
          name="subject"
          required
          fullWidth
          sx={textFieldSx}
          value={form.subject}
          onChange={handleChange}
        />

        <TextField
          label={t("contactDialog.message")}
          name="message"
          required
          multiline
          rows={4}
          fullWidth
          sx={textFieldSx}
          value={form.message}
          onChange={handleChange}
        />
      </DialogContent>

      <DialogActions sx={{ backgroundColor: "#111" }}>
        <Button onClick={props.onClose} sx={{ color: "#aaa" }}>
          {t("contactDialog.cancel")}
        </Button>
        <Button variant="contained" onClick={handleSend} disabled={isDisabled}>
          {t("contactDialog.send")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactDialog;
