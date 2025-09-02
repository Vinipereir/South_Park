# 🏔️ South Park CRUD - Next.js 15

Um projeto completo desenvolvido em **Next.js 15** que consome a **South Park API** para exibir informações sobre os personagens icônicos da série animada. O projeto apresenta uma interface moderna, responsiva e interativa com funcionalidades CRUD básicas.

## 📝 Sobre o Projeto

Este é um projeto acadêmico desenvolvido para a **Turma 2TDS2** da **Escola Senai** pelo aluno **Vinicius Pereira**. O objetivo é demonstrar habilidades em desenvolvimento web moderno utilizando as mais recentes tecnologias do ecossistema React.

### ✨ Funcionalidades

- 📋 **Home Page**: Apresentação do aluno e navegação principal
- 👥 **Lista de Personagens**: Exibição de todos os personagens com cards interativos
- 🔍 **Detalhes do Personagem**: Página individual com informações completas
- 📡 **Informações da API**: Documentação e detalhes técnicos da API utilizada
- ❌ **Página 404**: Tratamento elegante para páginas não encontradas
- 📱 **Design Responsivo**: Interface adaptativa para todos os dispositivos

## 🛠️ Tecnologias Utilizadas

- **Next.js 15**: Framework React com App Router
- **React 18**: Biblioteca JavaScript para interfaces
- **Tailwind CSS**: Framework de estilização utilitária
- **Axios**: Cliente HTTP para requisições à API
- **South Park API**: Fonte de dados dos personagens

## 📁 Estrutura do Projeto

### 🏠 Páginas Principais (`src/app/`)

#### `page.jsx` - Home Page
Página inicial que apresenta:
- Informações do aluno (foto, nome, turma, escola)
- Frase motivacional
- Navegação para outras seções
- Design com gradientes e animações sutis

#### `characters/page.jsx` - Lista de Personagens
Página que exibe:
- Grid responsivo com cards dos personagens
- Loading state durante carregamento
- Tratamento de erros
- Navegação de volta à home

#### `characters/[id]/page.jsx` - Detalhes do Personagem
Página dinâmica que mostra:
- Informações completas do personagem selecionado
- Imagem, ocupação, família, episódios
- Links para recursos externos
- Navegação entre páginas

#### `apiinfo/page.jsx` - Informações da API
Página informativa contendo:
- Documentação da South Park API
- Endpoints disponíveis
- Atributos dos dados
- Links para documentação oficial

#### `not-found.jsx` - Página 404
Página de erro personalizada com:
- Design atrativo e consistente
- Animações e efeitos visuais
- Navegação de volta à home

### 🧩 Componentes (`src/components/`)

#### `Header.jsx`
Componente de navegação que inclui:
- Logo e título do projeto
- Menu responsivo com links principais
- Efeitos hover e transições suaves
- Design gradiente consistente com o tema

#### `CharacterCard.jsx`
Card reutilizável para exibição de personagens:
- Imagem do personagem com fallback
- Nome e ocupação
- Botão para ver detalhes
- Efeitos hover e animações

### 📚 Utilitários (`src/lib/`)

#### `api.js`
Configuração do cliente HTTP:
- Instância do Axios configurada
- Base URL da South Park API
- Interceptors para tratamento de respostas

### 🎨 Estilos (`src/app/globals.css`)

Estilos globais incluindo:
- Configurações do Tailwind CSS
- Animações personalizadas (fadein, bounce-slow)
- Variáveis CSS para temas
- Estilos base da aplicação

### 🖼️ Assets (`public/`)

#### `Eu.jpg`
Foto do aluno utilizada na página inicial para personalização do projeto.

## 🌐 API Utilizada

**South Park API** (https://spapi.dev/api/)
- Fornece dados completos sobre personagens
- Endpoints RESTful bem documentados
- Informações sobre episódios, família e características
- Imagens oficiais dos personagens

## 🚀 Como Executar

1. **Instalar dependências:**
```bash
npm install
```

2. **Executar em modo de desenvolvimento:**
```bash
npm run dev
```

3. **Acessar a aplicação:**
```
http://localhost:3000
```

## 📱 Características Técnicas

### Responsividade
- Mobile-first design
- Breakpoints customizados para diferentes telas
- Grid system flexível
- Componentes adaptativos

### Performance
- Otimização de imagens com Next.js Image
- Lazy loading automático
- Caching inteligente de requisições
- Bundle splitting automático

### Experiência do Usuário
- Animações suaves e intuitivas
- Loading states informativos
- Tratamento de erros elegante
- Navegação fluida entre páginas

## 👨‍🎓 Informações Acadêmicas

- **Aluno**: Vinicius Pereira
- **Turma**: 2TDS2
- **Escola**: Senai
- **Período**: 2025

---

*"A persistência realiza o impossível."*