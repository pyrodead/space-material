import { makeStyles } from '@material-ui/core/styles';
import headerImg from '../images/header.jpg';
import headerImg2 from '../images/header2.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#181B48',
        color: '#fff',
    },
    appBar: {
        background: 'black',
        opacity: '0.5',
    },
    header: {
        background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, #181B48), url(${headerImg}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'cover',
        position: 'relative',
        width: '100%',
        '&:before': {
            backgroundColor: '#111',
            content: '',
            height: '100px',
            left: '0',
            opacity: '0.2',
            position: 'absolute',
            width: '100%',
        },
    },
    cardContent: {
        background: 'transparent',
    },
    chip: {
        [theme.breakpoints.down("xs")]: {
            padding: '10px',
        },
        [theme.breakpoints.down("md")]: {
            fontSize: '14px',
        },

    },
    offsetChip: {
        left: '50%',
        marginTop: '0',
        position: 'absolute',
        top: '-24px',
        transform: 'translateX(-50%)',
    },
    card: {
        width: '580px',
        padding: '10px',
        [theme.breakpoints.down("xs")]: {
            padding: '0',
        }
    },
    cardMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    link: {
        textDecoration: 'none',
    },
    gradient: {
        backgroundImage: 'linear-gradient(to right, #8E2DE2 0%, #4A00E0 100%)',
    },
    launchTitle: {
        fontSize: '26px',
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        paddingTop: '20px',
    }
}));

export { useStyles };
