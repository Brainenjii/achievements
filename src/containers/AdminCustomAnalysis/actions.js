export const ADMIN_CUSTOM_ANALYSIS_OPEN = "ADMIN_CUSTOM_ANALYSIS_OPEN";
export const adminCustomAnalysisOpen = isAdmin => ({
  type: ADMIN_CUSTOM_ANALYSIS_OPEN,
  isAdmin
});

export const ADMIN_STATUS_LOADED = "ADMIN_STATUS_LOADED";
export const adminStatusLoaded = isAdmin => ({
  type: ADMIN_STATUS_LOADED,
  isAdmin
});

export const ADMIN_STATUS_ERROR = "ADMIN_STATUS_ERROR";
export const adminStatusError = (isAdmin, error) => ({
  type: ADMIN_STATUS_ERROR,
  isAdmin,
  error
});

export const ADD_ADMIN_CUSTOM_ANALYSIS_REQUEST =
  "ADD_ADMIN_CUSTOM_ANALYSIS_REQUEST";
export const addAdminCustomAnalysisRequest = (
  customAnalysisUrl,
  customAnalysisName
) => ({
  type: ADD_ADMIN_CUSTOM_ANALYSIS_REQUEST,
  customAnalysisUrl,
  customAnalysisName
});

export const ADD_ADMIN_CUSTOM_ANALYSIS_SUCCESS =
  "ADD_ADMIN_CUSTOM_ANALYSIS_SUCCESS";
export const addAdminCustomAnalysisSuccess = (
  customAnalysisUrl,
  customAnalysisName
) => ({
  type: ADD_ADMIN_CUSTOM_ANALYSIS_SUCCESS,
  customAnalysisUrl,
  customAnalysisName
});

export const ADD_ADMIN_CUSTOM_ANALYSIS_FAIL = "ADD_ADMIN_CUSTOM_ANALYSIS_FAIL";
export const addAdminCustomAnalysisFail = (
  customAnalysisUrl,
  customAnalysisName,
  error
) => ({
  type: ADD_ADMIN_CUSTOM_ANALYSIS_FAIL,
  customAnalysisUrl,
  customAnalysisName,
  error
});

export const DELETE_ADMIN_CUSTOM_ANALYSIS_REQUEST =
  "DELETE_ADMIN_CUSTOM_ANALYSIS_REQUEST";
export const deleteAdminCustomAnalysisRequest = customAnalysisID => ({
  type: DELETE_ADMIN_CUSTOM_ANALYSIS_REQUEST,
  customAnalysisID
});

export const DELETE_ADMIN_CUSTOM_ANALYSIS_SUCCESS =
  "DELETE_ADMIN_CUSTOM_ANALYSIS_SUCCESS";
export const deleteAdminCustomAnalysisSuccess = customAnalysisID => ({
  type: DELETE_ADMIN_CUSTOM_ANALYSIS_SUCCESS,
  customAnalysisID
});

export const DELETE_ADMIN_CUSTOM_ANALYSIS_FAIL =
  "DELETE_ADMIN_CUSTOM_ANALYSIS_FAIL";
export const deleteAdminCustomAnalysisFail = (customAnalysisID, error) => ({
  type: DELETE_ADMIN_CUSTOM_ANALYSIS_FAIL,
  customAnalysisID,
  error
});
