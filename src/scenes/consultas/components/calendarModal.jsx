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
import styles from "../../../components/styles";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CalendarModal = ({ open, close, selected }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (a) => {
    close(a);
    toast.success("Consulta marcada com sucesso!");
  };

  useEffect(() => {
    reset(selected);
  }, [selected]);

  return (
    <Dialog open={open} onClose={close} maxWidth="lg">
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid container item xs={12} justifyContent="space-between">
              <Grid container direction="row" className={styles.mainHeader}>
                <Grid item xs={11.6}>
                  <Typography className={styles.primaryColor} variant="h4">
                    Consulta
                  </Typography>
                </Grid>
                <Grid item xs={0.4}>
                  <IconButton onClick={close}>
                    <Close />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid container spacing={1} item xs={5.8}>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={7}>
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Paciente"
                    id="name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span>Paciente é obrigatório!</span>}
                </Grid>
                <Grid item xs={5}>
                  <ReactInputMask
                    fullWidth
                    mask={"999.999.999-99"}
                    alwaysShowMask={false}
                    type={"text"}
                    margin="dense"
                    variant="outlined"
                    label="CPF"
                    id="cpf"
                  >
                    {() => (
                      <TextField
                        fullWidth
                        margin="dense"
                        variant="outlined"
                        label="CPF"
                        id="cpf"
                      />
                    )}
                  </ReactInputMask>
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Email"
                    id="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span>Email é obrigatório!</span>}
                </Grid>
                <Grid item xs={5}>
                  <ReactInputMask
                    fullWidth
                    mask={"(99) 99999-9999"}
                    alwaysShowMask={false}
                    type={"text"}
                    margin="dense"
                    variant="outlined"
                    label="Telefone"
                    id="phone"
                  >
                    {() => (
                      <TextField
                        fullWidth
                        margin="dense"
                        variant="outlined"
                        label="Telefone"
                        id="phone"
                      />
                    )}
                  </ReactInputMask>
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Idade"
                    id="age"
                    {...register("age", { required: true })}
                  />
                  {errors.age && <span>Idade é obrigatório!</span>}
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Agendado para"
                    id="scheduledAt"
                    {...register("scheduledAt", { required: true })}
                  />
                  {errors.scheduledAt && (
                    <span>Agendamento é obrigatório!</span>
                  )}
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Valor"
                    id="value"
                    {...register("value", { required: true })}
                  />
                  {errors.value && <span>Valor é obrigatório!</span>}
                </Grid>
                <Grid item xs={7}>
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Médico"
                    id="doctor"
                    {...register("doctor", { required: true })}
                  />
                  {errors.doctor && <span>Médico é obrigatório!</span>}
                </Grid>
              </Grid>
              <Grid container spacing={1} item xs={6}>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="CEP"
                    id="cep"
                    {...register("cep", { required: true })}
                  />
                  {errors.name && <span>CEP é obrigatório!</span>}
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Endereço"
                    id="endereco"
                    {...register("endereco", { required: true })}
                  />
                  {errors.name && <span>Endereço é obrigatório!</span>}
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="N° Residência"
                    id="nresidencia"
                    {...register("nresidencia")}
                  />
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Complemento"
                    id="complemento"
                    {...register("complemento")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Bairro"
                    id="bairro"
                    {...register("bairro", { required: true })}
                  />
                  {errors.name && <span>Bairro é obrigatório!</span>}
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Cidade"
                    id="cidade"
                    {...register("cidade", { required: true })}
                  />
                  {errors.name && <span>Cidade é obrigatório!</span>}
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Estado"
                    id="uf"
                    {...register("uf", { required: true })}
                  />
                  {errors.name && <span>UF é obrigatório!</span>}
                </Grid>
              </Grid>
              <Grid container justifyContent="flex-end">
                <Button type="submit">Enviar</Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarModal;
