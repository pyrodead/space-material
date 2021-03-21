import Footer from './Common/Footer';
import UpcomingLaunches from "./UpcomingLaunches";
import UpcomingEvents from "./UpcomingEvents";
import { useStyles } from "./Styles";
import {
    Container,
    CssBaseline,
    Toolbar,
} from '@material-ui/core';

const HomePage = () => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline/>
            <header className={classes.header}>
                <Toolbar />
                <Container maxWidth="lg">
                    <div className="sl-header-content">
                        <div className='sl-logo' />
                        <div className='title'>
                            Upcoming Spaceflight Launches
                        </div>
                        <div className='sl-subtitle'>
                            View all launches available - including launches from the past and utilize powerful search filters.
                        </div>
                        <button className="sl-btn -indent-top">
                            Show All Launches
                        </button>
                    </div>
                </Container>
            </header>
            <main className="sl-content-wrapper">
                <Container maxWidth="lg">
                    <UpcomingEvents />
                    <UpcomingLaunches />
                </Container>
            </main>
            <Footer/>
        </>
    );
};

export default HomePage;