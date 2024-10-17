export interface Updatecustumer {
    data: Data
  }
  
  export interface Data {
    customerUpdate: CustomerUpdate
  }
  
  export interface CustomerUpdate {
    customer: Customer
    customerAccessToken: string
    customerUserErrors: CustomerUserError[]
  }
  
  export interface Customer {
    firstName: string
    acceptsMarketing: boolean
  }
  export interface CustomerUserError {
    code: string
    field: string[]
    message: string
  }
  