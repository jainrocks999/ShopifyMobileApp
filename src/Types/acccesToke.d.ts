export interface accessToken
 {
    data: Data
  }
  
  export interface Data {
    customerAccessTokenCreate: CustomerAccessTokenCreate
  }
  
  export interface CustomerAccessTokenCreate {
    customerAccessToken: CustomerAccessToken
    customerUserErrors: customerUserErrors[]
  }
  
  export interface CustomerAccessToken {
    accessToken: string
  }
  export interface customerUserErrors{
     message:string    
  }