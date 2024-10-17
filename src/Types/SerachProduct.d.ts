export interface SearchProduct {
    data: Data
  }
  
  export interface Data {
    products: SearchProducts
  }
  
  export interface SearchProducts {
    edges: Edge[]
  }
  
  export interface Edge {
    node: Node
  }
  
  export interface Node {
    availableForSale: boolean
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
    onlineStoreUrl: string
    priceRange: PriceRange
    productType: string
    publishedAt: string
    requiresSellingPlan: boolean
    seo: Seo
    tags: string[]
    title: string
    totalInventory: number
    updatedAt: string
    variants: Variants
    options: Option[]
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
    altText: any
    height: number
    id: string
    url: string
    width: number
  }
  
  export interface Images {
    edges: Edge2[]
  }
  
  export interface Edge2 {
    cursor: string
    node: Node2
  }
  
  export interface Node2 {
    altText: any
    height: number
    id: string
    url: string
    width: number
  }
  
  export interface Media {
    edges: Edge3[]
  }
  
  export interface Edge3 {
    cursor: string
    node: Node3
  }
  
  export interface Node3 {
    __typename: string
    alt: string
    mediaContentType: string
    presentation: any
    previewImage: PreviewImage
  }
  
  export interface PreviewImage {
    altText: any
    height: number
    id: string
    url: string
    width: number
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
  
  export interface Seo {
    description?: string
    title?: string
  }
  
  export interface Variants {
    edges: Edge4[]
  }
  
  export interface Edge4 {
    cursor: string
    node: Node4
  }
  
  export interface Node4 {
    availableForSale: boolean
    barcode: string
    compareAtPrice?: CompareAtPrice
    currentlyNotInStock: boolean
    id: string
    image: Image
    price: Price
    weight: number
    weightUnit: string
    unitPrice: any
    unitPriceMeasurement: UnitPriceMeasurement
    title: string
    storeAvailability: StoreAvailability
  }
  
  export interface CompareAtPrice {
    amount: string
    currencyCode: string
  }
  
  export interface Image {
    altText: any
    height: number
    url: string
    id: string
    width: number
  }
  
  export interface Price {
    amount: string
    currencyCode: string
  }
  
  export interface UnitPriceMeasurement {
    measuredType: any
    quantityUnit: any
    referenceUnit: any
    referenceValue: number
  }
  
  export interface StoreAvailability {
    pageInfo: PageInfo
  }
  
  export interface PageInfo {
    endCursor: any
    hasNextPage: boolean
    hasPreviousPage: boolean
    startCursor: any
  }
  
  export interface Option {
    id: string
    name: string
    values: string[]
  }
  