 export interface CreateUser{
        data:data
 }
export interface data {
    customerCreate: CustomerCreate
  }
  
  export interface CustomerCreate {
    customer: Customer
    customerUserErrors: customerUserErrors[]
  }
  
  export interface Customer {
    firstName: string
    lastName: string
    email: string
    phone: string
    acceptsMarketing: boolean
  }
  export interface customerUserErrors {
    field: string[]
    message: string
    code: string
  }