import React, { Component } from "react";
import FormError from "../FormMods/FormError";
import FormAlert from "../Forms/FormAlert";
import "../../App.css";
import Axios from "axios";

/*
  missing from form
    "Restricted field Trip"

*/

class DailyProgressAndActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childMeta_name: "",
      personal_hygiene: "",
      dressing: "",
      table_mannders: "",
      clothes_maintenace: "",
      self_feeding: "",
      care_of_property: "",
      maintenace_of_personal_space: "",
      household_chorse: "",
      informal_counseling: "",
      verbal_redirection: "",
      modeling: "",
      supervised_separation: "",
      provider_feedback_to_client: "",
      positive_reinforcement: "",
      other: "",
      home_restrictions: "",
      restricted_leisure_activity: "",
      no_allowance: "",
      other2: "",
      no_of_home_incidents: "",
      no_of_home_serious_incidents: "",
      no_of_home_restraints: "",
      no_of_school_incidents: "",
      no_of_school_restraints: "",
      illness_injury: "",
      level_of_supervison: "",
      summary_of_daily_schedule: "",
      summary_of_behavior_at_school: "",
      summary_of_behavior_at_home: "",
      therapeutic_recreational: "",
      therapeutic_value: "",
      phone_calls_or_visits: "",

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
      personal_hygiene: "",
      dressing: "",
      table_mannders: "",
      clothes_maintenace: "",
      self_feeding: "",
      care_of_property: "",
      maintenace_of_personal_space: "",
      household_chorse: "",
      informal_counseling: "",
      verbal_redirection: "",
      modeling: "",
      supervised_separation: "",
      provider_feedback_to_client: "",
      positive_reinforcement: "",
      other: "",
      home_restrictions: "",
      restricted_leisure_activity: "",
      no_allowance: "",
      other2: "",
      no_of_home_incidents: "",
      no_of_home_serious_incidents: "",
      no_of_home_restraints: "",
      no_of_school_incidents: "",
      no_of_school_restraints: "",
      illness_injury: "",
      level_of_supervison: "",
      summary_of_daily_schedule: "",
      summary_of_behavior_at_school: "",
      summary_of_behavior_at_home: "",
      therapeutic_recreational: "",
      therapeutic_value: "",
      phone_calls_or_visits: ""
    });
  };

  submit = () => {
    let currentState = JSON.parse(JSON.stringify(this.state));
    console.log(JSON.stringify(currentState));
    Axios.post("/api/dailyProgressAndActivity", currentState)
      .then(res => {
        window.scrollTo(0, 0);
        this.toggleSuccessAlert();
        setTimeout(this.toggleSuccessAlert, 3000);
        this.resetForm();
      })
      .catch(e => {
        this.setState({
          formHasError: true,
          formErrorMessage:
            "Error Submitting Daily Progress and Activity Report"
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
            <h2 className="formTitle">Daily Progress and Activity</h2>
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
            <div className="form-group">
              <h5>
                Daily living / Development skills :{" "}
                <i>
                  G - Good; A - Adequate; P - Poor; NS - Needs Supervision; PA -
                  Physical Assistance; NA - Not Applicable
                </i>
              </h5>
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Personal Hygiene wk</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="personal_hygiene"
                value={this.state.personal_hygiene}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Dressing</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="dressing"
                value={this.state.dressing}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Table Mannders</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="table_mannders"
                value={this.state.table_mannders}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Clothes Maintenance</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="clothes_maintenace"
                value={this.state.clothes_maintenace}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Self Feeding</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="self_feeding"
                value={this.state.self_feeding}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Care of Property</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="care_of_property"
                value={this.state.care_of_property}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Maintenance of Personal Space
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="maintenace_of_personal_space"
                value={this.state.maintenace_of_personal_space}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Household Chores</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="household_chorse"
                value={this.state.household_chorse}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group">
              <h5>
                Techniques used to encourage positive change :{" "}
                <i>Y - Yes (if applicable)</i>
              </h5>
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Informal Counseling</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="informal_counseling"
                value={this.state.informal_counseling}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Verbal Redirection</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="verbal_redirection"
                value={this.state.verbal_redirection}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Modeling</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="modeling"
                value={this.state.modeling}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Supervised Separation
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="supervised_separation"
                value={this.state.supervised_separation}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Provider Feedback to Client
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="provider_feedback_to_client"
                value={this.state.provider_feedback_to_client}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Positive Reinforcement
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="positive_reinforcement"
                value={this.state.positive_reinforcement}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Other (Specify)</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="other"
                value={this.state.other}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group">
              <h5>
                Consequences : <i>Y - Yes (if applicable)</i>
              </h5>
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Home Restrictions</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="home_restrictions"
                value={this.state.home_restrictions}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Restricted Leisure Activity
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="restricted_leisure_activity"
                value={this.state.restricted_leisure_activity}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">No Allowance</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="no_allowance"
                value={this.state.no_allowance}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Other (Specify)</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="other2"
                value={this.state.other2}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group">
              <h5>Behavior Summary</h5>
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Number of Home Incidents
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="no_of_home_incidents"
                value={this.state.no_of_home_incidents}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Number of Home Serious Incidents
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="no_of_home_serious_incidents"
                value={this.state.no_of_home_serious_incidents}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Number of Home Restraints
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="no_of_home_restraints"
                value={this.state.no_of_home_restraints}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Number of School Incidents
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="no_of_school_incidents"
                value={this.state.no_of_school_incidents}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Number of School Restraints
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="no_of_school_restraints"
                value={this.state.no_of_school_restraints}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Illnesses / Injuries</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="illness_injury"
                value={this.state.illness_injury}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Level of Supervison</label>{" "}
              <input
                onChange={this.handleFieldInput}
                id="level_of_supervison"
                value={this.state.level_of_supervison}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Summary of Daily Schedule
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="summary_of_daily_schedule"
                value={this.state.summary_of_daily_schedule}
                className="form-control"
              ></textarea>
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Summary of Behavior at School
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="summary_of_behavior_at_school"
                value={this.state.summary_of_behavior_at_school}
                className="form-control"
              ></textarea>
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Summary of Behavior at Home
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="summary_of_behavior_at_home"
                value={this.state.summary_of_behavior_at_home}
                className="form-control"
              ></textarea>
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Therapeutic / Recreational
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="therapeutic_recreational"
                value={this.state.therapeutic_recreational}
                className="form-control"
              ></textarea>
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Therapeutic Value</label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="therapeutic_value"
                value={this.state.therapeutic_value}
                className="form-control"
              ></textarea>
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Phone Calls / Visits</label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                id="phone_calls_or_visits"
                value={this.state.phone_calls_or_visits}
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
            <h2 className="formTitle">Daily Progress and Activity</h2>
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
            <div className="form-group">
              <h5>
                Daily living/development skills :{" "}
                <i>
                  G - Good; A - Adequate; P - Poor; NS - Needs Supervision; PA -
                  Physical Assistance; NA - Not Applicable
                </i>
              </h5>
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Personal Hygiene wk</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.personal_hygiene}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Dressing</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.dressing}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Table Mannders</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.table_mannders}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Clothes Maintenance</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.clothes_maintenace}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Self Feeding</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.self_feeding}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Care of Property</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.care_of_property}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Maintenance of Personal Space
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.maintenace_of_personal_space}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Household Chores</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.household_chorse}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group">
              <h5>
                Techniques used to encourage positive change :{" "}
                <i>Y - Yes (if applicable)</i>
              </h5>
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Informal Counseling</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.informal_counseling}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Verbal Redirection</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.verbal_redirection}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Modeling</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.modeling}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Supervised Separation
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.supervised_separation}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Provider Feedback to Client
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.provider_feedback_to_client}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Positive Reinforcement
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.positive_reinforcement}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Other (Specify)</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.other}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group">
              <h5>
                Consequences : <i>Y - Yes (if applicable)</i>
              </h5>
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Home Restrictions</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.home_restrictions}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Restricted Leisure Activity
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.restricted_leisure_activity}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">No Allowance</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.no_allowance}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Other (Specify)</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.other2}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group">
              <h5>Behavior Summary</h5>
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Number of Home Incidents
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.no_of_home_incidents}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Number of Home Serious Incidents
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.no_of_home_serious_incidents}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Number of Home Restraints
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.no_of_home_restraints}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Number of School Incidents
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.no_of_school_incidents}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Number of School Restraints
              </label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.no_of_school_restraints}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Illnesses / Injuries</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.illness_injury}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Level of Supervison</label>{" "}
              <input
                onChange={this.handleFieldInput}
                value={this.props.formData.level_of_supervison}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
                type="text"
              />{" "}
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Summary of Daily Schedule
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                value={this.props.formData.summary_of_daily_schedule}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
              ></textarea>
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Summary of Behavior at School
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                value={this.props.formData.summary_of_behavior_at_school}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
              ></textarea>
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Summary of Behavior at Home
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                value={this.props.formData.summary_of_behavior_at_home}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
              ></textarea>
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">
                Therapeutic / Recreational
              </label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                value={this.props.formData.therapeutic_recreational}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
              ></textarea>
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Therapeutic Value</label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                value={this.props.formData.therapeutic_value}
                disabled={this.props.userObj.isAdmin ? false : true}
                className="form-control"
              ></textarea>
            </div>
            <div className="form-group logInInputField">
              {" "}
              <label className="control-label">Phone Calls / Visits</label>{" "}
              <textarea
                onChange={this.handleFieldInput}
                value={this.props.formData.phone_calls_or_visits}
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

export default DailyProgressAndActivity;
