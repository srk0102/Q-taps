import * as types from "../types";
import UserController from "../../controllers/userController";
import AgencyController from "../../controllers/agencyController"

const fetchingAgencyUserProfile = () => ({
  type: types.FETCHING_AGENCY_USER_PROFILE
});

export const fetchingAgencyUserSuccess = (data) => ({
  type: types.FETCHING_AGENCY_USER_PROFILE_SUCCESS,
  payload: data
});

const fetchingAgencyUserFailed = () => ({
  type: types.FETCHING_AGENCY_USER_PROFILE_FAILED
});

export const fetchingAgencyTheme = (val) => ({
  type: types.AGENCY_THEME,
  payload: val
});

export const userProfilePic = (val) => ({
  type: types.AGENCY_USER_PROFILE_PIC,
  payload: val
});

export const getAgencyDetailsAll = () => {
  return (dispatch, getState) => {
    const access_token = getState().common.tokenInfo.access_token;
    const agencyId = getState().common.tokenInfo.agency_id;

    const success = (data) => {
      dispatch(fetchingAgencyTheme(data)); 
    };
    const failure = (err) => {
      console.log(err);
    };
    AgencyController.getAgencyDetails(agencyId, access_token, success, failure);
  };
};

export const getAgencyUserProfiles = (userId) => {
  return (dispatch, getState) => {
    const access_token = getState().common.tokenInfo.access_token;
    const agencyId = getState().common.tokenInfo.agency_id;
    dispatch(fetchingAgencyUserProfile());
    var success = (data) => {
      // SET AGENCY GANG DATA
      dispatch(fetchingAgencyUserSuccess(data));
    };
    var failure = (err) => {
      console.log(err);
      dispatch(fetchingAgencyUserFailed());
    };
    UserController.getUserData(access_token, success, failure, agencyId);
  };
};
