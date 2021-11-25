import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import  {Box} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { AcUnitSharp ,Block,Accessible,AccountTree,Payment,AddIcCall} from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import { FaBeer } from 'react-icons/fa';
import MenuItem from '@material-ui/core/MenuItem';
//import Illustrati from '../images/Illustrati.png';
//import Base from '../images/Base.png';
import DateFnsUtils from "@date-io/date-fns";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { DataGrid } from '@material-ui/data-grid';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';








  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'titulo', headerName: 'Titulo', width: 130 },
    { field: 'imagen', headerName: 'Imagen', width: 130 }
   
  
  ];
  
  const rows = [
    { id: 1, titulo: 'Snow', imagen: 'Jon'  },
    { id: 2, titulo: 'Lannister', imagen: 'Cersei'  },
    { id: 3, titulo: 'Lannister', imagen: 'Jaime'  },
    { id: 4, titulo: 'Stark', imagen: 'Arya' },
    { id: 5, titulo: 'Targaryen', imagen: 'Daenerys' },
    { id: 6, titulo: 'Melisandre', imagen: 'Daenerys' },
    { id: 7, titulo: 'Clifford', imagen: 'Ferrara'  },
    { id: 8, titulo: 'Frances', imagen: 'Rossini'  },
    { id: 9, titulo: 'Roxie', imagen: 'Harvey'  },
  ];
  









const currencies = [
    {
      value: '1',
      label: 'DNI',
    },
    {
      value: '2',
      label: 'CEXT',
    },
    {
      value: '3',
      label: 'PPT',
    },
 
  ];

  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
     height:'650px',
     width:1350,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
       

     
      width: '700px',
      float:'left',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      borderBottomRightRadius:190,
      height:500,
      padding:0
    },
  

    content2: {
       float:'right',
       width: '500px',
       
      },
   
    playIcon: {
      height: 38,
      width: 38,
    },

    hletter1: {
        fontWeight:   1,  
         color:'white',
         marginTop:'70px',
         padding:'0px',
         marginLeft:  '-360px',
          fontStretch:  'normal',
          fontFamily:   'sans-serif',
          fontSize: '300%'
          
        
       },
       hletter2: {
        fontWeight: 600,  
         color:'white',
         marginTop:'-50px',
         padding:'0px',
         marginLeft:  '-450px',
          fontStretch:  'normal',
          fontFamily:   'sans-serif',
          fontSize: '300%'
          
            


        
       },

letterseguro:{

    fontSize: '200%'


},
letterseguro2:{
    
    color:"blue"
    
},

letterseguro3:{

color:'CBC4C2',
marginTop:'-45px'

},
       textletter:{

        color:'white',
        marginLeft:  '60px',

        textAlign:'left',
        alignContent: 'flex-start',

        lineHeight: '250%',

       },
       lettersegurocheck:{

        width:'238px' ,
      
       },
       lettersegurocheckB:{
        width:'238px' ,
        marginTop:'-20px'
       },
       butttonAling:{
marginTop:'21px',
marginLeft:'-108px'

       }   

  }));


function Iniciocons (){

    const history = useHistory();

    const routeChange = () =>{ 
      let path = `/form`; 
      history.push(path);
    }



    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
     
      });
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChangecheck = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    const [currency, setCurrency] = React.useState('1');
    const classes = useStyles();
    const theme = useTheme();
    const handleChange = (event) => {
        setCurrency(event.target.value);
      };



    return (
    
        
      <Card className={classes.root}>


      <div  >
         
        <CardContent  >

<p   className={classes.letterseguro}  >
Busqueda de   <label className={classes.letterseguro2}  >Receta </label>  

</p><br/>
<p   className={classes.letterseguro3}  >
Ingresa los datos para comenzar
</p>


        <div>
       

      <TextField id="outlined-basic"    Style ="width:238px;padding:5px;"     label="      Nombre de Receta"   />


      
  <TextField   Style ="width:238px;padding:5px;" id="outlined-search" label="Max. Calorias" type="search" />


  <TextField   Style ="width:238px;padding:5px;" id="outlined-search" label="Cantidad" type="search" />

  <br/>
   
   
<Button   className={classes.butttonAling}   onClick={routeChange}   variant="contained" color="primary">
Buscar
</Button>

</div>

<CardContent  Style ="width:800px;margin:auto;" >

<div style={{ height: 400 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
  
      />
    </div>
  </CardContent>
        
        </CardContent>
      </div>
    
    </Card>
  

 
      
       
    
    
    
    
    
    
    
    
    
    
    
    )





}
  
export default Iniciocons;