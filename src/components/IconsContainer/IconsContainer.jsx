import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTelegram,
  faTwitter,
  faDiscord,
  faFacebook,
  faWeixin,
  faLinkedin,
  faGithub,
  faReddit,
  faSlack,
} from '@fortawesome/free-brands-svg-icons';
import variables from '../../styles/variables.scss';

// "bitcointalk": "",
// "blog": "",
// "email": "",
// "website": "https://www.youtube.com/",
// "whitepaper": ""

// осталось добавить ^ выше элементы

export const IconsContainer = ({ icons }) => {
  return (
    <Grid container spacing={2.5} columns={4}>
      {icons?.telegram && (
        <Grid item>
          <FontAwesomeIcon
            icon={faTelegram}
            size="xl"
            style={{ color: variables.colorGrayNeutral }}
          />
        </Grid>
      )}
      {icons?.twitter && (
        <Grid item>
          <FontAwesomeIcon
            icon={faTwitter}
            size="xl"
            style={{ color: variables.colorGrayNeutral }}
          />
        </Grid>
      )}
      {icons?.discord && (
        <Grid item>
          <FontAwesomeIcon
            icon={faDiscord}
            size="xl"
            style={{ color: variables.colorGrayNeutral }}
          />
        </Grid>
      )}
      {icons?.facebook && (
        <Grid item>
          <FontAwesomeIcon
            icon={faFacebook}
            size="xl"
            style={{ color: variables.colorGrayNeutral }}
          />
        </Grid>
      )}
      {icons?.wechat && (
        <Grid item>
          <FontAwesomeIcon
            icon={faWeixin}
            size="xl"
            style={{ color: variables.colorGrayNeutral }}
          />
        </Grid>
      )}
      {icons?.linkedin && (
        <Grid item>
          <FontAwesomeIcon
            icon={faLinkedin}
            size="xl"
            style={{ color: variables.colorGrayNeutral }}
          />
        </Grid>
      )}
      {icons?.github && (
        <Grid item>
          <FontAwesomeIcon
            icon={faGithub}
            size="xl"
            style={{ color: variables.colorGrayNeutral }}
          />
        </Grid>
      )}

      {icons?.reddit && (
        <Grid item>
          <FontAwesomeIcon
            icon={faReddit}
            size="xl"
            style={{ color: variables.colorGrayNeutral }}
          />
        </Grid>
      )}

      {icons?.slack && (
        <Grid item>
          <FontAwesomeIcon
            icon={faSlack}
            size="xl"
            style={{ color: variables.colorGrayNeutral }}
          />
        </Grid>
      )}
    </Grid>
  );
};
