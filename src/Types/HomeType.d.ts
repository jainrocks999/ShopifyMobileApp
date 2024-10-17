export interface HomeType {
  data: HomeData
}

export interface HomeData {
  shop: Shop
  collections: Collections
}

export interface Shop {
  name: string
  description: string
}

export interface Collections {
  edges: Edge[]
}

export interface Edge {
  node: Node
}

export interface Node {
  title: string
  id: string
  image?: Image
  products: Products
}

export interface Image {
  id: string
  url: string
}

export interface Products {
  edges: Edge2[]
}

export interface Edge2 {
  node: Node2
}

export interface Node2 {
  title: string
  id:string
  images: Images
  priceRange: PriceRange
}

export interface Images {
  nodes: Node3[]
}

export interface Node3 {
  id: string
  url: string
}

export interface PriceRange {
  minVariantPrice: MinVariantPrice
}

export interface MinVariantPrice {
  amount: string
  currencyCode: string
}
