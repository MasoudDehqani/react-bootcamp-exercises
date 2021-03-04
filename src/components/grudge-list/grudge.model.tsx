export interface GrudgeItemType {
  person?: string;
  reason?: string;
  id: string;
  forgiven: boolean;
}

export default class GrudgeItem implements GrudgeItemType {
  constructor(public person?: string, public reason?: string) {
    this.person = person;
    this.reason = reason;
  }

  id = new Date().toString();
  forgiven = false;
}