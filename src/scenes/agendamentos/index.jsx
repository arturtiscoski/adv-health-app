import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid, ptBR } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockAgendamentos } from "../../data/mockData";
import Header from "../../components/Header";
import { DeleteOutline, EditOutlined, Close } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { toast } from "react-toastify";
import styles from "../../components/styles";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState();
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Paciente",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "cpf",
      headerName: "CPF",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Telefone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "scheduledAt",
      headerName: "Horário",
      flex: 1,
    },
    {
      field: "doctor",
      headerName: "Doutor(a)",
      flex: 1,
      renderCell: (params) => params.formattedValue.name,
    },
    {
      field: "",
      headerName: "",
      sortable: false,
      renderCell: (data) => (
        <Box>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
              setSelected(data.row);
            }}
          >
            <EditOutlined />
          </IconButton>
          <IconButton onClick={(e) => e.stopPropagation()}>
            <DeleteOutline />
          </IconButton>
        </Box>
      ),
    },
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (a) => {
    setOpen(false);
    toast.success("Editado com sucesso!");
  };

  useEffect(() => {
    if (selected && selected.doctor) {
      const toBeReseted = { ...selected, doctor: selected.doctor.name };
      reset(toBeReseted);
    }
  }, [selected]);

  return (
    <Box m="20px">
      <Header
        title="AGENDAMENTOS"
        subtitle="Consulta de agendamentos e pacientes agendados"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <Dialog open={open} onClose={handleClose} maxWidth="md">
          <DialogContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container direction="row" className={styles.mainHeader}>
                    <Grid item xs={11.5}>
                      <Typography className={styles.primaryColor} variant="h4">
                        Detalhes agendamento
                      </Typography>
                    </Grid>
                    <Grid item xs={0.5}>
                      <IconButton onClick={() => setOpen(false)}>
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
                        {...register("cpf", { required: true })}
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
                    <Grid item xs={6}>
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
                      <TextField
                        fullWidth
                        margin="dense"
                        variant="outlined"
                        label="Telefone"
                        id="phone"
                        {...register("phone", { required: true })}
                      />
                      {errors.phone && <span>Telefone é obrigatório!</span>}
                    </Grid>
                    <Grid item xs={1}>
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
                    <Grid container justifyContent="flex-end">
                      <Button type="submit">Enviar</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
        </Dialog>
        <DataGrid
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          checkboxSelection
          rows={mockAgendamentos}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Team;
