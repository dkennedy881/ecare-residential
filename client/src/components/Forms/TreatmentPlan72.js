import React, { Component } from "react";
import FormError from "../FormMods/FormError";
import "../../App.css";
import Axios from "axios";
/*

  things to change 
    Child's Ethnicity - make single select
    legalStatus - needs to be drop down

*/
class TreatmentPlan72 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childMeta_name: "",
      childMeta_dob: "",
      childMeta_age: "",
      childMeta_ssn: "",
      childMeta_gender: "",
      childMeta_medicaidNumber: "",
      childMeta_county: "",
      childMeta_placeOfBirth: "",
      childMeta_ethnicity: "",
      childMeta_levelOfCare: "",

      childMeta_religion: "",

      childMeta_managingConservator: "",

      childMeta_dateOfAdmission: "",

      projectedDateForAchievingPermanency: "",

      legalStatus_PermancyGoal: "",

      fatherMeta_name: "",

      fatherMeta_address: "",

      fatherMeta_phoneNumber: "",

      motherMeta_name: "",

      motherMeta_address: "",

      motherMeta_phoneNumber: "",

      legalStatus: "",

      referringAgency_co: "",

      agentOfReferringAgency_co_name: "",

      agentOfReferringAgency_co_address: "",

      reactionToPlacement: "",

      interests: "",

      otherMeta1_name: "",

      otherMeta1_relationship: "",

      otherMeta1_address: "",

      otherMeta1_phoneNumber: "",

      otherMeta2_name: "",

      otherMeta2_relationship: "",

      otherMeta2_address: "",

      otherMeta2_phoneNumber: "",

      otherMeta3_name: "",

      otherMeta3_relationship: "",

      otherMeta3_address: "",

      otherMeta3_phoneNumber: "",

      otherMeta4_name: "",

      otherMeta4_relationship: "",

      otherMeta4_address: "",

      otherMeta4_phoneNumber: "",

      currentMedicalInformation: "",

      developmental_medicalHistory: "",

      drugAllergies: "",

      food1: "",

      allergies: "",

      chronicHealth: "",

      healthStrengths: "",

      healthNeeds: "",

      lastPhysicalExamination_date: "",

      lastPhysicalExamination_location: "",

      lastPhysicalExamination_monitoredBy: "",

      lastDentalExamination_date: "",

      lastDentalExamination_location: "",

      lastDentalExamination_monitoredBy: "",

      lastOpticalExamination_date: "",

      lastOpticalExamination_location: "",

      lastOpticalExamination_monitoredBy: "",

      currentMedications_dosages_targetedSymptoms1_medication: "",

      currentMedications_dosages_targetedSymptoms1_dosage_frequency: "",

      currentMedications_dosages_targetedSymptoms1_purpose: "",

      currentMedications_dosages_targetedSymptoms1_possibleSideEffects: "",

      currentMedications_dosages_targetedSymptoms1_monitoredBy: "",

      currentMedications_dosages_targetedSymptoms2_medication: "",

      currentMedications_dosages_targetedSymptoms2_dosage_frequency: "",

      currentMedications_dosages_targetedSymptoms2_purpose: "",

      currentMedications_dosages_targetedSymptoms2_possibleSideEffects: "",

      currentMedications_dosages_targetedSymptoms2_monitoredBy: "",

      currentMedications_dosages_targetedSymptoms3_medication: "",

      currentMedications_dosages_targetedSymptoms3_dosage_frequency: "",

      currentMedications_dosages_targetedSymptoms3_purpose: "",

      currentMedications_dosages_targetedSymptoms3_possibleSideEffects: "",

      currentMedications_dosages_targetedSymptoms3_monitoredBy: "",

      currentMedications_dosages_targetedSymptoms4_medication: "",

      currentMedications_dosages_targetedSymptoms4_dosage_frequency: "",

      currentMedications_dosages_targetedSymptoms4_purpose: "",

      currentMedications_dosages_targetedSymptoms4_possibleSideEffects: "",

      currentMedications_dosages_targetedSymptoms4_monitoredBy: "",

      currentMedications_dosages_targetedSymptoms5_medication: "",

      currentMedications_dosages_targetedSymptoms5_dosage_frequency: "",

      currentMedications_dosages_targetedSymptoms5_purpose: "",

      currentMedications_dosages_targetedSymptoms5_possibleSideEffects: "",

      currentMedications_dosages_targetedSymptoms5_monitoredBy: "",

      behavioralStrengths: "",

      behavioralNeeds: "",

      behavioralTreatmentServices: "",

      emotionalStrengths: "",

      emotionalNeeds: "",

      emotionalTreatmentServices: "",

      food2: "",

      eyeContact: "",

      physicalTouch: "",

      personalProperty: "",

      certainTopics: "",

      knownContraindicationsToTheUuseOfRestraint: "",

      de_escalatingTechniquesToAvoidRestraints_ebi: "",

      child_de_escalator: "",

      staff_de_escalator: "",

      therapist_de_escalator: "",

      childPreferred_de_escalation: "",

      interventionStrategies: "",

      supervisionStrategies: "",

      social_recreationalStrengths: "",

      social_recreationalNeeds: "",

      familyStrengths: "",

      familyNeeds: "",

      visitor1_name: "",

      visitor1_relationship: "",

      visitor1_frequency: "",

      visitor1_supervisedBy: "",

      visitor1_location: "",

      visitor1_length: "",

      visitor2_name: "",

      visitor2_relationship: "",

      visitor2_frequency: "",

      visitor2_supervisedBy: "",

      visitor2_location: "",

      visitor2_length: "",

      visitor3_name: "",

      visitor3_relationship: "",

      visitor3_frequency: "",

      visitor3_supervisedBy: "",

      visitor3_location: "",

      visitor3_length: "",

      visitor4_name: "",

      visitor4_relationship: "",

      visitor4_frequency: "",

      visitor4_supervisedBy: "",

      visitor4_location: "",

      visitor4_length: "",

      educational_vacationalStrengths: "",

      educational_vacationalNeeds: "",

      transitionalLiving: "",

      dischargePlanning: "",

      longRangeGoals: "",

      shortRangeGoals: "",

      administorSign: "",

      administorSignDate: "",

      treatmentDirectorSign: "",

      treatmentDirectorSignDate: "",

      createdBy: this.props.valuesSet === true ? "" : this.props.userObj.email,

      createdByName:
        this.props.valuesSet === true
          ? ""
          : this.props.userObj.firstName + " " + this.props.userObj.lastName,

      lastEditDate: new Date(),

      homeId: this.props.valuesSet === true ? "" : this.props.userObj.homeId
    };

    this.submit = this.submit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleFieldInput = event => {
    var stateObj = {};
    if (event.target.id.indexOf(".") > -1) {
      let level1Obj = event.target.id.split(".")[0];
      let level2Obj = event.target.id.split(".")[1];

      let nestedProperty = { ...this.state[level1Obj] };
      nestedProperty[level2Obj] = event.target.value;
      stateObj[level1Obj] = nestedProperty;
      // let objCopy = JSON.parse(JSON.stringify(this.state[level1Obj]));
      // console.log(objCopy);
      // objCopy[level2Obj] = event.target.value;
      // console.log(objCopy);
      // this.setState(objCopy);
    } else {
      stateObj[event.target.id] = event.target.value;
    }
    this.setState(stateObj);
  };

  submit = () => {
    let currentState = JSON.parse(JSON.stringify(this.state));
    console.log(JSON.stringify(currentState));
    Axios.post("/api/treatmentPlans72", currentState);
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
    // //is empty or leading spaces
    // document.getElementById(this.props.id + "-error").style.display = "none";
    // for (var valIndex in Object.values(childMeta)) {
    //   if (
    //     Object.values(childMeta)[valIndex].length === 0 ||
    //     /^\s+/g.test(Object.values(childMeta)[valIndex])
    //   ) {
    //     console.log("invalid");
    //     document.getElementById(this.props.id + "-error").innerText =
    //       "Child Information is Required";
    //     document.getElementById(this.props.id + "-error").style.display =
    //       "block";
    //     return;
    //   }
    // }

    this.submit();
  };

  render() {
    if (!this.props.valuesSet) {
      return (
        <div style={{ margin: "50px 100px 0px 100px" }}>
          <div style={{ margin: "75px 0px" }}>
            <h2>72 Hour Treatment Plan</h2>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's Name</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="childMeta_name"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's Date of Birth</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="childMeta_dob"
              className="form-control"
              type="date"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's Age</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="childMeta_age"
              className="form-control"
              type="number"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's SSN</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="childMeta_ssn"
              className="form-control"
              type="number"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's Gender</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="childMeta_gender"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Child's Medicaid Number
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="childMeta_medicaidNumber"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's Birth County</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="childMeta_county"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Child's Place of Birth (City, State)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="childMeta_placeOfBirth"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's Ethnicity</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="childMeta_ethnicity"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's Level of Care</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="childMeta_levelOfCare"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's Religion</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="childMeta_religion"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Child's Managing Conservator
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="childMeta_managingConservator"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Child's Date of Admission
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="childMeta_dateOfAdmission"
              className="form-control"
              type="date"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Projected Date For Achieving Permanency
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="projectedDateForAchievingPermanency"
              className="form-control"
              type="date"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Legal Status / Permancy Goal
            </label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              id="legalStatus_PermancyGoal"
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Father's Name</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="fatherMeta_name"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Father's Address</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="fatherMeta_address"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Father's Phone Number</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="fatherMeta_phoneNumber"
              className="form-control"
              type="number"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Mother's Name</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="motherMeta_name"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Mother's Address</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="motherMeta_address"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Mother Phone Number</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="motherMeta_phoneNumber"
              className="form-control"
              type="number"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Legal Status</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="legalStatus"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Referring Agency / Co</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="referringAgency_co"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Name of Agent of Referring Agency / Co
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="agentOfReferringAgency_co_name"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Address of Agent of Referring Agency / Co
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="agentOfReferringAgency_co_address"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Child's Reaction to Placement
            </label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              id="reactionToPlacement"
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's Interests</label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              id="interests"
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            <h5>
              Significant relationship to the child{" "}
              <i>(siblings, others relatives, CASA workers, and attorney)</i>:
            </h5>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Name of Significant Relation (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="otherMeta1_name"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Relationship of Significant Relation (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="otherMeta1_relationship"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Adress of Significant Relation (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="otherMeta1_address"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Phone Number of Significant Relation (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="otherMeta1_phoneNumber"
              className="form-control"
              type="number"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Name of Significant Relation (2)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="otherMeta2_name"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Relationship of Significant Relation (2)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="otherMeta2_relationship"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Address of Significant Relation (2)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="otherMeta2_address"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Phone Number of Significant Relation (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="otherMeta2_phoneNumber"
              className="form-control"
              type="number"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Name of Significant Relation (3)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="otherMeta3_name"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Relationship of Significant Relation (3)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="otherMeta3_relationship"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Address of Significant Relation (3)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="otherMeta3_address"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Phone Number of Significant Relation (3)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="otherMeta3_phoneNumber"
              className="form-control"
              type="number"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Name of Significant Relation (4)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="otherMeta4_name"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Relationship of Significant Relation (4)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="otherMeta4_relationship"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Address of Significant Relation (4)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="otherMeta4_address"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Phone Number of Significant Relation (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="otherMeta4_phoneNumber"
              className="form-control"
              type="number"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            <h5>MEDICAL / DENTAL / DEVELOPMENTAL</h5>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Current Medical Information
            </label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              id="currentMedicalInformation"
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Developmental / Medical History
            </label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              id="developmental_medicalHistory"
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Drug Allergies</label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              id="drugAllergies"
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Food Allergies</label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              id="food1"
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Allergies</label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              id="allergies"
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Chronic Health</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="chronicHealth"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Health Strengths</label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              id="healthStrengths"
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Health Needs</label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              id="healthNeeds"
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Last Physical Examination
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="lastPhysicalExamination_date"
              className="form-control"
              type="date"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Location of Last Physical Examination
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="lastPhysicalExamination_location"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Who monitored the child's last physical examination?
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="lastPhysicalExamination_monitoredBy"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Last Dental Examination
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="lastDentalExamination_date"
              className="form-control"
              type="date"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Location of the Last Dental Examination
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="lastDentalExamination_location"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Who monitored the child's last dental examination?
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="lastDentalExamination_monitoredBy"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Last Optical Examination
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="lastOpticalExamination_date"
              className="form-control"
              type="date"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Location of the last optical examination
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="lastOpticalExamination_location"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Who monitored the last optical examination?
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="lastOpticalExamination_monitoredBy"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            <h5>
              CURRENT MEDICATIONS, DOSAGES AND TARGETED SYMPTOMS: NOTE: refer to
              current Medical Logs for Possible Recent Medication Alterations:
            </h5>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Medication (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms1_medication"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Dosage / Frequency (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms1_dosage_frequency"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Purpose (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms1_purpose"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Possible side effects (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms1_possibleSideEffects"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Monitored By (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms1_monitoredBy"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Medication (2)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms2_medication"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Dosage / Frequency (2)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms2_dosage_frequency"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Purpose (2)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms2_purpose"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Possible Side Effects (2)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms2_possibleSideEffects"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Monitored By (2)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms2_monitoredBy"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Medication (3)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms3_medication"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Dosage Frequency (3)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms3_dosage_frequency"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Purpose (3)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms3_purpose"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Possible Side Effects (3)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms3_possibleSideEffects"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Monitored By (3)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms3_monitoredBy"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Medication (4)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms4_medication"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Dosage Frequency (4)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms4_dosage_frequency"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Purpose (4)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms4_purpose"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Possible Side Effects (4)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms4_possibleSideEffects"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Monitored By (4)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms4_monitoredBy"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Medication (5)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms5_medication"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Dosage Frequency (5)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms5_dosage_frequency"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Purpose (5)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms5_purpose"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Possible Side Effects (5)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms5_possibleSideEffects"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Monitored By (5)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="currentMedications_dosages_targetedSymptoms5_monitoredBy"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Behavioral Strengths</label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="behavioralStrengths"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Behavioral Needs</label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="behavioralNeeds"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Behavioral Treatment Services
            </label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="behavioralTreatmentServices"
              className="form-control"></textarea>

          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Emotional Strengths</label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="emotionalStrengths"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">emotionalNeeds</label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="emotionalNeeds"
              className="form-control"></textarea>
           
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Emotional Treatment Services
            </label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="emotionalTreatmentServices"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            <h5>ISSUES OR CONCERNS THAT COULD INCREASE ESCALATING BEHAVIORS:
</h5>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Food</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="food2"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Eye Contact</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="eyeContact"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Physical Touch</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="physicalTouch"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Personal Property</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="personalProperty"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Certain Topics</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="certainTopics"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Known contraindications to the use of restraint
            </label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="knownContraindicationsToTheUuseOfRestraint"
              className="form-control"></textarea>

          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              De-escalating Techniques to avoid restraints (EBI)
            </label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="de_escalatingTechniquesToAvoidRestraints_ebi"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's De-escalation Technique:</label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="child_de_escalator"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Staff Member's De-escalation Technique:</label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="staff_de_escalator"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Therapist's De-escalation Technique:</label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="therapist_de_escalator"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Child's Preferred De-escalation
            </label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="childPreferred_de_escalation"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Intervention Strategies</label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="interventionStrategies"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">supervisionStrategies</label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="supervisionStrategies"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Social Recreational Strengths
            </label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="social_recreationalStrengths"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Social Recreational Needs
            </label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="social_recreationalNeeds"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Family Strengths</label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="familyStrengths"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Family Needs</label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="familyNeeds"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Name of visitor (1)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor1_name"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Relation of Visitor (1)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor1_relationship"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Frequency of visitation (1)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor1_frequency"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Who will visitor (1) be supervised by</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor1_supervisedBy"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Location of visitor (1)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor1_location"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Visitation length of vistitor (1)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor1_length"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Name of visitor (2)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor2_name"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Relation of Visitor (2)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor2_relationship"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Frequency of visitation (2)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor2_frequency"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Who will visitor (2) be supervised by</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor2_supervisedBy"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Location of visitor (2)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor2_location"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Visitation length of vistitor (2)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor2_length"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Name of visitor (3)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor3_name"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Relation of Visitor (3)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor3_relationship"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Frequency of visitation (3)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor3_frequency"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Who will visitor (3) be supervised by</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor3_supervisedBy"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Location of visitor (3)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor3_location"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Visitation length of vistitor (3)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor3_length"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Name of visitor (4)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor4_name"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Relation of Visitor (4)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor4_relationship"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Frequency of visitation (4)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor4_frequency"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Who will visitor (4) be supervised by</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor4_supervisedBy"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Location of visitor (4)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor4_location"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Visitation length of vistitor (4)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="visitor4_length"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Educational / Vacational Strengths
            </label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="educational_vacationalStrengths"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Educational / Vacational Needs
            </label>{" "}
            <textarea  onChange={this.handleFieldInput}
              id="educational_vacationalNeeds"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Transitional Living</label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="transitionalLiving"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Discharge Planning</label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="dischargePlanning"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Long Range Goals</label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="longRangeGoals"
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Short Range Goals</label>{" "}
            <textarea onChange={this.handleFieldInput}
              id="shortRangeGoals"
              className="form-control"></textarea>
          </div>
          {/* <div className="form-group logInInputField">
            {" "}
            <label className="control-label">administorSign</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="administorSign"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">administorSignDate</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="administorSignDate"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">treatmentDirectorSign</label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="treatmentDirectorSign"
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              treatmentDirectorSignDate
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              id="treatmentDirectorSignDate"
              className="form-control"
              type="text"
            />{" "}
          </div> */}
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
      );
    } else {
      return (
        <div style={{ margin: "50px 100px 0px 100px" }}>
          <div style={{ margin: "75px 0px" }}>
            <h2>72 Hour Treatment Plan</h2>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's Name</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.childMeta_name} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's Date of Birth</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.childMeta_dob} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="date"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's Age</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.childMeta_age} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="number"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's SSN</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.childMeta_ssn} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="number"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's Gender</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.childMeta_gender} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Child's Medicaid Number
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.childMeta_medicaidNumber} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's Birth County</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.childMeta_county} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Child's Place of Birth (City, State)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.childMeta_placeOfBirth} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's Ethnicity</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.childMeta_ethnicity} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's Level of Care</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.childMeta_levelOfCare} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's Religion</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.childMeta_religion} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Child's Managing Conservator
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.childMeta_managingConservator} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Child's Date of Admission
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.childMeta_dateOfAdmission} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="date"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Projected Date For Achieving Permanency
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.projectedDateForAchievingPermanency} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="date"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Legal Status / Permancy Goal
            </label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              value={this.props.formData.legalStatus_PermancyGoal} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Father's Name</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.fatherMeta_name} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Father's Address</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.fatherMeta_address} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Father's Phone Number</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.fatherMeta_phoneNumber} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="number"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Mother's Name</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.motherMeta_name} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Mother's Address</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.motherMeta_address} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Mother Phone Number</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.motherMeta_phoneNumber} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="number"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Legal Status</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.legalStatus} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Referring Agency / Co</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.referringAgency_co} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Name of Agent of Referring Agency / Co
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.agentOfReferringAgency_co_name} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Address of Agent of Referring Agency / Co
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.agentOfReferringAgency_co_address} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Child's Reaction to Placement
            </label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              value={this.props.formData.reactionToPlacement} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's Interests</label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              value={this.props.formData.interests} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            <h5>
              Significant relationship to the child{" "}
              <i>(siblings, others relatives, CASA workers, and attorney)</i>:
            </h5>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Name of Significant Relation (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.otherMeta1_name} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Relationship of Significant Relation (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.otherMeta1_relationship} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Adress of Significant Relation (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.otherMeta1_address} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Phone Number of Significant Relation (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.otherMeta1_phoneNumber} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="number"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Name of Significant Relation (2)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.otherMeta2_name} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Relationship of Significant Relation (2)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.otherMeta2_relationship} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Address of Significant Relation (2)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.otherMeta2_address} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Phone Number of Significant Relation (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.otherMeta2_phoneNumber} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="number"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Name of Significant Relation (3)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.otherMeta3_name} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Relationship of Significant Relation (3)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.otherMeta3_relationship} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Address of Significant Relation (3)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.otherMeta3_address} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Phone Number of Significant Relation (3)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.otherMeta3_phoneNumber} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="number"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Name of Significant Relation (4)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.otherMeta4_name} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Relationship of Significant Relation (4)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.otherMeta4_relationship} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Address of Significant Relation (4)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.otherMeta4_address} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Phone Number of Significant Relation (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.otherMeta4_phoneNumber} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="number"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            <h5>MEDICAL / DENTAL / DEVELOPMENTAL</h5>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Current Medical Information
            </label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedicalInformation} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Developmental / Medical History
            </label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              value={this.props.formData.developmental_medicalHistory} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Drug Allergies</label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              value={this.props.formData.drugAllergies} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Food Allergies</label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              value={this.props.formData.food1} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Allergies</label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              value={this.props.formData.allergies} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Chronic Health</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.chronicHealth} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Health Strengths</label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              value={this.props.formData.healthStrengths} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Health Needs</label>{" "}
            <textarea
              onChange={this.handleFieldInput}
              value={this.props.formData.healthNeeds} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Last Physical Examination
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.lastPhysicalExamination_date} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="date"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Location of Last Physical Examination
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.lastPhysicalExamination_location} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Who monitored the child's last physical examination?
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.lastPhysicalExamination_monitoredBy} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Last Dental Examination
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.lastDentalExamination_date} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="date"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Location of the Last Dental Examination
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.lastDentalExamination_location} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Who monitored the child's last dental examination?
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.lastDentalExamination_monitoredBy} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Last Optical Examination
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.lastOpticalExamination_date} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="date"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Location of the last optical examination
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.lastOpticalExamination_location} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Who monitored the last optical examination?
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.lastOpticalExamination_monitoredBy} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            <h5>
              CURRENT MEDICATIONS, DOSAGES AND TARGETED SYMPTOMS: NOTE: refer to
              current Medical Logs for Possible Recent Medication Alterations:
            </h5>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Medication (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms1_medication} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Dosage / Frequency (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms1_dosage_frequency} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Purpose (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms1_purpose} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Possible side effects (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms1_possibleSideEffects} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Monitored By (1)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms1_monitoredBy} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Medication (2)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms2_medication} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Dosage / Frequency (2)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms2_dosage_frequency} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Purpose (2)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms2_purpose} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Possible Side Effects (2)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms2_possibleSideEffects} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Monitored By (2)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms2_monitoredBy} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Medication (3)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms3_medication} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Dosage Frequency (3)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms3_dosage_frequency} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Purpose (3)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms3_purpose} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Possible Side Effects (3)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms3_possibleSideEffects} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Monitored By (3)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms3_monitoredBy} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Medication (4)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms4_medication} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Dosage Frequency (4)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms4_dosage_frequency} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Purpose (4)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms4_purpose} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Possible Side Effects (4)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms4_possibleSideEffects} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Monitored By (4)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms4_monitoredBy} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Medication (5)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms5_medication} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Dosage Frequency (5)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms5_dosage_frequency} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Purpose (5)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms5_purpose} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Possible Side Effects (5)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms5_possibleSideEffects} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Monitored By (5)
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.currentMedications_dosages_targetedSymptoms5_monitoredBy} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Behavioral Strengths</label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.behavioralStrengths} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Behavioral Needs</label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.behavioralNeeds} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Behavioral Treatment Services
            </label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.behavioralTreatmentServices} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>

          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Emotional Strengths</label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.emotionalStrengths} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">emotionalNeeds</label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.emotionalNeeds} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
           
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Emotional Treatment Services
            </label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.emotionalTreatmentServices} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            <h5>ISSUES OR CONCERNS THAT COULD INCREASE ESCALATING BEHAVIORS:
