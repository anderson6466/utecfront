import React from 'react';
import '../App.css';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import {Container} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
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

 
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
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


function Status (){

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
    
        
      <Container fixed>

 
    <div  className="caja"  >
  <span className="logo">
    <svg xmlns="http://www.w3.org/2000/svg"  fill="#fff"   className="logo"    width="72" height="72" viewBox="0 0 72 72"><path d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"></path></svg>
			  </span>
</div>


<Card   className="contentss"   >
      <CardActionArea>
       
        <CardContent className="caja2"  >
           
         
       <h3  className="letter"  >  All Systems Operational</h3> 
           
        </CardContent>

        <CardContent className="table"  >
        <TableContainer     component={Paper}>
      <Table   aria-label="simple table">
       
          <TableBody>
          <TableRow>
            <TableCell>Alumno Api</TableCell>
            <Divider orientation="vertical"  />
            <TableCell align="right"><CheckIcon className="check"     />  </TableCell>
           </TableRow>
           <TableRow>
            <TableCell>Curricula Api</TableCell>
            <Divider orientation="vertical"  />
            <TableCell align="right"><CheckIcon className="check"     />  </TableCell>
           </TableRow>
           <TableRow>
            <TableCell>Academico Api</TableCell> <Divider orientation="vertical"  />
            <TableCell align="right"><CheckIcon className="check"     />  </TableCell>
           </TableRow>
           <TableRow>
            <TableCell>Finance Api</TableCell> <Divider orientation="vertical"  />
            <TableCell align="right">   <CheckIcon className="check"     />         </TableCell>
           </TableRow>
          </TableBody>
         
       
      </Table>
    </TableContainer>

    </CardContent>
      </CardActionArea>
      
    </Card>


 
 
      </Container>
 
      
       
    
    
    
    
    
    
    
    
    
    
    
    )





}
  
export default Status;