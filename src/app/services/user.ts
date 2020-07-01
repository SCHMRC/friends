export class User {
  email: string;
  nome: string;
  mobile: string;
  uid: string;
  friendcount: number;
  image: string;
  constructor(email: string, nome: string, mobile: string, uid: string, friendcount: number) {
    this.email = email;
    this.nome = nome;
    this.mobile = mobile;
    this.uid = uid;
    this.friendcount = friendcount;

  }
}
