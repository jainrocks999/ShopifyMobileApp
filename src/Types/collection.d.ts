export type collections = collection[]

export interface collection {
  id: string
  handle: string
  description: string
  descriptionHtml: string
  updatedAt: string
  title: string
  image?: Image
  products: Product[]
  type: Type14
  hasNextPage: any
  hasPreviousPage: any
  variableValues: VariableValues4
}

export interface Image {
  id: string
  src: string
  altText: any
  type: Type
}

export interface Type {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes
  implementsNode: boolean
}

export interface FieldBaseTypes {
  altText: string
  height: string
  id: string
  url: string
  width: string
}

export interface Product {
  id: string
  availableForSale: boolean
  createdAt: string
  updatedAt: string
  descriptionHtml: string
  description: string
  handle: string
  productType: string
  title: string
  vendor: string
  publishedAt: string
  onlineStoreUrl: string
  options: Option[]
  images: Image2[]
  variants: Variant[]
  type: Type13
  hasNextPage: any
  hasPreviousPage: any
  variableValues: VariableValues3
}

export interface Option {
  id: string
  name: string
  values: Value[]
  type: Type3
}

export interface Value {
  value: string
  type: Type2
}

export interface Type2 {
  name: string
  kind: string
}

export interface Type3 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes2
  implementsNode: boolean
}

export interface FieldBaseTypes2 {
  name: string
  values: string
}

export interface Image2 {
  id: string
  src: string
  altText: any
  width: number
  height: number
  type: Type4
  hasNextPage: any
  hasPreviousPage: any
  variableValues: VariableValues
}

export interface Type4 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes3
  implementsNode: boolean
}

export interface FieldBaseTypes3 {
  altText: string
  height: string
  id: string
  url: string
  width: string
}

export interface VariableValues {
  first: number
  productsFirst: number
}

export interface Variant {
  id: string
  title: string
  price: Price
  priceV2: PriceV2
  weight: number
  available: boolean
  sku: string
  compareAtPrice?: CompareAtPrice
  compareAtPriceV2?: CompareAtPriceV2
  image: Image3
  selectedOptions: SelectedOption[]
  unitPrice: any
  unitPriceMeasurement: UnitPriceMeasurement
  type: Type12
  hasNextPage: any
  hasPreviousPage: any
  variableValues: VariableValues2
}

export interface Price {
  amount: string
  currencyCode: string
  type: Type5
}

export interface Type5 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes4
  implementsNode: boolean
}

export interface FieldBaseTypes4 {
  amount: string
  currencyCode: string
}

export interface PriceV2 {
  amount: string
  currencyCode: string
  type: Type6
}

export interface Type6 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes5
  implementsNode: boolean
}

export interface FieldBaseTypes5 {
  amount: string
  currencyCode: string
}

export interface CompareAtPrice {
  amount: string
  currencyCode: string
  type: Type7
}

export interface Type7 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes6
  implementsNode: boolean
}

export interface FieldBaseTypes6 {
  amount: string
  currencyCode: string
}

export interface CompareAtPriceV2 {
  amount: string
  currencyCode: string
  type: Type8
}

export interface Type8 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes7
  implementsNode: boolean
}

export interface FieldBaseTypes7 {
  amount: string
  currencyCode: string
}

export interface Image3 {
  id: string
  src: string
  altText: any
  width: number
  height: number
  type: Type9
}

export interface Type9 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes8
  implementsNode: boolean
}

export interface FieldBaseTypes8 {
  altText: string
  height: string
  id: string
  url: string
  width: string
}

export interface SelectedOption {
  name: string
  value: string
  type: Type10
}

export interface Type10 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes9
  implementsNode: boolean
}

export interface FieldBaseTypes9 {
  name: string
  value: string
}

export interface UnitPriceMeasurement {
  measuredType: any
  quantityUnit: any
  quantityValue: number
  referenceUnit: any
  referenceValue: number
  type: Type11
}

export interface Type11 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes10
  implementsNode: boolean
}

export interface FieldBaseTypes10 {
  measuredType: string
  quantityUnit: string
  quantityValue: string
  referenceUnit: string
  referenceValue: string
}

export interface Type12 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes11
  implementsNode: boolean
}

export interface FieldBaseTypes11 {
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

export interface VariableValues2 {
  first: number
  productsFirst: number
}

export interface Type13 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes12
  implementsNode: boolean
}

export interface FieldBaseTypes12 {
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

export interface VariableValues3 {
  first: number
  productsFirst: number
}

export interface Type14 {
  name: string
  kind: string
  fieldBaseTypes: FieldBaseTypes13
  implementsNode: boolean
}

export interface FieldBaseTypes13 {
  description: string
  descriptionHtml: string
  handle: string
  id: string
  image: string
  products: string
  title: string
  updatedAt: string
}

export interface VariableValues4 {
  first: number
  productsFirst: number
}
