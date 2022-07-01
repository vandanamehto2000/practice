const day = "sunday";
switch (day) {
    case "monday": // day === "monday"
        console.log("plan course structure");
        console.log("GO to coding meetup")
        break;
    case "tuesday":
        console.log("prepare theory videos");
        break;
    case "wednesday":
    case "thursday":    
        console.log("write code example");
        break;
    case "friday":
        console.log("Record vidos");
        break;
    case "saturday":
    case "":
        console.log("enjoy the weekend D");
        break;
    default:
        console.log("not a valid day");        

}