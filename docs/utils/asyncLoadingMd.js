function camelCase(src){
  return src.replace(/^[a-z]+([A-Z])[a-z]+$/,($,$1)=>{
    return $.replace($1,"-"+$1.toLowerCase())
  })
}
export default (name) => ()=> import(`@/components/${camelCase(name)}/docs/index.md`)
