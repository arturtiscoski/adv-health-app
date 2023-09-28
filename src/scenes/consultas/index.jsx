import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import ptbrLocale from "@fullcalendar/core/locales/pt-br";
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockDoctors } from "../../data/mockData";
import { EditOutlined } from "@mui/icons-material";
import Doctor from "../doctor";
import CalendarModal from "./components/calendarModal";

const Calendar = ({ isDashboard }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [doctorOpen, setDoctorOpen] = useState(false);
  const [selected, setSelected] = useState();
  const [selectedDay, setSelectedDay] = useState();
  const [openCalendarModal, setOpenCalendarModal] = useState(false);

  const handleDateClick = (selected) => {
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    const event = {
      calendarApi,
      start: selected.startStr,
      end: selected.endStr,
      allDay: selected.allDay,
    };

    setSelectedDay(event);
    setOpenCalendarModal(true);
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Você tem certeza que deseja deletar esta consulta? '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  const handleConsultaMarcada = (data) => {
    if (data.name) {
      const calendarApi = selectedDay.calendarApi;
      calendarApi.unselect();

      const event = {
        ...selectedDay,
        id: `${selectedDay.dateStr}-${Math.random()}`,
        title: data.name,
      };

      calendarApi.addEvent(event);
    }
    setOpenCalendarModal(false);
  };

  return (
    <Grid m="20px">
      {!isDashboard && <Header title="Gerenciamento de consultas" />}

      <Doctor
        open={doctorOpen}
        close={() => setDoctorOpen(false)}
        selected={selected}
      />

      <CalendarModal
        open={openCalendarModal}
        close={handleConsultaMarcada}
        selected={selectedDay}
      />

      <Grid container spacing={3}>
        {!isDashboard && (
          <Grid item xs={4}>
            <Grid
              maxHeight={240}
              style={{ overflowY: "scroll" }}
              item
              xs={12}
              backgroundColor={colors.primary[400]}
              p="15px"
              borderRadius="4px"
            >
              <Typography variant="h5">Médicos</Typography>
              <List>
                {mockDoctors.map((event) => (
                  <ListItem
                    key={event.id}
                    sx={{
                      backgroundColor: colors.primary[900],
                      margin: "10px 0",
                      borderRadius: "2px",
                    }}
                  >
                    <ListItemText
                      primary={event.name}
                      secondary={
                        <Typography>
                          {formatDate(event.start, {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })}
                        </Typography>
                      }
                    />
                    <IconButton
                      onClick={() => {
                        setDoctorOpen(true);
                        setSelected(event);
                      }}
                    >
                      <EditOutlined />
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid
              maxHeight={508}
              style={{ overflowY: "scroll" }}
              item
              xs={12}
              backgroundColor={colors.primary[400]}
              p="15px"
              borderRadius="4px"
              mt={1}
            >
              <Typography variant="h5">Eventos</Typography>
              <List>
                {currentEvents.map((event) => (
                  <ListItem
                    key={event.id}
                    sx={{
                      backgroundColor: colors.greenAccent[500],
                      margin: "10px 0",
                      borderRadius: "2px",
                    }}
                  >
                    <ListItemText
                      primary={event.title}
                      secondary={
                        <Typography>
                          {formatDate(event.start, {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        )}
        <Grid item xs={!isDashboard ? 8 : 12}>
          <FullCalendar
            locale={ptbrLocale}
            empty
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={!isDashboard && handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "Dr. Fictícia - Clínico Geral Paciente 15h",
                date: "2023-09-26",
              },
              {
                id: "5123",
                title: "Consulta Hublu",
                date: "2023-09-25",
              },
            ]}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Calendar;
