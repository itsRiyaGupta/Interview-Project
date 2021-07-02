import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";



import './App.css';

export default function App() {
  
  return (
    <div>
    <div className="borrder"></div>
    <div><div className="row">
    <div className="container"></div>
    </div>
    <div className="col-lg-4">
          <p>Today</p>
          <h4>Projects</h4>
          <p>Welcome</p>
          <p>Try Boards</p>
          <p>Trail A</p>
          <h4>Archived projects</h4>
          <h4>Labels</h4>
          <p>asd</p>
          <p>Label-projects?</p>
          <p>Shared</p>
          <p>Postman</p>
          <h3>Filters</h3>
          <p>Assigned to me</p>
          <p>Priority 1</p>


    </div>
    </div>

       
    <div style={{}}>
      <h1>Try Boards</h1>
      <h6>To do 2</h6>
      <h6>Doing 1</h6>
      <h6>Done 0</h6>
      <Card
        style={{
          width: 400,
          backgroundColor: "white",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            This is a task. Drag it to the 'Doing' section
          </Typography>
          {/* <Typography variant="h5" component="h2">
            How are you ?
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            Keep Motivated
          </Typography>
          <Typography variant="body2" component="p">
            Stay Happy
          </Typography> */}
        </CardContent>
        {/* <CardActions>
          <Button size="small">Stay Safe.....</Button>
        </CardActions> */}
      </Card><br/>

      <Card
        style={{
          width: 400,
          backgroundColor: "white",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
           Lagan
          </Typography>
          {/* <Typography variant="h5" component="h2">
            How are you ?
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            Keep Motivated
          </Typography>
          <Typography variant="body2" component="p">
            Stay Happy
          </Typography> */}
        </CardContent>
        {/* <CardActions>
          <Button size="small">Stay Safe.....</Button>
        </CardActions> */}
      </Card>
      <p>Add task</p> 
      <Card
        style={{
          width: 400,
          backgroundColor: "grey",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
           Add section
          </Typography>
          {/* <Typography variant="h5" component="h2">
            How are you ?
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
                   }}
            color="textSecondary"
          >
            Keep Motivated
          </Typography>
          <Typography variant="body2" component="p">
            Stay Happy
          </Typography> */}
        </CardContent>
        {/* <CardActions>
          <Button size="small">Stay Safe.....</Button>
        </CardActions> */}
      </Card>

      <p>Add task</p>

      <Card
        style={{
          width: 400,
          backgroundColor: "white",
        }}
      ><br/><br/>
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
         Help me please
          </Typography>
          {/* <Typography variant="h5" component="h2">
            How are you ?
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
                  >
            Keep Motivated
          </Typography>
          <Typography variant="body2" component="p">
            Stay Happy
          </Typography> */}
        </CardContent>
        {/* <CardActions>
          <Button size="small">Stay Safe.....</Button>
        </CardActions> */}
      </Card>
      <p>Add task</p>
    </div>
    </div>
  );
}