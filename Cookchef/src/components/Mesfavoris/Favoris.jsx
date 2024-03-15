import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Card, CardContent } from "@material-ui/core";
import Navbar from "../Util/navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));

const Favoris = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          Mes Favoris
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" component="h2">
                  Favori 1
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Description du favori 1
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" component="h2">
                  Favori 2
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Description du favori 2
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" component="h2">
                  Favori 3
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Description du favori 3
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Favoris;
