import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import Button from '@material-ui/core/Button';
import Cardproduct from '../cardProduct';
import AppBar from '../appBar';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    content: {
      flexGrow: 1,
      marginTop: theme.spacing(0),
      padding: theme.spacing(2),
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    pagination: {
      '& > *': {
        marginBottom: theme.spacing(2),
      },
    },


  }));


const Page = (props) => {

    const classes = useStyles();

    const { newproducts, totalPages , onChange   } = props;


    return (

        <div className={classes.root}>

            <AppBar />


            <main className={classes.content}>
                  
                  <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Album layout
                      </Typography>
                      <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Something short and leading about the collection below—its contents, the creator, etc.
                        Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                        entirely.
                      </Typography>
                      <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                          <Grid item>
                            <Button variant="contained" color="primary">
                              Log In
                            </Button>
                          </Grid>
                          <Grid item>
                            <Button variant="outlined" color="primary">
                              Sign Up
                            </Button>
                          </Grid>
                        </Grid>
                      </div>

                    </Container>
                  </div>
                  <Grid >
                  <Grid item xs={12} sm={12} md={12} className={classes.pagination}>
                    {/* There is already an h1 in the page, let's not duplicate it. */}
                    <Typography variant="h2" component="h2">
                      New Products
                    </Typography>
                    <Pagination count={totalPages} onChange={onChange}  color="secondary" />
                  </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                      {newproducts === undefined ? 
                        // eslint-disable-next-line array-callback-return
                        null :  newproducts.map(card =><Cardproduct card={card}/>) }
                  </Grid>

            </main> 
  
        </div>

    );
}

export default Page;