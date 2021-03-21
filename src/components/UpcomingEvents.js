import { connect } from "react-redux";
import { createDateAsUTC } from "../utils/utils";
import placeholder from "../images/placeholder1.png";
import Shifter from './Shifter';
import {
    Card,
    CardMedia,
    CardContent,
    Chip,
    Typography,
} from '@material-ui/core';
import { useStyles } from "./Styles";
import PropTypes from "prop-types";

export const UpcomingEventsContent = (props) => {
    const { upcomingEvents } = props;
    const classes = useStyles();

    return (
        <div className="sl-shifter-container">
            <div className="sl-title -left -indent-left">Upcoming Events</div>
            <Shifter>
                {
                    upcomingEvents.results.map((item) => (
                        <Card key={item.id} className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={item.feature_image}
                            />
                            <CardContent>
                                <Chip className={classes.chip} label={createDateAsUTC(item.date)} />
                                <div className="sl-events-title -indent-top">{item.name}</div>
                            </CardContent>
                        </Card>
                    ))
                }
            </Shifter>
        </div>
    );
}

UpcomingEventsContent.propTypes = {
    upcomingEvents: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    upcomingEvents: state.upcomingEvents,
})

export default connect(mapStateToProps)(UpcomingEventsContent);