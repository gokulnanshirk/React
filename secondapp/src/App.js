import React from "react";
import Courses from "./components/courses";

const courses = [
  { id: 1, title: "React" },
  { id: 2, title: "Angular" },
  { id: 3, title: "Ionic" },
  { id: 4, title: "JavaScript" },
  { id: 5, title: "TypeScript" }
];

function App() {
  return (
    <div>
      <Courses data={courses} />
    </div>
  );
}

export default App;
