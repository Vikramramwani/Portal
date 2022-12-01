import React from "react";
import "../styles/Mock.css";

import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import MockTable from "./MockTable";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: 60,
    height: 60,
  },
  root2: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 650,
    margin: "auto",
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function Mock() {
  const classes = useStyles();
  const [selectedstartDate, setSelectedStartDate] = React.useState("");
  const [selectedEndDate, setSelectedEndDate] = React.useState("");
  const [selectedstarttime, setSelectedStartTime] = React.useState("");
  const [selectedendtime, setSelectedEndTime] = React.useState("");
  const [title, setTitle] = React.useState("");

  const handleSubmit = () => {
    let d = {
      title: title,
      start_date: selectedstartDate,
      end_date: selectedEndDate,
      start_time: selectedstarttime,
      end_time: selectedendtime,
    };
    console.log(title);
    console.log(selectedEndDate);
    console.log(selectedstartDate);
    console.log(selectedendtime);
    console.log(selectedEndDate);

    axios
      .post("http://localhost:8000/api/events", d)
      .then((res) => {
        console.log(res);
        setTitle("");
        setSelectedEndDate("");
        setSelectedStartDate("");
        setSelectedStartTime("");
        setSelectedEndTime("");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="discussMainContainer" style={{ height: "550px" }}>
      <div className="discussFilters" style={{ height: "550px" }}>
        <div
          style={{
            fontSize: 19,
            fontWeight: "bold",
            textAlign: "center",
            padding: 15,
          }}
        >
          Post Your Query
        </div>
        <hr className="line" />
        <div style={{ padding: 10 }}>
          <TextField
            id="outlined-basic"
            label="Heading"
            variant="outlined"
            color="secondary"
            style={{ width: "100%" }}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={title}
          />
          <TextField
            multiline
            label="Start Date"
            variant="outlined"
            color="secondary"
            style={{ width: "100%", marginTop: 20 }}
            placeholder={selectedstartDate}
            onChange={(e) => setSelectedStartDate(e.target.value)}
          />
          <TextField
            multiline
            label="End Date"
            variant="outlined"
            color="secondary"
            style={{ width: "100%", marginTop: 20 }}
            placeholder={selectedEndDate}
            onChange={(e) => setSelectedEndDate(e.target.value)}
          />
          <TextField
            multiline
            label="Start Time"
            variant="outlined"
            color="secondary"
            style={{ width: "100%", marginTop: 20 }}
            placeholder={selectedstarttime}
            onChange={(e) => setSelectedStartTime(e.target.value)}
          />
          <TextField
            multiline
            label="End Time"
            variant="outlined"
            color="secondary"
            style={{ width: "100%", marginTop: 20 }}
            placeholder={selectedendtime}
            onChange={(e) => setSelectedEndTime(e.target.value)}
          />

          <Button
            variant="contained"
            color="secondary"
            style={{ width: "100%", marginTop: 20 }}
            onClick={handleSubmit}
          >
            Post Query
          </Button>
        </div>
      </div>
      <div className="mockTableContainer">
        <MockTable />
      </div>
    </div>
  );
}

export default Mock;
