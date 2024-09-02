declare module "*.png" {
  const value: any
  export = value
}
declare module "*.ttf" {
  const path: string
  export default path
}