</h5>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Food</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.food2} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Eye Contact</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.eyeContact} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Physical Touch</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.physicalTouch} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Personal Property</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.personalProperty} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Certain Topics</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.certainTopics} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Known contraindications to the use of restraint
            </label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.knownContraindicationsToTheUuseOfRestraint} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>

          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              De-escalating Techniques to avoid restraints (EBI)
            </label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.de_escalatingTechniquesToAvoidRestraints_ebi} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Child's De-escalation Technique:</label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.child_de_escalator} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Staff Member's De-escalation Technique:</label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.staff_de_escalator} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Therapist's De-escalation Technique:</label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.therapist_de_escalator} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Child's Preferred De-escalation
            </label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.childPreferred_de_escalation} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Intervention Strategies</label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.interventionStrategies} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">supervisionStrategies</label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.supervisionStrategies} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Social Recreational Strengths
            </label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.social_recreationalStrengths} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Social Recreational Needs
            </label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.social_recreationalNeeds} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Family Strengths</label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.familyStrengths} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Family Needs</label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.familyNeeds} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Name of visitor (1)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor1_name} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Relation of Visitor (1)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor1_relationship} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Frequency of visitation (1)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor1_frequency} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Who will visitor (1) be supervised by</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor1_supervisedBy} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Location of visitor (1)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor1_location} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Visitation length of vistitor (1)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor1_length} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Name of visitor (2)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor2_name} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Relation of Visitor (2)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor2_relationship} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Frequency of visitation (2)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor2_frequency} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Who will visitor (2) be supervised by</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor2_supervisedBy} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Location of visitor (2)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor2_location} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Visitation length of vistitor (2)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor2_length} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Name of visitor (3)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor3_name} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Relation of Visitor (3)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor3_relationship} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Frequency of visitation (3)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor3_frequency} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Who will visitor (3) be supervised by</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor3_supervisedBy} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Location of visitor (3)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor3_location} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Visitation length of vistitor (3)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor3_length} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Name of visitor (4)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor4_name} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Relation of Visitor (4)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor4_relationship} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Frequency of visitation (4)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor4_frequency} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Who will visitor (4) be supervised by</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor4_supervisedBy} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Location of visitor (4)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor4_location} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Visitation length of vistitor (4)</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.visitor4_length} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Educational / Vacational Strengths
            </label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.educational_vacationalStrengths} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              Educational / Vacational Needs
            </label>{" "}
            <textarea  onChange={this.handleFieldInput}
              value={this.props.formData.educational_vacationalNeeds} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Transitional Living</label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.transitionalLiving} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Discharge Planning</label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.dischargePlanning} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Long Range Goals</label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.longRangeGoals} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">Short Range Goals</label>{" "}
            <textarea onChange={this.handleFieldInput}
              value={this.props.formData.shortRangeGoals} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"></textarea>
          </div>
          {/* <div className="form-group logInInputField">
            {" "}
            <label className="control-label">administorSign</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.administorSign} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">administorSignDate</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.administorSignDate} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">treatmentDirectorSign</label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.treatmentDirectorSign} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div>
          <div className="form-group logInInputField">
            {" "}
            <label className="control-label">
              treatmentDirectorSignDate
            </label>{" "}
            <input
              onChange={this.handleFieldInput}
              value={this.props.formData.treatmentDirectorSignDate} disabled={this.props.userObj.isAdmin ? false : true}
              className="form-control"
              type="text"
            />{" "}
          </div> */}
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
      );
    }
  }
}

export default TreatmentPlan72;