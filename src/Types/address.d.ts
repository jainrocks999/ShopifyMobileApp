export interface Address {
    data: Data
  }
  
  export interface Data {
    customerAddressCreate: CustomerAddressCreate
    customerAddressDelete:CustomerAddressDelete
    customerAddressUpdate:CustomerAddressUpdate
    customerDefaultAddressUpdate:CustomerDefaultAddressUpdate
  }
  export interface CustomerDefaultAddressUpdate {
    customer: Customer
    customerUserErrors: CustomerUserError[]
  }
  export interface CustomerAddressUpdate {
    customerAddress: CustomerAddress
    customerUserErrors:CustomerUserError[]
  }
  export interface CustomerAddressDelete {
    customerUserErrors: CustomerUserError[]
    deletedCustomerAddressId: string
  }
  
  export interface CustomerAddressCreate {
    customerAddress: CustomerAddress
    customerUserErrors: CustomerUserError[]
  }
  
  export interface CustomerAddress {
    address1: string
    address2: string
    city: string
    company: string
    countryCodeV2: string
    firstName: string
    lastName: string
  }
  export interface CustomerUserError {
    code: string
    field: string[]
    message: string
  }