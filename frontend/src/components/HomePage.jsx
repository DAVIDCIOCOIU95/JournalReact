import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./Note";
import NoteTest from "./NoteTest";
import { makeStyles } from "@material-ui/core/styles";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '20px',
    maxWidth: '100%'
  },
  card: {
    
  }
}));

export default function HomePage(props) {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function onDelete(id) {
    console.log("on delete");
    setData((prev) => {
      return prev.filter((item) => {
        return item._id !== id;
      });
    });
  }

  return (
    <div >
    <Container className={classes.root}>
    <Row>
      {data.map((item) => {
        return (
          <Col xs={12} md={4} lg={3}>
          <NoteTest
            onDelete={onDelete}
            key={item._id}
            id={item._id}
            title={item.title}
            body={item.body}
          />
          </Col>
        );
      })}
      </Row>
      </Container>
    </div>
  );
}
