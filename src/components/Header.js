import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, IconButton} from '@material-ui/core';

const useStyles = makeStyles((theme) =>({

}));
export default function Header(){
    const classes = useStyles();
    return(
        <div>
            <AppBar>
                <h1>MyIsland</h1>
                
            </AppBar>

        </div>
    )
}