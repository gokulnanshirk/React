import courses from "../data/courses";

let rootReducer = function(currentState = courses, action) {
  console.log("action is :", action, "current state is :", currentState);

  switch (action.type) {
    case "REMOVE_COURSE":
      return removeCourseData(action.data, currentState);
    case "ADD_COURSE":
      return addCourseNew(action.course, currentState);
  }
  return currentState;
};

function removeCourseData(data, state) {
  let index = state.indexOf(data);
  console.log(index);
  return [...state.splice(0, index), ...state.splice(index + 1)];
}
function addCourseNew(newCourse, state) {
  return [...state, newCourse];
}

export default rootReducer;
