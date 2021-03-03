export interface IProduct{
    productId:number;
    productName:string;
    productDescription:string;
    productCaption:string;
    productCategory:number;
    productImageUrl:string;
    unitPrice:number;
    ingredients:Ingredient[];
  }

export interface Ingredient{
  ingredientId:number;
  ingredientName:string,
  risk:string,
  percentage:string
}