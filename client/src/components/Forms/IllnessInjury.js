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

class IllnessInjury extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childMeta_name: "",
      dateTimeOccur: "",
      illnessInjury: "",
      initialResponse: "",
      tempTaken: "",
      tempMethodTaken: "",
      tempInitialReading: "",
      supervisorNotified: "",
      notifiedAt: "",
      notifiedBy: "",
      adminFollowUp: "",
      lastMedicationGiven: "",
      otherActionsTreatment: "",
      treatmentAuthBy: "",

      createdBy: this.props.valuesSet === true ? "" : this.props.userObj.email,

      createdByName:
        this.props.valuesSet === true
          ? ""
          : this.props.userObj.firstName + " " + this.props.userObj.lastName,

      lastEditDate: new Date(),

      homeId: this.props.valuesSet === true ? "" : this.props.userObj.homeId,

      formHasError: false,

      formSubmitted: false,

      formErrorMessage: "",
    };
  }

  toggleSuccessAlert = () => {
    this.setState({ formSubmitted: !this.state.formSubmitted });
  };

  toggleErrorAlert = () => {
    this.setState({
      formHasError: !this.state.formHasError,
      formErrorMessage: "",
    });
  };

  handleFieldInput = (event) => {
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
      dateTimeOccur: "",
      illnessInjury: "",
      initialResponse: "",
      tempTaken: "",
      tempMethodTaken: "",
      tempInitialReading: "",
      supervisorNotified: "",
      notifiedAt: "",
      notifiedBy: "",
      adminFollowUp: "",
      lastMedicationGiven: "",
      otherActionsTreatment: "",
      treatmentAuthBy: "",
    });
  };

  submit = () => {
    let currentState = JSON.parse(JSON.stringify(this.state));
    console.log(JSON.stringify(currentState));
    Axios.post("/api/illnessInjury", currentState)
      .then((res) => {
        window.scrollTo(0, 0);
        this.toggleSuccessAlert();
        setTimeout(this.toggleSuccessAlert, 3000);
        this.resetForm();
      })
      .catch((e) => {
        this.setState({
          formHasError: true,
          formErrorMessage: "Error Submitting Illness Injury",
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
    var keysToExclude = [
      "formHasError",
      "formSubmitted",
      "formErrorMessage",
      "tempMethodTaken",
      "tempInitialReading",
      "adminFollowUp",
      "lastMedicationGiven",
      "otherActionsTreatment",
      "treatmentAuthBy",
    ];

    var isValid = true;
    var errorFields = [];

    Object.keys(this.state).forEach((key) => {
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
          .replace(/,/g, "\n")}`,
      });
      return;
    }

    this.submit();
  };

  render() {
    console.log(this.props);
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
            <h2 className="formTitle">Illness and Injury Report</h2>
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
              <label className="control-label">
                Date and time of illness and/or injury
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="dateTimeOccur"
                value={this.state.dateTimeOccur}
                className="form-control"
                type="datetime-local"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Nature of illness and/or injury
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="illnessInjury"
                value={this.state.illnessInjury}
                className="form-control"
              ></textarea>
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Initial response action taken
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="initialResponse"
                value={this.state.initialResponse}
                className="form-control"
              ></textarea>
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Temperature Taken?</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="tempTaken"
                value={this.state.tempTaken}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Method</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="tempMethodTaken"
                value={this.state.tempMethodTaken}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Initial Reading</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="tempInitialReading"
                value={this.state.tempInitialReading}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Notification to Supervisor{" "}
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="supervisorNotified"
                value={this.state.supervisorNotified}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Supervisor notified at
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="notifiedAt"
                value={this.state.notifiedAt}
                className="form-control"
                type="datetime-local"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Supervisor notified by
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="notifiedBy"
                value={this.state.notifiedBy}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Follow-up by administrator
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="adminFollowUp"
                value={this.state.adminFollowUp}
                className="form-control"
                type="text"
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Last medication and time given to prior onset
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="lastMedicationGiven"
                value={this.state.lastMedicationGiven}
                className="form-control"
              ></textarea>
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Other actions or treatment taken
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="otherActionsTreatment"
                value={this.state.otherActionsTreatment}
                className="form-control"
              ></textarea>
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Treatment (including medications) authorized by
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="treatmentAuthBy"
                value={this.state.treatmentAuthBy}
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
            <h2 className="formTitle">Illness and Injury Report</h2>
          </div>
          <div className="formFieldsMobileReport">
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Child's Name</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="childMeta_name"
                value={this.props.formData.childMeta_name}
                className="form-control"
                type="text"
                disabled={this.props.userObj.isAdmin ? false : true}
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Date and time of illness and/or injury
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="dateTimeOccur"
                value={this.props.formData.dateTimeOccur}
                className="form-control"
                type="datetime-local"
                disabled={this.props.userObj.isAdmin ? false : true}
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Nature of illness and/or injury
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="illnessInjury"
                value={this.props.formData.illnessInjury}
                className="form-control"
                disabled={this.props.userObj.isAdmin ? false : true}
              ></textarea>
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Initial response action taken
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="initialResponse"
                value={this.props.formData.initialResponse}
                className="form-control"
                disabled={this.props.userObj.isAdmin ? false : true}
              ></textarea>
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Temperature Taken?</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="tempTaken"
                value={this.props.formData.tempTaken}
                className="form-control"
                type="text"
                disabled={this.props.userObj.isAdmin ? false : true}
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Method</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="tempMethodTaken"
                value={this.props.formData.tempMethodTaken}
                className="form-control"
                type="text"
                disabled={this.props.userObj.isAdmin ? false : true}
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Initial Reading</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="tempInitialReading"
                value={this.props.formData.tempInitialReading}
                className="form-control"
                type="text"
                disabled={this.props.userObj.isAdmin ? false : true}
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Notification to Supervisor{" "}
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="supervisorNotified"
                value={this.props.formData.supervisorNotified}
                className="form-control"
                type="text"
                disabled={this.props.userObj.isAdmin ? false : true}
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Supervisor notified at
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="notifiedAt"
                value={this.props.formData.notifiedAt}
                className="form-control"
                type="datetime-local"
                disabled={this.props.userObj.isAdmin ? false : true}
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Supervisor notified by
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="notifiedBy"
                value={this.props.formData.notifiedBy}
                className="form-control"
                type="text"
                disabled={this.props.userObj.isAdmin ? false : true}
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Follow-up by administrator
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="adminFollowUp"
                value={this.props.formData.adminFollowUp}
                className="form-control"
                type="text"
                disabled={this.props.userObj.isAdmin ? false : true}
              />{" "}
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Last medication and time given to prior onset
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="lastMedicationGiven"
                value={this.props.formData.lastMedicationGiven}
                className="form-control"
                disabled={this.props.userObj.isAdmin ? false : true}
              ></textarea>
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Other actions or treatment taken
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="otherActionsTreatment"
                value={this.props.formData.otherActionsTreatment}
                className="form-control"
                disabled={this.props.userObj.isAdmin ? false : true}
              ></textarea>
            </div>

            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Treatment (including medications) authorized by
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="treatmentAuthBy"
                value={this.props.formData.treatmentAuthBy}
                className="form-control"
                disabled={this.props.userObj.isAdmin ? false : true}
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

export default IllnessInjury;