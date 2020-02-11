import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import SimpleTab from '../tab/SimpleTab'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    color: theme.palette.primary.dark
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: 20,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.grey['100'],
    },
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('United States(USA)', 46, 37, 38, 121),
  createData(' Great Britain (GBR)', 27, 23, 17, 67),
  createData('China (CHN)', 26, 18, 26, 70),
  createData('Russia (RUS)', 19, 17, 20, 56),
  createData('Germany (GER)', 17, 10, 15, 42),
];

function table(props) {
  const { classes } = props;

  let output = (<Paper className={classes.root} elevation={20}>
      <h1 className = "table-title"><b>2016 Summer Olympics Medal Table (ranked by gold metals)</b></h1>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Nations or Regions</CustomTableCell>
            <CustomTableCell align="right">Gold</CustomTableCell>
            <CustomTableCell align="right">Silver</CustomTableCell>
            <CustomTableCell align="right">Bronze</CustomTableCell>
            <CustomTableCell align="right">Total</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className = {classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.name}
              </CustomTableCell>
              <CustomTableCell align="right">{row.calories}</CustomTableCell>
              <CustomTableCell align="right">{row.fat}</CustomTableCell>
              <CustomTableCell align="right">{row.carbs}</CustomTableCell>
              <CustomTableCell align="right">{row.protein}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>);

    let usage = `
    import Table from '@material-ui/core/Table';
      <Table>
        <TableHead>
          <TableRow>
          {Your head}
          </TableRow>
        </TableHead>
       <TableBody>
         {inputData}
       </TableBody>
     </Table>`;

    return(
      <div>
          <SimpleTab data={['Table', output, usage]} />
      </div>
    );
}


export default withStyles(styles)(table);