import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 75,
    },
    columns:{
        maxWidth: 30,
    }
  });

function Tables({table, name}) {
    const classes = useStyles();

    function range(size, startAt = 0) {
        return [...Array(size).keys()].map(i => i + startAt);
    }

    return (
        <div className={'table-div'}>
            <h3>{name}</h3>
            <TableContainer component={Paper} className={classes.table}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.columns}></TableCell>
                            {range(table[0].length).map((subitems, idx) => {
                                return <TableCell align="right" className={classes.columns}>R{+ String(subitems)}</TableCell>
                            })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {table.map((items, index) => { return(
                        <TableRow>
                            <TableCell component="th" scope="row" className={classes.columns}>P{+index}</TableCell>
                                {items.map((subItems, sIndex) => { 
                                    return <TableCell align="right" className={classes.columns}>{subItems}</TableCell>
                                })}
                        </TableRow>
                     )})}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default Tables
