import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import ReplyIcon from "@material-ui/icons/Reply";
import axios from "axios";
import ConnectCard from "./ConnectCard";

import "../styles/Discuss.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 800,
    margin: "auto",
    marginTop: 50,
    marginBottom: 40,
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

function Discuss() {
  const [dat, setDat] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/query")
      .then((res) => {
        console.log(res.data.students);
        setDat(res.data.students);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [title, content]);

  const submitdetails = () => {
    let x = title;
    setTitle(x);
    let d = {
      title: title,
      content: content,
    };
    axios
      .post("http://localhost:8000/api/query", d)
      .then((res) => {
        console.log(res);
        setTitle("");
        setContent("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

    
    const classes = useStyles();
    return (
        
   <>
        <div>
        <div className="mockHome">
            <div className="mockLeft">
                <img src={require('../assests/img3.png')} height="300px" />
            </div>
            <div className="mockRight">
                <div className="mockHeading">Mentorship</div>
                <div className="mockIntro">Interactive discussion forum between students and alumni.</div>
                {/* <Button variant="contained" color="primary"> Mentoring</Button> */}
                <Button 
                  variant="contained" 
                  color="secondary"
                  style = {{width: '25%', marginTop: 20}}
                //   onClick={submitdetails}
                  >Mentoring</Button>
            </div>
        </div>
        
      </div>

      <div className="discussMainContainer">
        <div className="discussFilters">
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
              label="Content"
              variant="outlined"
              color="secondary"
              style={{ width: "100%", marginTop: 20 }}
              placeholder={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <Button
              variant="contained"
              color="secondary"
              style={{ width: "100%", marginTop: 20 }}
              onClick={submitdetails}
            >
              Post Query
            </Button>
          </div>
        </div>

        <div className="discussContainer">
          {dat.map((ele) => (
            <>
              <div
                style={{ padding: 10, display: "flex", alignItems: "center" }}
              >
                <div style={{ flex: 1 }}>
                  {ele.title}
                  <br />
                  <br />
                  {ele.content}
                </div>
                <div>
                  <span style={{ fontSize: 14, color: "rgb(144, 144, 144)" }}>
                    3 replies till now{" "}
                  </span>
                  &nbsp; &nbsp;
                  <Button variant="outlined" color="secondary">
                    <ReplyIcon />
                    Reply
                  </Button>
                </div>
              </div>
              <hr className="line" />
            </>
          ))}
        </div>
      </div>
      </>
  );
}

export default Discuss;
