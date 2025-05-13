
# DevPortoSpa - Bem-estar e Relaxamento

![DevPortoSpa](https://lovable.dev/opengraph-image-p98pqg.png)

## Sobre o Projeto

DevPortoSpa é um site profissional para um spa de massagens localizado no Porto, Portugal. O site oferece informações sobre os serviços de massagem, preços, equipe profissional e possibilita o agendamento de sessões.

## Tecnologias Utilizadas

Este projeto foi construído com:

- **React** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Ferramenta de build rápida para desenvolvimento web
- **React Router** - Para roteamento e navegação
- **TailwindCSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes de UI reutilizáveis e acessíveis

## Funcionalidades

- **Página Inicial** - Apresentação do spa, destaques de serviços e testemunhos de clientes
- **Página de Serviços** - Catálogo completo de serviços e preços
- **Página Sobre** - Informações sobre o spa e sua equipe de profissionais
- **Página de Contato** - Formulário de contato e informações para agendamento
- **Responsividade** - Design adaptável para dispositivos móveis e desktop

## Estrutura do Projeto

```
src/
├── components/         # Componentes reutilizáveis
│   ├── BookingCTA.tsx  # Componente de chamada para ação de agendamento
│   ├── ContactForm.tsx # Formulário de contato
│   ├── Footer.tsx      # Rodapé do site
│   ├── Hero.tsx        # Seção principal da página inicial
│   ├── Navbar.tsx      # Barra de navegação
│   ├── ServiceCard.tsx # Card para exibição de serviços
│   ├── TeamMember.tsx  # Card para membros da equipe
│   └── ui/             # Componentes de UI do shadcn
├── hooks/              # Hooks personalizados
├── lib/                # Utilitários e funções auxiliares
├── pages/              # Páginas do site
│   ├── About.tsx       # Página Sobre
│   ├── Contact.tsx     # Página de Contato
│   ├── Index.tsx       # Página Inicial
│   ├── NotFound.tsx    # Página 404
│   └── Services.tsx    # Página de Serviços
├── App.tsx             # Componente principal do aplicativo
└── main.tsx            # Ponto de entrada da aplicação
```

## Iniciando o Desenvolvimento

### Pré-requisitos

- Node.js (v16+)
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```sh
   git clone <URL_DO_REPOSITÓRIO>
   cd devportospa
   ```

2. Instale as dependências:
   ```sh
   npm install
   # ou
   yarn
   ```

3. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   # ou
   yarn dev
   ```

4. Acesse `http://localhost:8080` no seu navegador

## Build para Produção

Para criar uma versão de produção otimizada:

```sh
npm run build
# ou
yarn build
```

## Implantação

Após o build, a pasta `dist` conterá todos os arquivos estáticos necessários para implantação em qualquer servidor web ou plataforma de hospedagem.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

## Contato

DevPortoSpa - [contato@devportospa.com](mailto:contato@devportospa.com)

---

Desenvolvido com [Lovable](https://lovable.dev)
