import { lighten, makeStyles } from '@material-ui/core/styles';

export const enhancedTableStyle = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  arrows:{
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '5px'
  },
  arrow: {
    fontSize: '0.55rem !important',
    color: '#9ea0a5'
  },
  tableHead: {
    fontWeight: 600,
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  searchIconWrapper: {
    display: 'flex',
    padding: '5px',
    cursor: 'pointer',
    borderRadius: '100%',
    '&:hover': {
      backgroundColor: '#f9fafb',
      '&& svg': {
        color: '#ff6f34'
      }
    }
  },
  sortTable: {
    cursor: 'pointer',
    fontSize: '14px',
    display: 'inline-flex',
    justifyContent: 'flex-start',
    flexDirection: 'inherit',
    alignItems: 'center',
    '&:focus': {
      color: theme.palette.text.primary,
    },
    '&:hover': {
      '&& $icon': {
        opacity: '0 !important',
        display: 'none'
      },
    },
    '&$active': {
      color: theme.palette.text.primary,
      '&& $icon': {
        opacity: 1,
        color: theme.palette.text.secondary,
      },
    },
  },
  adornedStart: {
    paddingRight: '20px',
    color: '#9ea0a5'
  },
  /* Pseudo-class applied to the root element if `active={true}`. */
  activeSearch: {
    backgroundColor: '#f9fafb',
    '&& svg': {
      color: '#ff6f34'
    }
  },
  /* Styles applied to the icon component. */
  icon: {
    fontSize: 18,
    marginRight: 4,
    marginLeft: 4,
    opacity: 0,
    transition: theme.transitions.create(['opacity', 'transform'], {
      duration: theme.transitions.duration.shorter,
    }),
    userSelect: 'none',
  },
  /* Styles applied to the icon component if `direction="desc"`. */
  iconDirectionDesc: {
    transform: 'rotate(0deg)',
  },
  /* Styles applied to the icon component if `direction="asc"`. */
  iconDirectionAsc: {
    transform: 'rotate(180deg)',
  },
}));

export const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
        theme.palette.type === 'light'
          ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
          : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
  title: {
    flex: '1 1 100%',
  },
}));
   