import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {InputLabel} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { fade } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    label: {
        color: theme.palette.common.white,
        '&:before': {
            color: theme.palette.common.white,
        },
        '&:after': {
            borderColor: theme.palette.common.white,
        },
    },
    select: {
        color: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        border: 'none',
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
            border: '1px solid white',
        },
        '&:MuiSelect-selectMenu': {
            borderColor: theme.palette.common.white,
        },
        '&:MuiSelect-outlined': {
            borderColor: theme.palette.common.white,
        },
    },
}));

export default function BotaoSelecao() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    
    return (
        <div>
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel className={classes.label}>Categorias</InputLabel>
            <Select
            className={classes.select}
            value={age}
            onChange={handleChange}
            >
            <MenuItem value="">
                <em>Categorias</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
        </div>
    );
}
