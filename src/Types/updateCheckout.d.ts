export interface updateCheckouts {
    id: string
    ready: boolean
    requiresShipping: boolean
    note: any
    paymentDue: PaymentDue
    paymentDueV2: PaymentDueV2
    webUrl: string
    orderStatusUrl: any
    taxExempt: boolean
    taxesIncluded: boolean
    currencyCode: string
    totalTax: TotalTax
    totalTaxV2: TotalTaxV2
    lineItemsSubtotalPrice: LineItemsSubtotalPrice
    subtotalPrice: SubtotalPrice
    subtotalPriceV2: SubtotalPriceV2
    totalPrice: TotalPrice
    totalPriceV2: TotalPriceV2
    completedAt: any
    createdAt: string
    updatedAt: string
    email: string
    discountApplications: any[]
    appliedGiftCards: any[]
    shippingAddress: ShippingAddress
    shippingLine: any
    customAttributes: any[]
    order: any
    lineItems: LineItem[]
    type: Type20
    userErrors: any[]
  }
  
  export interface PaymentDue {
    amount: string
    currencyCode: string
    type: Type
  }
  
  export interface Type {
    name: string
    kind: string
    fieldBaseTypes: FieldBaseTypes
    implementsNode: boolean
  }
  
  export interface FieldBaseTypes {
    amount: string
    currencyCode: string
  }
  
  export interface PaymentDueV2 {
    amount: string
    currencyCode: string
    type: Type2
  }
  
  export interface Type2 {
    name: string
    kind: string
    fieldBaseTypes: FieldBaseTypes2
    implementsNode: boolean
  }
  
  export interface FieldBaseTypes2 {
    amount: string
    currencyCode: string
  }
  
  export interface TotalTax {
    amount: string
    currencyCode: string
    type: Type3
  }
  
  export interface Type3 {
    name: string
    kind: string
    fieldBaseTypes: FieldBaseTypes3
    implementsNode: boolean
  }
  
  export interface FieldBaseTypes3 {
    amount: string
    currencyCode: string
  }
  
  export interface TotalTaxV2 {
    amount: string
    currencyCode: string
    type: Type4
  }
  
  export interface Type4 {
    name: string
    kind: string
    fieldBaseTypes: FieldBaseTypes4
    implementsNode: boolean
  }
  
  export interface FieldBaseTypes4 {
    amount: string
    currencyCode: string
  }
  
  export interface LineItemsSubtotalPrice {
    amount: string
    currencyCode: string
    type: Type5
  }
  
  export interface Type5 {
    name: string
    kind: string
    fieldBaseTypes: FieldBaseTypes5
    implementsNode: boolean
  }
  
  export interface FieldBaseTypes5 {
    amount: string
    currencyCode: string
  }
  
  export interface SubtotalPrice {
    amount: string
    currencyCode: string
    type: Type6
  }
  
  export interface Type6 {
    name: string
    kind: string
    fieldBaseTypes: FieldBaseTypes6
    implementsNode: boolean
  }
  
  export interface FieldBaseTypes6 {
    amount: string
    currencyCode: string
  }
  
  export interface SubtotalPriceV2 {
    amount: string
    currencyCode: string
    type: Type7
  }
  
  export interface Type7 {
    name: string
    kind: string
    fieldBaseTypes: FieldBaseTypes7
    implementsNode: boolean
  }
  
  export interface FieldBaseTypes7 {
    amount: string
    currencyCode: string
  }
  
  export interface TotalPrice {
    amount: string
    currencyCode: string
    type: Type8
  }
  
  export interface Type8 {
    name: string
    kind: string
    fieldBaseTypes: FieldBaseTypes8
    implementsNode: boolean
  }
  
  export interface FieldBaseTypes8 {
    amount: string
    currencyCode: string
  }
  
  export interface TotalPriceV2 {
    amount: string
    currencyCode: string
    type: Type9
  }
  
  export interface Type9 {
    name: string
    kind: string
    fieldBaseTypes: FieldBaseTypes9
    implementsNode: boolean
  }
  
  export interface FieldBaseTypes9 {
    amount: string
    currencyCode: string
  }
  
  export interface ShippingAddress {
    id: string
    address1: string
    address2: string
    city: string
    company: string
    country: string
    firstName: string
    formatted: Formatted[]
    lastName: string
    latitude: any
    longitude: any
    phone: string
    province: string
    zip: string
    name: string
    countryCode: string
    provinceCode: string
    type: Type11
  }
  
  export interface Formatted {
    value: string
    type: Type10
  }
  
  export interface Type10 {
    name: string
    kind: string
  }
  
  export interface Type11 {
    name: string
    kind: string
    fieldBaseTypes: FieldBaseTypes10
    implementsNode: boolean
  }
  
  export interface FieldBaseTypes10 {
    address1: string
    address2: string
    city: string
    company: string
    country: string
    countryCodeV2: string
    firstName: string
    formatted: string
    id: string
    lastName: string
    latitude: string
    longitude: string
    name: string
    phone: string
    province: string
    provinceCode: string
    zip: string
  }
  
  export interface LineItem {
    id: string
    title: string
    variant: Variant
    quantity: number
    customAttributes: any[]
    discountAllocations: any[]
    type: Type19
    hasNextPage: any
    hasPreviousPage: any
    variableValues: VariableValues
  }
  
  export interface Variant {
    id: string
    title: string
    price: Price
    priceV2: PriceV2
    weight: number
    available: boolean
    sku: string
    compareAtPrice: any
    compareAtPriceV2: any
    image: Image
    selectedOptions: SelectedOption[]
    unitPrice: any
    unitPriceMeasurement: UnitPriceMeasurement
    product: Product
    type: Type18
  }
  
  export interface Price {
    amount: string
    currencyCode: string
    type: Type12
  }
  
  export interface Type12 {
    name: string
    kind: string
    fieldBaseTypes: FieldBaseTypes11
    implementsNode: boolean
  }
  
  export interface FieldBaseTypes11 {
    amount: string
    currencyCode: string
  }
  
  export interface PriceV2 {
    amount: string
    currencyCode: string
    type: Type13
  }
  
  export interface Type13 {
    name: string
    kind: string
    fieldBaseTypes: FieldBaseTypes12
    implementsNode: boolean
  }
  
  export interface FieldBaseTypes12 {
    amount: string
    currencyCode: string
  }
  
  export interface Image {
    id: string
    src: string
    altText: any
    width: number
    height: number
    type: Type14
  }
  
  export interface Type14 {
    name: string
    kind: string
    fieldBaseTypes: FieldBaseTypes13
    implementsNode: boolean
  }
  
  export interface FieldBaseTypes13 {
    altText: string
    height: string
    id: string
    url: string
    width: string
  }
  
  export interface SelectedOption {
    name: string
    value: string
    type: Type15
  }
  
  export interface Type15 {
    name: string
    kind: string
    fieldBaseTypes: FieldBaseTypes14
    implementsNode: boolean
  }
  
  export interface FieldBaseTypes14 {
    name: string
    value: string
  }
  
  export interface UnitPriceMeasurement {
    measuredType: any
    quantityUnit: any
    quantityValue: number
    referenceUnit: any
    referenceValue: number
    type: Type16
  }
  
  export interface Type16 {
    name: string
    kind: string
    fieldBaseTypes: FieldBaseTypes15
    implementsNode: boolean
  }
  
  export interface FieldBaseTypes15 {
    measuredType: string
    quantityUnit: string
    quantityValue: string
    referenceUnit: string
    referenceValue: string
  }
  
  export interface Product {
    id: string
    handle: string
    type: Type17
  }
  
  export interface Type17 {
    name: string
    kind: string
    fieldBaseTypes: FieldBaseTypes16
    implementsNode: boolean
  }
  
  export interface FieldBaseTypes16 {
    availableForSale: string
    createdAt: string
    description: string
    descriptionHtml: string
    handle: string
    id: string
    images: string
    onlineStoreUrl: string
    options: string
    productType: string
    publishedAt: string
    title: string
    updatedAt: string
    variants: string
    vendor: string
  }
  
  export interface Type18 {
    name: string
    kind: string
    fieldBaseTypes: FieldBaseTypes17
    implementsNode: boolean
  }
  
  export interface FieldBaseTypes17 {
    availableForSale: string
    compareAtPrice: string
    id: string
    image: string
    price: string
    product: string
    selectedOptions: string
    sku: string
    title: string
    unitPrice: string
    unitPriceMeasurement: string
    weight: string
  }
  
  export interface Type19 {
    name: string
    kind: string
    fieldBaseTypes: FieldBaseTypes18
    implementsNode: boolean
  }
  
  export interface FieldBaseTypes18 {
    customAttributes: string
    discountAllocations: string
    id: string
    quantity: string
    title: string
    variant: string
  }
  
  export interface VariableValues {
    checkoutId: string
    shippingAddress: ShippingAddress2
  }
  
  export interface ShippingAddress2 {
    firstName: string
    lastName: string
    company: string
    address1: string
    address2: string
    city: string
    country: string
    province: string
    phone: string
    zip: string
  }
  
  export interface Type20 {
    name: string
    kind: string
    fieldBaseTypes: FieldBaseTypes19
    implementsNode: boolean
  }
  
  export interface FieldBaseTypes19 {
    appliedGiftCards: string
    completedAt: string
    createdAt: string
    currencyCode: string
    customAttributes: string
    discountApplications: string
    email: string
    id: string
    lineItems: string
    lineItemsSubtotalPrice: string
    note: string
    order: string
    orderStatusUrl: string
    paymentDue: string
    ready: string
    requiresShipping: string
    shippingAddress: string
    shippingLine: string
    subtotalPrice: string
    taxExempt: string
    taxesIncluded: string
    totalPrice: string
    totalTax: string
    updatedAt: string
    webUrl: string
  }
  