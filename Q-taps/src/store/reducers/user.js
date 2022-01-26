import {
  FETCHING_AGENCY_USER_PROFILE,
  FETCHING_AGENCY_USER_PROFILE_SUCCESS,
  FETCHING_AGENCY_USER_PROFILE_FAILED,
  FETCHING_AGENCY_USER_DETAILS,
  AGENCY_THEME,
  AGENCY_USER_PROFILE_PIC
} from "../types";

const initialState = {
  isFetchingAgencyUserProfile: false,
  agencyUserProfile: [],
  agencyDetails: [],
  agencyTheme: "",
  userProfilePic: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_AGENCY_USER_PROFILE:
      return {
        ...state,
        isFetchingAgencyUserProfile: true
      };
    case FETCHING_AGENCY_USER_PROFILE_SUCCESS:
      const agencyUserProfile = action.payload;
      return {
        ...state,
        isFetchingAgencyUserProfile: false,
        agencyUserProfile: agencyUserProfile
      };
    case FETCHING_AGENCY_USER_PROFILE_FAILED:
      return {
        ...state,
        isFetchingAgencyUserProfile: false
      };
    case FETCHING_AGENCY_USER_DETAILS:
      const agencyUserDetails = action.payload;
      return {
        ...state,
        isFetchingAgencyUserProfile: false,
        agencyDetails: agencyUserDetails
      };
    case AGENCY_THEME:
      const theme = action.payload;
      return {
        ...state,
        agencyTheme: theme
      };

    case AGENCY_USER_PROFILE_PIC:
      const data = action.payload;
      return {
        ...state,
        userProfilePic: data
      };

    default:
      return state;
  }
}
