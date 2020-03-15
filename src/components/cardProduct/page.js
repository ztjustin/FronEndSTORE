import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({

    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    }

  }));

const Page = (props) => {

    const { card } = props;

    const classes = useStyles();

    return (
        <Fragment>
            
                <Grid item  xs={12} sm={12} md={4}>
                        <Card className={classes.card}>
                          <CardMedia
                            className={classes.cardMedia}
                            image= {card.urlImage}
                            title={card.name}
                          />
                          <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                              {card.name}
                            </Typography>
                            <Typography>
                              {card.description}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small" color="primary">
                              <AddShoppingCartIcon/> Add to Cart
                            </Button>
                            <Button size="small" color="primary">
                              Give Start
                            </Button>
                          </CardActions>
                        </Card>
                </Grid>


        </Fragment>
    );
}

export default Page;