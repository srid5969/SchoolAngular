export class ApiResponse {
  getStudents() {
    throw new Error('Method not implemented.');
  }

    status!: number;
    message!: number;
    result: any;
    firstName:any;
    dataTablesparameters:any
 

    token!: string;
  users!:{
    firstName:string;
    role:any;
    token:any;
  }
  userinfo!: {
    firstName:string;
    role:any;
  }
  }
  