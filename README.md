## PREVISÃO DO TEMPO
<p align="center">
	<img width="470" src="Weather/assets/assets_to_readme/amostra.gif">
</p>

## Funcionalidades:

- **Entrada de Cidade:**
  - Os usuários podem inserir o nome da cidade desejada para obter a previsão do tempo.


- **Exibição da Previsão:**
  - O aplicativo apresenta a temperatura atual, a descrição do clima e um ícone representativo para a cidade inserida.

- **Integração com API de Clima:**
  - Utiliza a API pública do OpenWeatherMap para acessar os dados da previsão do tempo.

- **Tratamento de Erros:**
  - O aplicativo trata possíveis erros, como cidades não encontradas ou falhas na requisição da API, fornecendo feedback adequado ao usuário.

## Tecnologias Utilizadas:

- **React Native**: Framework para construção de aplicativos móveis multiplataforma.

- **React Hooks (useState, useEffect)**: Recursos do React para gerenciamento de estado e ciclo de vida.

- **API do OpenWeatherMap**: API pública para obtenção de dados de previsão do tempo.

- **React Native Vector Icons**: Biblioteca para exibição de ícones vetorizados.

## Bibliotecas e Recursos Adicionais:

- **ActivityIndicator**: Componente nativo do React Native para indicar atividade durante o carregamento de dados.

- **ImageBackground**: Componente nativo do React Native para exibição de imagem de fundo.

- **TextInput**: Componente nativo do React Native para entrada de texto.

- **TouchableOpacity**: Componente nativo do React Native para interação tátil.

- **StyleSheet**: Módulo do React Native para estilização de componentes.

## Como Usar:

1. **Instale as Dependências:**
   ```bash
   npm install   # ou yarn install
   ```

2. **Execute o Aplicativo:**
   ```bash
   npm start   # ou yarn start
   ```

3. **Insira o Nome da Cidade:**
   - Abra o aplicativo no navegador e insira o nome da cidade desejada na caixa de pesquisa.

4. **Visualize a Previsão do Tempo:**
   - A previsão do tempo para a cidade selecionada será exibida, incluindo temperatura atual, descrição do clima e um ícone representativo.
