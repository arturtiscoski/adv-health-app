import { Close } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import ReactInputMask from "react-input-mask";
import styles from "../../components/styles";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Doctor = ({ open, close, selected }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (a) => {
    close();
    toast.success("Periodo de ausência alterado com sucesso!");
  };

  useEffect(() => {
    reset(selected);
  }, [selected]);

  return (
    <Dialog open={open} onClose={close} maxWidth="md">
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container direction="row" className={styles.mainHeader}>
                <Grid item xs={11.5}>
                  <Typography className={styles.primaryColor} variant="h4">
                    Detalhes médico
                  </Typography>
                </Grid>
                <Grid item xs={0.5}>
                  <IconButton onClick={close}>
                    <Close />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                className={styles.mainContent}
                spacing={1}
              >
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={7}>
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Nome"
                    id="name"
                    disabled
                    {...register("name")}
                  />
                </Grid>
                <Grid item xs={5}>
                  <ReactInputMask
                    fullWidth
                    mask={"999999"}
                    alwaysShowMask={false}
                    type={"text"}
                    margin="dense"
                    variant="outlined"
                    label="CRM"
                    id="crm"
                    disabled
                    {...register("crm")}
                  >
                    {() => (
                      <TextField
                        fullWidth
                        margin="dense"
                        variant="outlined"
                        label="CRM"
                        id="crm"
                        disabled
                        {...register("crm")}
                      />
                    )}
                  </ReactInputMask>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Especialidade"
                    id="specialty"
                    disabled
                    {...register("specialty")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="dense"
                    variant="outlined"
                    label="Ausente até"
                    id="awayUntil"
                    {...register("awayUntil")}
                  />
                </Grid>
                <Grid container justifyContent="flex-end">
                  <Button type="submit">Enviar</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Doctor;
