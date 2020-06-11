import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";
import { CardHeader } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "inline-block",
    margin: "10px",
    borderRadius: "7px",
    boxShadow: "0 2px 5px #ccc",
    padding: "10px",
    minWidth: "220px",
    border: 0,
    backgroundColor: "#f1f2ff",
    padding: 0
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    paddingBottom: "5px",
    backgroundColor: 'white',
    padding: 0
  },
  buttonDelete: {
    justifyContent: "center",
    backgroundColor: "#22aab2",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  let [data, setData] = useState(() => {
    const initialState = props;
    return initialState;
  });

  function onClick(event) {
    // call delete
    event.preventDefault();
    let id = data.id;
    Axios.delete(`http://localhost:5000/controls/delete/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    props.onDelete(data.id);
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <div ><Typography
          align="center"
          variant="h1"
          className={classes.title}
          gutterBottom
        >
          {data.title}
        </Typography>
        </div>
     
        <Typography align="center" variant="body2" component="p">
          {data.body}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <form>
          <Button
            onClick={onClick}
            className={classes.buttonDelete}
            style={{ alignSelf: "center" }}
            align="right"
            variant="contained"
            size="small"
            value={data}
          >
            Delete
          </Button>
        </form>
      </CardActions>
    </Card>
  );
}
