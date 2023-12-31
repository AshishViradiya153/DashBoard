import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import Grid from "@mui/material/Unstable_Grid2";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { formatDate } from "@fullcalendar/core";

import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const Header = ({ title }) => {
  return (
    <Box mb="30px">
      <Typography
        variant="h5"
        sx={{ mb: "5px", fontFamily: "Montserrat !important" }}
      >
        {title}
      </Typography>
    </Box>
  );
};
const EventManagement = () => {
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="Calendar" />
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <Box p="15px" borderRadius="4px" sx={{ backgroundColor: "#e1e1e1" }}>
            <Typography
              style={{ fontFamily: "Montserrat !important", fontSize: "18px" }}
            >
              Events
            </Typography>
            <List>
              {currentEvents.map((event) => (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: "#84c2ff",
                    margin: "10px 0",
                    color: "black",
                    fontFamily: "Montserrat !important",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    style={{ fontFamily: "Montserrat !important" }}
                    primary={event.title}
                    secondary={
                      <Typography
                        style={{ fontFamily: "Montserrat !important" }}
                      >
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid xs={12} md={8}>
          <Box>
            <FullCalendar
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
              select={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={(events) => setCurrentEvents(events)}
              initialEvents={[
                {
                  id: "12315",
                  title: "Dinner",
                  date: "2023-08-01",
                },
                {
                  id: "5123",
                  title: "Meeting",
                  date: "2023-08-01",
                },
              ]}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventManagement;
