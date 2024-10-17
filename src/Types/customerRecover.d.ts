export interface CustomerRecovers {
    data: Data
  }
  
  export interface Data {
    customerRecover: CustomerRecover
  }
  
  export interface CustomerRecover {
    customerUserErrors: CustomerUserError[]
  }
  
  export interface CustomerUserError {
    code: string
    field: string[]
    message: string
  }
  