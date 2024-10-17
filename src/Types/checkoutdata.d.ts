export interface Checkouts {
  data: Data
  errors: Error[]
}

export interface Data {
  checkoutCreate: CheckoutCreate
  checkoutEmailUpdateV2:CheckoutEmailUpdateV2
  checkoutShippingAddressUpdateV2:CheckoutEmailUpdateV2
}

export interface CheckoutCreate {
  checkout: Checkout
  checkoutUserErrors: any[]
  queueToken: any
}
export interface CheckoutEmailUpdateV2 {
  checkout: Checkout
  checkoutUserErrors: any[]
}

export interface Checkout {
  id: string
  appliedGiftCards: any[]
  availableShippingRates: any
  buyerIdentity: BuyerIdentity
  completedAt: any
  createdAt: string
  currencyCode: string
  customAttributes: any[]
  discountApplications: DiscountApplications
  email: string
  lineItems: LineItems
  lineItemsSubtotalPrice: LineItemsSubtotalPrice
  note: any
  orderStatusUrl: any
  paymentDue: PaymentDue
  ready: boolean
  requiresShipping: boolean
  shippingAddress: any
  shippingDiscountAllocations: any[]
  shippingLine: any
  subtotalPrice: SubtotalPrice
  taxesIncluded: boolean
  taxExempt: boolean
  totalDuties: any
  totalPrice: TotalPrice
  totalTax: TotalTax
  updatedAt: string
  webUrl: string
}

export interface BuyerIdentity {
  countryCode: string
}

export interface DiscountApplications {
  edges: any[]
}

export interface LineItems {
  edges: Edge[]
}

export interface Edge {
  cursor: string
  node: Node
}

export interface Node {
  customAttributes: any[]
  discountAllocations: any[]
  id: string
  quantity: number
  title: string
  unitPrice: any
  variant: Variant
}

export interface Variant {
  availableForSale: boolean
  barcode: any
  compareAtPrice: any
  currentlyNotInStock: boolean
  id: string
  image: Image
  price: Price
  product: Product
}

export interface Image {
  altText: string
  height: number
  id: string
  url: string
  width: number
}

export interface Price {
  amount: string
  currencyCode: string
}

export interface Product {
  availableForSale: boolean
  collections: Collections
  compareAtPriceRange: CompareAtPriceRange
  createdAt: string
  description: string
  descriptionHtml: string
  featuredImage: FeaturedImage
  handle: string
  id: string
  images: Images
  isGiftCard: boolean
  media: Media
  onlineStoreUrl: any
  options: Option[]
  priceRange: PriceRange
  productType: string
  publishedAt: string
  requiresSellingPlan: boolean
  sellingPlanGroups: SellingPlanGroups
}

export interface Collections {
  edges: Edge2[]
}

export interface Edge2 {
  node: Node2
}

export interface Node2 {
  id: string
  title: string
}

export interface CompareAtPriceRange {
  maxVariantPrice: MaxVariantPrice
  minVariantPrice: MinVariantPrice
}

export interface MaxVariantPrice {
  amount: string
  currencyCode: string
}

export interface MinVariantPrice {
  amount: string
  currencyCode: string
}

export interface FeaturedImage {
  altText: string
  height: number
  id: string
  url: string
  width: number
}

export interface Images {
  edges: Edge3[]
  nodes: Node4[]
}

export interface Edge3 {
  cursor: string
  node: Node3
}

export interface Node3 {
  altText: string
  height: number
  id: string
  url: string
  width: number
}

export interface Node4 {
  altText: string
  height: number
  id: string
  url: string
  width: number
}

export interface Media {
  nodes: Node5[]
}

export interface Node5 {
  __typename: string
  id: string
  mediaContentType: string
  presentation: any
}

export interface Option {
  id: string
  name: string
  values: string[]
}

export interface PriceRange {
  maxVariantPrice: MaxVariantPrice2
  minVariantPrice: MinVariantPrice2
}

export interface MaxVariantPrice2 {
  amount: string
  currencyCode: string
}

export interface MinVariantPrice2 {
  amount: string
  currencyCode: string
}

export interface SellingPlanGroups {
  nodes: any[]
}

export interface LineItemsSubtotalPrice {
  amount: string
  currencyCode: string
}

export interface PaymentDue {
  amount: string
  currencyCode: string
}

export interface SubtotalPrice {
  amount: string
  currencyCode: string
}

export interface TotalPrice {
  amount: string
  currencyCode: string
}

export interface TotalTax {
  amount: string
  currencyCode: string
}

export interface Error {
  message: string
  locations: Location[]
  path: string[]
}

export interface Location {
  line: number
  column: number
}
