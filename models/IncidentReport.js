const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IncidentReportSchema = new Schema({
  childMeta_name: {
    type: String
    //required: true
  },
  childMeta_gender: {
    type: String
    // required: true
  },
  childMeta_dob: {
    type: Date,
    default: new Date()
    //required:true
  },
  childMeta_dateOfAdmission: {
    type: Date
    // required: true
  },
  dateOfIncident: {
    type: Date
    // required: true
  },
  staff_involved_name: {
    type: String
    //required: true
  },
  staff_involved_gender: {
    type: String
    // required: true
  },

  time_of_incident: {
    type: String
    // required: true
  },
  staff_witness_name: {
    type: String
    //required: true
  },
  staff_witness_gender: {
    type: String
    // required: true
  },
  client_witness_name1: {
    type: String
    //required: true
  },
  client_witness_gender1: {
    type: String
    // required: true
  },
  client_witness_dob1: {
    type: Date
    // required: true
  },
  client_witness_doa1: {
    type: Date
    // required: true
  },
  client_witness_name2: {
    type: String
    //required: true
  },
  client_witness_gender2: {
    type: String
    // required: true
  },
  client_witness_dob2: {
    type: Date
    // required: true
  },
  client_witness_doa2: {
    type: Date
    // required: true
  },
  incident_explaination: {
    type: String
  },
  seperation: {
    type: String
  },
  result: {
    type: String
  },
  able_to_prevent: {
    type: String
  },
  follow_up_results: {
    type: String
  },
  notification_made_to: {
    type: String
  },
  notification_made_date_time: {
    type: Date
  },
  notification_made_by: {
    type: String
  },
  createdBy: {
    type: String,
    required: false
  },
  createdByName: {
    type: String,
    required: false
  },
  lastEditDate: {
    type: Date,
    default: new Date()
    //required:true
  },
  homeId: {
    type: String
  },

  formType: {
    type: String
  }
});

module.exports = IncidentReport = mongoose.model(
    "incidentReport",
    IncidentReportSchema
  );
  