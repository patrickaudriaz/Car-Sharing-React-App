import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import format from "date-fns/format";
import frLocale from "date-fns/locale/fr";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { setDateValue, setPlaces } from '../../actions/filters';

//Date and Hour class 
class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date) {
    return format(date, "d MMM yyyy", { locale: this.locale });
  };
};

//CSS injection for Material UI override
const materialTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#64bda4"
      }
    },
    MuiPickersCalendarHeader: {},
    MuiPickersModal: {
      dialogAction: {
        color: "#64bda4"
      }
    }
  }
});

//CSS injection for Material UI override
const styles = theme => ({
  cssLabel: {
    color: "black",
    "&$cssFocused": {
      color: "black"
    }
  },
  cssFocused: {
    color: "black"
  },
  cssUnderline: {
    "&:after": {
      borderBottomColor: "#64bda4"
    }
  },
  formControl: {
    minWidth: "100%"
  },
  dropdownStyle: {
    color: "black",
    "&:after": {
      borderBottomColor: "#64bda4"
    }
  }
});

class AddForm extends Component {
  state = {
    places: "",
    name: "",
    selectedDate: new Date()
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.dispatch(setPlaces(event.target.value));
  };
  handleDateChange = date => {
    this.setState({ selectedDate: date });
    this.props.dispatch(setDateValue(date));
  };
  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;

    return (
      <div>
        <div className="direction">
          <div className="direction-label ">Informations sur le trajet</div>
        </div>
        <div className="add-form">
          <div className="form-item">
            <FormControl className={classes.formControl}>
              <InputLabel
                inputlabelprops={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused
                  }
                }}
                htmlFor="places"
              >
                Nombre de places
              </InputLabel>
              <Select
                value={this.state.places}
                onChange={this.handleChange}
                inputProps={{
                  name: "places",
                  id: "places"
                }}
                MenuProps={{
                  classes: { paper: classes.dropdownStyle }
                }}
              >
                <MenuItem value="">
                  <em>Aucune</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="form-item">
            <MuiThemeProvider theme={materialTheme}>
              <FormControl className={classes.formControl}>
                <MuiPickersUtilsProvider
                  utils={LocalizedUtils}
                  locale={frLocale}
                >
                  <DatePicker
                    label="Date du trajet"
                    format="d MMM yyyy"
                    value={selectedDate}
                    onChange={this.handleDateChange}
                    cancelLabel="annuler"
                  />
                </MuiPickersUtilsProvider>
              </FormControl>
            </MuiThemeProvider>
          </div>
          <div className="form-item">
            <MuiThemeProvider theme={materialTheme}>
              <FormControl className={classes.formControl}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <TimePicker
                    ampm={false}
                    label="Heure du départ"
                    value={selectedDate}
                    onChange={this.handleDateChange}
                    cancelLabel="annuler"
                  />
                </MuiPickersUtilsProvider>
              </FormControl>
            </MuiThemeProvider>
          </div>
        </div>
      </div>
    );
  };
};

//get values from redux store
const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(withStyles(styles)(AddForm));