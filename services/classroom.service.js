const Classroom = require("../models/Classroom");
const User = require("../models/User");

/**
 *
 * @param {User} user
 * @param query
 */
function getClassroomOwner(user, query) {
  return user.$relatedQuery("classroom_owner").where(query);
}

/**
 *
 * @param {User} user
 * @param query
 */
function getClassroomJoined(user, query) {
  return user.$relatedQuery("classroom_joined").where(query);
}

function getAllClassrooms(query) {
  return Classroom.query().where(query);
}

/**
 *
 * @param {int} classroomId
 */
function getClassroom(classroomId) {
  return Classroom.query()
      .findById(classroomId);
}

/**
 *
 * @param {Classroom} classroom
 */
function getOwners(classroom) {
  return classroom.$relatedQuery("owner");
}

/**
 *
 * @param {Classroom}classroom
 */
function getStudents(classroom) {
  return classroom.$relatedQuery("students").where('status', 'Accepted');
}

/**
 *
 * @param {User|Model} user
 * @param {Classroom} classroom
 */
function joinClassroom(user, classroom) {
  return classroom.$relatedQuery("students").relate(user);
}

/**
 *
 * @param {User|Model} user
 * @param {Classroom} classroom
 */
function leaveClassroom(user, classroom) {
  return classroom.$relatedQuery("students")
      .unrelate()
      .where(user);
}

/**
 * Create new classroom
 * @param {Classroom} classroom
 */
function createClassroom(classroom) {
  return Classroom.query().insert(classroom);
}

/**
 *
 * @param {Classroom} classroom
 * @param {User} owner
 */
function addOwnerClassroom(classroom, owner) {
  return classroom.$relatedQuery("owner").relate(owner);
}

/**
 *
 * @param {Classroom} classroom
 */
function deleteClassroom(classroom) {
  return classroom.$query().delete();
}

/**
 *
 * @param {Classroom} classroom
 * @param {{code: *, school: *, name: *}} newClassroom
 */
function updateClassroom(classroom, newClassroom) {
  return classroom.$query().patchAndFetch(newClassroom);
}

/**
 *
 * @param {Classroom} classroom
 * @param {Classroom|Model} newClassroom
 */
function patchClassroom(classroom, newClassroom) {
  return classroom.$query().patchAndFetch(newClassroom);
}

module.exports = {
  getAllClassrooms,
  getClassroom,
  createClassroom,
  addOwnerClassroom,
  deleteClassroom,
  updateClassroom,
  patchClassroom,
  getOwners,
  getStudents,
  joinClassroom,
  leaveClassroom,
  getClassroomOwner,
  getClassroomJoined
}