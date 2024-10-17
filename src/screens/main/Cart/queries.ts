export const query = `id
checkoutUrl
cost{
  checkoutChargeAmount {
      amount
      currencyCode
  }
  subtotalAmount{
      amount
      currencyCode
  }
  subtotalAmountEstimated
  totalAmount{
      amount
      currencyCode
  }
  totalAmountEstimated
  totalDutyAmount{
      amount
      currencyCode
  }
  totalDutyAmountEstimated
  totalTaxAmount{
      amount
      currencyCode
  }
  totalTaxAmountEstimated
 }
createdAt
updatedAt
lines(first:10) {
edges {
node {
id
quantity
cost{
amountPerQuantity{
  amount
  currencyCode
}
compareAtAmountPerQuantity{
  amount
  currencyCode
}
subtotalAmount{
  amount
  currencyCode
}
totalAmount{
  amount
  currencyCode
}
}
merchandise {
... on ProductVariant {
id
title


product{
title 
sellingPlanGroups(first:1){
    edges{
        node{
            sellingPlans(first:1){
                edges{
                    node{
                        id
                    }
                }
            }
        }
    }
}
priceRange{
    maxVariantPrice{
        amount
        currencyCode
    }
    minVariantPrice{
        amount
        currencyCode
    }
}
availableForSale
featuredImage{
    url
}
 images(first:1){
    edges
    {
        node{
            url
        }
    }
 }
}
}
}
attributes {
key
value
}
}
}
}
attributes {
key
value
}
estimatedCost {
totalAmount {
amount
currencyCode
}
subtotalAmount {
amount
currencyCode
}
totalTaxAmount {
amount
currencyCode
}
totalDutyAmount {
amount
currencyCode
}
}
buyerIdentity {
email
phone
customer {
id
}
countryCode`;
