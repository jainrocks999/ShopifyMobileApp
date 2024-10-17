export interface CartItem {
    data: Data
  }
  
  export interface Data {
    cartCreate: CartCreate,
    cartLinesAdd:CartCreate
    cartLinesRemove:CartCreate
    cart:Cart
    cartLinesUpdate:CartCreate
  }
  
  export interface CartCreate {
    cart: Cart
  }
  
  export interface Cart {
    id: string
    checkoutUrl: string
    cost: Cost
    createdAt: string
    updatedAt: string
    lines: Lines
    attributes: Attribute2[]
    estimatedCost: EstimatedCost
    buyerIdentity: BuyerIdentity
  }
  
  export interface Cost {
    checkoutChargeAmount: CheckoutChargeAmount
    subtotalAmount: SubtotalAmount
    subtotalAmountEstimated: boolean
    totalAmount: TotalAmount
    totalAmountEstimated: boolean
    totalDutyAmount: any
    totalDutyAmountEstimated: boolean
    totalTaxAmount: TotalTaxAmount
    totalTaxAmountEstimated: boolean
  }
  
  export interface CheckoutChargeAmount {
    amount: string
    currencyCode: string
  }
  
  export interface SubtotalAmount {
    amount: string
    currencyCode: string
  }
  
  export interface TotalAmount {
    amount: string
    currencyCode: string
  }
  
  export interface TotalTaxAmount {
    amount: string
    currencyCode: string
  }
  
  export interface Lines {
    edges: Edge[]
  }
  
  export interface Edge {
    node: Node
  }
  
  export interface Node {
    id: string
    quantity: number
    cost: Cost2
    merchandise: Merchandise
    attributes: Attribute[]
  }
  
  export interface Cost2 {
    amountPerQuantity: AmountPerQuantity
    compareAtAmountPerQuantity: AmountPerQuantity
    subtotalAmount: SubtotalAmount2
    totalAmount: TotalAmount2
  }
  
  export interface AmountPerQuantity {
    amount: string
    currencyCode: string
  }
  
  export interface SubtotalAmount2 {
    amount: string
    currencyCode: string
  }
  
  export interface TotalAmount2 {
    amount: string
    currencyCode: string
  }
  
  export interface Merchandise {
    id: string
    title: string
    product: Product
  }
  
  export interface Product {
    title: string
    sellingPlanGroups: SellingPlanGroups
    priceRange: PriceRange
    availableForSale: boolean
    featuredImage: FeaturedImage
    images: Images
  }
  
  export interface SellingPlanGroups {
    edges: any[]
  }
  
  export interface PriceRange {
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
    url: string
  }
  
  export interface Images {
    edges: Edge2[]
  }
  
  export interface Edge2 {
    node: Node2
  }
  
  export interface Node2 {
    url: string
  }
  
  export interface Attribute {
    key: string
    value: string
  }
  
  export interface Attribute2 {
    key: string
    value: string
  }
  
  export interface EstimatedCost {
    totalAmount: TotalAmount3
    subtotalAmount: SubtotalAmount3
    totalTaxAmount: TotalTaxAmount2
    totalDutyAmount: any
  }
  
  export interface TotalAmount3 {
    amount: string
    currencyCode: string
  }
  
  export interface SubtotalAmount3 {
    amount: string
    currencyCode: string
  }
  
  export interface TotalTaxAmount2 {
    amount: string
    currencyCode: string
  }
  
  export interface BuyerIdentity {
    email: any
    phone: any
    customer: any
    countryCode: any
  }
  