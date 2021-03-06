import React, { Component } from "react";
import FormError from "../FormMods/FormError";
import FormAlert from "../Forms/FormAlert";
import "../../App.css";
import Axios from "axios";

/*
  missing from form
    "incident"

  to change
    remove time_of_incident - i change dateOfIncident to a date time picker

    seperation should probably be a date
*/

class IncidentReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childMeta_name: "",

      childMeta_gender: "",

      childMeta_dob: "",

      childMeta_dateOfAdmission: "",

      dateOfIncident: "",

      staff_involved_name: "",

      staff_involved_gender: "",

      time_of_incident: "",

      staff_witness_name: "",

      staff_witness_gender: "",

      client_witness_name1: "",

      client_witness_gender1: "",

      client_witness_dob1: "",

      client_witness_doa1: "",

      client_witness_name2: "",

      client_witness_gender2: "",

      client_witness_dob2: "",

      client_witness_doa2: "",

      incident_explaination: "",

      seperation: "",

      result: "",

      able_to_prevent: "",

      notification_made_to: "",

      notification_made_date_time: "",

      notification_made_by: "",

      follow_up_results: "",

      createdBy: this.props.valuesSet === true ? "" : this.props.userObj.email,

      createdByName:
        this.props.valuesSet === true
          ? ""
          : this.props.userObj.firstName + " " + this.props.userObj.lastName,

      lastEditDate: new Date(),

      homeId: this.props.valuesSet === true ? "" : this.props.userObj.homeId,

      formHasError: false,

      formSubmitted: false,

      formErrorMessage: ""
    };
  }

  toggleSuccessAlert = () => {
    this.setState({ formSubmitted: !this.state.formSubmitted });
  };

  toggleErrorAlert = () => {
    this.setState({
      formHasError: !this.state.formHasError,
      formErrorMessage: ""
    });
  };

  handleFieldInput = event => {
    var stateObj = {};
    if (event.target.id.indexOf(".") > -1) {
      let level1Obj = event.target.id.split(".")[0];
      let level2Obj = event.target.id.split(".")[1];

      let nestedProperty = { ...this.state[level1Obj] };
      nestedProperty[level2Obj] = event.target.value;
      stateObj[level1Obj] = nestedProperty;
    } else {
      stateObj[event.target.id] = event.target.value;
    }
    this.setState(stateObj);
  };

  resetForm = () => {
    this.setState({
      childMeta_name: "",

      childMeta_gender: "",

      childMeta_dob: "",

      childMeta_dateOfAdmission: "",

      dateOfIncident: "",

      staff_involved_name: "",

      staff_involved_gender: "",

      time_of_incident: "",

      staff_witness_name: "",

      staff_witness_gender: "",

      client_witness_name1: "",

      client_witness_gender1: "",

      client_witness_dob1: "",

      client_witness_doa1: "",

      client_witness_name2: "",

      client_witness_gender2: "",

      client_witness_dob2: "",

      client_witness_doa2: "",

      incident_explaination: "",

      seperation: "",

      result: "",

      able_to_prevent: "",

      notification_made_to: "",

      notification_made_date_time: "",

      notification_made_by: "",

      follow_up_results: ""
    });
  };

  submit = () => {
    let currentState = JSON.parse(JSON.stringify(this.state));
    console.log(JSON.stringify(currentState));
    Axios.post("/api/incidentReport", currentState)
      .then(res => {
        window.scrollTo(0, 0);
        this.toggleSuccessAlert();
        setTimeout(this.toggleSuccessAlert, 3000);
        this.resetForm();
      })
      .catch(e => {
        this.setState({
          formHasError: true,
          formErrorMessage: "Error Submitting Incident Report"
        });
      });
    // Axios({
    //   method: "post",
    //   url: "/api/treatmentPlans72",
    //   body: "",
    //   headers: { test: "test" }
    // })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
  };

  validateForm = () => {
    var keysToExclude = ["formHasError", "formSubmitted", "formErrorMessage"];

    var isValid = true;
    var errorFields = [];

    Object.keys(this.state).forEach(key => {
      if (!keysToExclude.includes(key)) {
        if (
          !this.state[key] ||
          /^\s+$/.test(this.state[key]) ||
          this.state[key].length < 1
        ) {
          errorFields.push("\n" + key);
          isValid = false;
        }
      }
    });

    if (!isValid) {
      this.setState({
        formHasError: true,
        formErrorMessage: `Please complete the following field(s): ${errorFields
          .toString()
          .replace(/,/g, "\n")}`
      });
      return;
    }

    this.submit();
  };

  render() {
    if (!this.props.valuesSet) {
      return (
        <div className="formComp">
          {this.state.formSubmitted || this.state.formHasError ? (
            <React.Fragment>
              <FormAlert
                doShow={this.state.formSubmitted}
                type="success"
                heading="Thank you for your submission!"
              ></FormAlert>
              <FormAlert
                doShow={this.state.formHasError}
                toggleErrorAlert={this.toggleErrorAlert}
                type="danger"
                heading="Error Submitting form"
              >
                <p>{this.state.formErrorMessage}</p>
              </FormAlert>
            </React.Fragment>
          ) : (
            <React.Fragment />
          )}
          <div className="formTitleDiv">
            <h2 className="formTitle">Incident Report</h2>
          </div>
          <div className="formFieldsMobile">
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Child's Name</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="childMeta_name"
                value={this.state.childMeta_name}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Child's Gender</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="childMeta_gender"
                value={this.state.childMeta_gender}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Child's Date of Birth
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="childMeta_dob"
                value={this.state.childMeta_dob}
                className="form-control"
                type="date"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Date of Admission</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="childMeta_dateOfAdmission"
                value={this.state.childMeta_dateOfAdmission}
                className="form-control"
                type="date"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Date of Incident</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="dateOfIncident"
                value={this.state.dateOfIncident}
                className="form-control"
                type="datetime-local"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Name of Care Staff Involved
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="staff_involved_name"
                value={this.state.staff_involved_name}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Gender of Care Staff Involved
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="staff_involved_gender"
                value={this.state.staff_involved_gender}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Time of Incident</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="time_of_incident"
                value={this.state.time_of_incident}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Name of Staff Witness
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="staff_witness_name"
                value={this.state.staff_witness_name}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Gender of Staff Witness
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="staff_witness_gender"
                value={this.state.staff_witness_gender}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Name of Client Witness (1)
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="client_witness_name1"
                value={this.state.client_witness_name1}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Gender of Client Witness (1)
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="client_witness_gender1"
                value={this.state.client_witness_gender1}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Client Witness Date of Birth (1)
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="client_witness_dob1"
                value={this.state.client_witness_dob1}
                className="form-control"
                type="date"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Client Witness Date of Admission (1)
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="client_witness_doa1"
                value={this.state.client_witness_doa1}
                className="form-control"
                type="date"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Name of Client Witness (2)
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="client_witness_name2"
                value={this.state.client_witness_name2}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Gender of Client Witness (2)
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="client_witness_gender2"
                value={this.state.client_witness_gender2}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Client Witness Date of Birth (2)
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="client_witness_dob2"
                value={this.state.client_witness_dob2}
                className="form-control"
                type="date"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Client Witness Date of Admission (2)
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="client_witness_doa2"
                value={this.state.client_witness_doa2}
                className="form-control"
                type="date"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Explain the Incident</label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="incident_explaination"
                value={this.state.incident_explaination}
                className="form-control"
              ></textarea>
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                If supervised seperation was used, how long was the student
                seperated?
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="seperation"
                value={this.state.seperation}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Result of the incident
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="result"
                value={this.state.result}
                className="form-control"
              ></textarea>
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Were you able to prevent a more serious incident ?
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="able_to_prevent"
                value={this.state.able_to_prevent}
                className="form-control"
              ></textarea>
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Name of individual you notified.
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="notification_made_to"
                value={this.state.notification_made_to}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                When was the notification made ?
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="notification_made_date_time"
                value={this.state.notification_made_date_time}
                className="form-control"
                type="datetime-local"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">By who ?</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="notification_made_by"
                value={this.state.notification_made_by}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Results After Following Up
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="follow_up_results"
                value={this.state.follow_up_results}
                className="form-control"
              ></textarea>
            </div>
            <FormError errorId={this.props.id + "-error"} />
            <div
              className="form-group logInInputField"
              style={{ textAlign: "right" }}
            >
              <button className="darkBtn" onClick={this.validateForm}>
                Submit
              </button>
            </div>
          </div>
          ;
        </div>
      );
    } else {
      return (
        <div className="formComp">
          {this.state.formSubmitted || this.state.formHasError ? (
            <React.Fragment>
              <FormAlert
                doShow={this.state.formSubmitted}
                type="success"
                heading="Thank you for your submission!"
              ></FormAlert>
              <FormAlert
                doShow={this.state.formHasError}
                toggleErrorAlert={this.toggleErrorAlert}
                type="danger"
                heading="Error Submitting form"
              >
                <p>{this.state.formErrorMessage}</p>
              </FormAlert>
            </React.Fragment>
          ) : (
            <React.Fragment />
          )}
          <div className="formTitleDivReport">
            <h2 className="formTitle">Incident Report</h2>
          </div>
          <div className="formFieldsMobileReport">
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Child's Name</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.childMeta_name}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Child's Gender</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.childMeta_gender}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Child's Date of Birth
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                // value={(this.props.formData.childMeta_dob!==null) ? (new Date(this.props.formData.childMeta_dob)).toISOString().replace(/(T\d{2}:\d{2}).*/g,'') : null}
                value={this.props.formData.childMeta_dob}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="date"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Date of Admission</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.childMeta_dateOfAdmission}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="date"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Date of Incident</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.dateOfIncident}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="datetime-local"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Name of Care Staff Involved
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.staff_involved_name}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Gender of Care Staff Involved
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.staff_involved_gender}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Time of Incident</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.time_of_incident}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Name of Staff Witness
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.staff_witness_name}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Gender of Staff Witness
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.staff_witness_gender}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Name of Client Witness (1)
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.client_witness_name1}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Gender of Client Witness (1)
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.client_witness_gender1}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Client Witness Date of Birth (1)
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.client_witness_dob1}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="date"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Client Witness Date of Admission (1)
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.client_witness_doa1}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="date"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Name of Client Witness (2)
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.client_witness_name2}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Gender of Client Witness (2)
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.client_witness_gender2}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Client Witness Date of Birth (2)
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.client_witness_dob2}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="date"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Client Witness Date of Admission (2)
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.client_witness_doa2}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="date"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Explain the Incident</label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                value={this.props.formData.incident_explaination}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
              ></textarea>
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                If supervised seperation was used, how long was the student
                seperated?
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.seperation}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Result of the incident
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                value={this.props.formData.result}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
              ></textarea>
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Were you able to prevent a more serious incident ?
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                value={this.props.formData.able_to_prevent}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
              ></textarea>
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Name of individual you notified.
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.notification_made_to}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                When was the notification made ?
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.notification_made_date_time}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="datetime-local"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">By who ?</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.notification_made_by}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Results After Following Up
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                value={this.props.formData.follow_up_results}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
              ></textarea>
            </div>
            <FormError errorId={this.props.id + "-error"} />
            <div
              className="form-group logInInputField"
              style={{ textAlign: "right" }}
            >
              <button className="darkBtn" onClick={this.validateForm}>
                Submit
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default IncidentReport;
