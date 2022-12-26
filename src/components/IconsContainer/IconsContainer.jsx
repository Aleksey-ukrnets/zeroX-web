import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTelegram,
  faTwitter,
  faDiscord,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import variables from '../../styles/variables.scss';

export const IconsContainer = () => {
  return (
    <Grid container spacing={2.5} columns={4}>
      <Grid item>
        <FontAwesomeIcon
          icon={faTelegram}
          size="xl"
          style={{ color: variables.colorGrayNeutral }}
        />
      </Grid>

      <Grid item>
        <FontAwesomeIcon
          icon={faTwitter}
          size="xl"
          style={{ color: variables.colorGrayNeutral }}
        />
      </Grid>
      <Grid item>
        <FontAwesomeIcon
          icon={faDiscord}
          size="xl"
          style={{ color: variables.colorGrayNeutral }}
        />
      </Grid>
      <Grid item>
        <FontAwesomeIcon
          icon={faFacebook}
          size="xl"
          style={{ color: variables.colorGrayNeutral }}
        />
      </Grid>
    </Grid>
  );
};
