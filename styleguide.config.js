path = require('path');
module.exports = {
    components:'src/components/**/[A-Z]*.tsx',
    styleguideDir:"docs",
    propsParser: require("react-docgen-typescript").withDefaultConfig({
        savePropValueAsString: true,
    }).parse,
    getExampleFilename(componentPath){
       console.log(componentPath.replace(/src/,'src\\docs' ).replace(/\.tsx?$/,'.md'));
       return componentPath.replace(/src/,'src\\docs' ).replace(/\.tsx?$/,'.md');
    },
   moduleAliases: {
       'src-alias': path.resolve(__dirname, 'src')
   },
   title:'Styleguide for custom components',
   skipComponentsWithoutExample: true,
   exampleMode: 'expand',//view code
   usageMode:'expand',//props & methods
   tocMode: 'collapse',//sidebar

}