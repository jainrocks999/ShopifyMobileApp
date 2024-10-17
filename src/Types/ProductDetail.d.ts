export interface ProductDetail {
    data: Data
  }
  
  export interface Data {
    product: ProductDetails
  }
  
  export interface ProductDetails {
    title: string
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
    options: Option[]
    priceRange: PriceRange
    productType: string
    publishedAt: string
    requiresSellingPlan: boolean
    sellingPlanGroups: SellingPlanGroups
    seo: Seo
    tags: string[]
    totalInventory: number
    updatedAt: string
    variants: Variants
    vendor: string
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
    nodes: Node[]
    edges: Edge[]
  }
  
  export interface Node {
    altText: any
    url: string
    width: number
    id: string
    height: number
  }
  
  export interface Edge {
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
    edges: Edge2[]
  }
  
  export interface Edge2 {
    cursor: string
    node: Node3
  }
  
  export interface Node3 {
    alt: string
    mediaContentType: string
    presentation: any
    previewImage: PreviewImage
  }
  
  export interface PreviewImage {
    url: string
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
    edges: any[]
  }
  
  export interface Seo {
    title: any
    description: any
  }
  
  export interface Variants {
    nodes: Node4[]
    edges: Edge3[]
  }
  
  export interface Node4 {
    title: string
    availableForSale: boolean
    barcode: string
    compareAtPrice: Price
    currentlyNotInStock: boolean
    id: string
    image: Image
    price: Price
    quantityAvailable: number
    requiresShipping: boolean
    selectedOptions: SelectedOption[]
    sellingPlanAllocations: SellingPlanAllocations
  }
  
  export interface Image {
    url: string
    id: string
  }
  
  export interface Price {
    amount: string
    currencyCode: string
  }
  
  export interface SelectedOption {
    name: string
    value: string
  }
  
  export interface SellingPlanAllocations {
    edges: any[]
  }
  
  export interface Edge3 {
    cursor: string
    node: Node5
  }
  
  export interface Node5 {
    title: string
    availableForSale: boolean
    barcode: string
    compareAtPrice: any
    currentlyNotInStock: boolean
    id: string
    image: Image2
    price: Price2
    quantityAvailable: number
    requiresShipping: boolean
    selectedOptions: SelectedOption2[]
    sellingPlanAllocations: SellingPlanAllocations2
  }
  
  export interface Image2 {
    url: string
    id: string
  }
  
  export interface Price2 {
    amount: string
    currencyCode: string
  }
  
  export interface SelectedOption2 {
    name: string
    value: string
  }
  
  export interface SellingPlanAllocations2 {
    edges: any[]
  }
  