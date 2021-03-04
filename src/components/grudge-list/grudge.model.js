export default class GrudgeItem {
  constructor(person, reason) {
    this.person = person;
    this.reason = reason;
  }

  id = new Date().toString();
  forgiven = false;
}
