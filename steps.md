### Steps to setup react styleguidist
1.  1. npm install --save-dev react-styleguidist
    2. npm install react-docgen-typescript
2. Create ``docs`` folder in ``src`` folder of react project. Inorder to document a component in ``src/components/XyzFolder/Xyz1.tsx``, create a file Xyz1.md 
   in ``docs/components/XyzFolder``. The folder structure in ``docs/components`` mimics the folder structure in ``src/components`` folder.
3. create **styleguide.config.js** file at root of project directory and place the following code in it
   ```
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
   }
   ```
   Explanation of above configuration:  
  *components* property defines the location of react components that the styleguide should look at.  
  *propsParser*: specifies the props parser used by styleguidist.  
  *getExampleFilename(componentPath)*: By default, react styleguidist looks for Xyz1.md documentation file in the folder where ``Xyz1.tsx`` was saved.
   Since we seperated documentation files from source files, the function ``getExampleFilename(componentPath)`` takes component path as input and returns the corresponding documentation file path.
4. command to run styleguide: __npx styleguidist server__ and the server starts on port 6060.

  
