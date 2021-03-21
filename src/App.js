import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './App.scss';
import jsonLaunches from './json/dummyLaunches.json';
import jsonEvents from './json/dummyEvents.json';
import {
    setInitialized,
    setUpcomingLaunches,
    setUpcomingEvents,
} from './actions';
import {
    getUpcomingLaunches,
    getUpcomingEvents,
} from './utils/utils'
import {
    HashRouter,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import routes from './components/routes';

export const AppContent = () => {
    const initialized = useSelector(state => state.initialized);
    const dispatch = useDispatch();

    useEffect(() => {
        // Added dummy json, API is down 90% of the time
        const fetchData = async () => {
            const launches = () => getUpcomingLaunches()
                .then((response) => {
                    if (response.status === 200) {
                        dispatch(setUpcomingLaunches(response.data));
                    }
                })
                .catch(() => {
                    dispatch(setUpcomingLaunches(jsonLaunches));
                });

            const events = () => getUpcomingEvents()
                .then((response) => {
                    if (response.status === 200) {
                        dispatch(setUpcomingEvents(response.data));
                    }
                })
                .catch(() => {
                    dispatch(setUpcomingEvents(jsonEvents));
                });

            return Promise.all([launches(), events()]);
        }

        fetchData().then(() => {
            dispatch(setInitialized(true));
        });
    }, [dispatch])

    if (!initialized) {
        return null;
    }

    return (
        <HashRouter>
            <Switch>
                {routes.map((route) =>
                    <Route key={route.path} path={route.path} exact strict={route.strict} component={route.component}/>
                )}
                <Redirect to="/" />
            </Switch>
        </HashRouter>
    );
}

export default AppContent;
