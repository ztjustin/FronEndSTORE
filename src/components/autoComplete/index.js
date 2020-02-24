import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { fade, makeStyles } from '@material-ui/core/styles';
import './styles.css';


const useStyles = makeStyles(theme => ({

    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },

  }));

const AutoComplete = (props) => {

    const { suggestions, onChangeText, onChangeSelection, text } = props;
    const classes = useStyles();
    const [ isOpen, setIsOpen ] = React.useState(false);

    return (

        <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          style={{ width: '100%' }}
          onChange={(event) => {
              const newText = event.target.value;

              onChangeText(newText);

              if (!isOpen && newText) {
                setIsOpen(true);
              } else if (isOpen && !newText) {
                setIsOpen(false);
              }
          }}
          onBlur={() => {
              setTimeout(() => setIsOpen(false), 100);
          }}
          onFocus={() => {
              if (text) {
                setIsOpen(true);
              }
          }}
          onKeyPress={(event) => {
              if (event.key === 'Enter' && text) {
                  onChangeSelection(text);
              }
          }}
        />
        {isOpen &&
        <Paper className="container-results" square>
            {suggestions.map(suggestion =>
            <MenuItem
                key={suggestion.id}
                component="li"
                onClick={() => {
                    onChangeSelection(suggestion.title);
                    setIsOpen(false);
                }}
            >
                {suggestion.title}
            </MenuItem>)}
        </Paper>}
        </div>
    );
}

export default AutoComplete;