let student = true; // Check if the person is a student

//gives frontend

let skill = {
  skill1: "html",
  skill2: "css",
  skill3: "bootstrap",
  skill4:"",
  skill6: "", 
};

let result_uiux = skill.skill1 && skill.skill2 && skill.skill3;
let result_frontend =
  skill.skill1 &&
  skill.skill2 &&
  skill.skill3 &&
  skill.skill4 &&
  skill.skill6;
let result_backend =
  skill.skill1 &&
  skill.skill2 &&
  skill.skill3 &&
  skill.skill5 &&
  skill.skill6;
let result_fullstack =
  skill.skill1 &&
  skill.skill2 &&
  skill.skill3 &&
  skill.skill4 &&
  skill.skill5 &&
  skill.skill6;
student
  ? result_fullstack
    ? console.log("Fullstack Developer")
    : result_backend
    ? console.log("Backend Developer")
    : result_frontend
    ? console.log("Frontend Developer")
    : result_uiux
    ? console.log("UI/UX Designer")
    : console.log("Please improve your skills by joining 1000 coders")
  : console.log("Please login");


