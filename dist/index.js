"use strict";
//----------
// enums 101
//----------
var Priority;
(function (Priority) {
    Priority[Priority["Lowest"] = 0] = "Lowest";
    Priority[Priority["Low"] = 1] = "Low";
    Priority[Priority["Medium"] = 2] = "Medium";
    Priority[Priority["High"] = 3] = "High";
    Priority[Priority["Urgent"] = 4] = "Urgent";
})(Priority || (Priority = {}));
function addTicket(details, priority) {
    if (priority == Priority.Lowest) {
        // doing something
    }
    if (priority == 1) {
        // doing something
    }
    if (priority == 2) {
        // doing something
    }
    if (priority == 3) {
        // doing something
    }
    if (priority == 4) {
        // doing something
    }
}
addTicket('fix computer', Priority.Urgent);
