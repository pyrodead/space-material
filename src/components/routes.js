import HomePage from "./HomePage";
import LaunchPage from "./LaunchPage";

const routes = [
    {
        path: '/',
        component: HomePage,
        strict: true,
    },
    {
        path: '/launch/:launchId',
        component: LaunchPage,
    },
];

export default routes;