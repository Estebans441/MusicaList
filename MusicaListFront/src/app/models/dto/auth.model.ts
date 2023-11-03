export class AuthModel {
  role: String;
  uid: number;

  constructor(role: String, uid: number) {
    this.role = role;
    this.uid = uid;
  }
}
