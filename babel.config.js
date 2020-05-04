module.exports = {
  //configurações de terceiros que podemos importar na nossa aplicação
  //configuração padrão para todo projeto react
  presets: [
    '@babel/preset-env', //vai converter o código javascript mai moderno para um código javascript mais antigo porém de acordo com o ambiente
    '@babel/preset-react' //adiciona as funcionalidades do react nessa conversão
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
}