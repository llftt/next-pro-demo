module.exports = {
    parser:  '@typescript-eslint/parser',
    extends:['./eslint/base.js', './eslint/typescript.js','./eslint/react.js','prettier/@typescript-eslint','plugin:prettier/recommended'],
    settings: {
        "react": {
            "pragma": "React",
            "version": "detect"
        }
    },
    parserOptions: {
        "ecmaVersion": 2019,
        "sourceType": 'module',
        "ecmaFeatures":{
            jsx:true
        }
    },
    env:{
        browser: true,
        node: true,
        es6: true
    }  
}
