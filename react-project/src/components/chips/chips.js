import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import * as Icons from '@material-ui/icons';

import SimpleTab from '../tab/SimpleTab'

const styles = theme => ({
  root: {
    marginTop: 50,
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip1: {
    margin: theme.spacing.unit,
    backgroundColor: "#CDDC39"
  },
  chip2: {
    margin: theme.spacing.unit,
    backgroundColor: "#119D4D"
  },
  chip3: {
    margin: theme.spacing.unit,
    backgroundColor: "#E820E8"
  },
  chip4: {
    margin: theme.spacing.unit,
    backgroundColor: "#6BBAEF"
  },
  chip: {
    margin: theme.spacing.unit
}
});


function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

function chips(props) {
  const { classes } = props;
  const SnowIcon = Icons['AcUnit'];
  const BedIcon = Icons['AirlineSeatFlatSharp'];
  const FlagIcon = Icons['AssistantPhoto'];
  const BatteryIcon = Icons['BatteryCharging60Rounded'];
  const BlueToothIcon = Icons['BluetoothDisabledTwoTone'];
  const ClockIcon = Icons['AddAlarmTwoTone'];
  const MailIcon = Icons['EmailRounded'];
  let output = (
    <div className={classes.root}>
      <Chip label="Color Chip" className={classes.chip1} />
      <Chip label="Color Chip" className={classes.chip2} />
      <Chip label="Color Chip" className={classes.chip3} />
      <Chip label="Color Chip" className={classes.chip4} />
      <Chip
        avatar={<Avatar>CH</Avatar>}
        label="Click Me"
        onClick={handleClick}
        className={classes.chip}
      />
      <Chip
        avatar={
          <Avatar>
            <SnowIcon />
          </Avatar>
        }
        label="Clickable  Chip"
        onClick={handleClick}
        className={classes.chip}
        color = "primary"
      />
      <Chip
        icon={<BedIcon />}
        label="Clickable Chip #2"
        onClick={handleClick}
        className={classes.chip}
      />
      <Chip
        icon={<FlagIcon />}
        label="Clickable Chip #3"
        onClick={handleClick}
        className={classes.chip}
        color = "secondary"
      />
      <Chip
        label="Clickable Chip Only"
        className={classes.chip2}
        onClick={handleClick}
        clickable
      />
      <Chip
        avatar={<Avatar>RY</Avatar>}
        label="Have A Good Day"
        clickable
        className={classes.chip}
        color="primary"

      />
      <Chip
        icon={<BatteryIcon />}
        label="Default Primary Color"
        className={classes.chip}
        color="primary"
        onClick={handleClick}

      />
      <Chip
        icon = {<BlueToothIcon />}
        label="Default Secondary Color"
        className={classes.chip}
        color="secondary"
        onClick={handleClick}
      />
      <Chip
        icon = {<ClockIcon />}
        label="More Example"
        className={classes.chip}
      />
      <Chip
        icon = {<MailIcon />}
        label="You Have New Emails"
        className={classes.chip4}
        onClick={handleClick}
      />
    </div>
  );

  let usage = `
    import Avatar from '@material-ui/core/Avatar';
    import Chip from '@material-ui/core/Chip';
    return (
      <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Your text"
        onClick={Your click func}
      />
      <Chip
        icon={Your icon}
        label="Your text"
        onDelete={Your delete func}
        color="Your color"
      />
    );`;

  return (
    <div>
        <SimpleTab data={['Chips', output, usage]} />
    </div>
  );
}

export default withStyles(styles)(chips);