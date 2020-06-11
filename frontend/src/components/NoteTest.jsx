import React, {useState, useEffect} from 'react';
import Axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 'auto',
    minWidth: "220px",
    margin: "10px",
    display: 'inline-block',
    backgroundColor: '#fafafa'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}));

export default function NoteCard(props) {
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
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.title}
        subheader={data.date}
      />
      {/* <CardMedia
        className={classes.media}
        
      /> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.body}
        </Typography>
      </CardContent>
      <CardActions className={classes.button}>
        <IconButton aria-label="edit">
        <EditIcon />
        </IconButton>
        <IconButton aria-label="delete">
        <DeleteIcon onClick={onClick}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
