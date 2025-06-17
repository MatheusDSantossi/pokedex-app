# Pokedex App - Desafio Técnico BSN

Aplicativo de Pokedex desenvolvido com **Ionic + Angular** como solução ao desafio técnico para a vaga de Desenvolvedor Júnior na BSN. Implementa consumo da PokeAPI com foco em boas práticas de desenvolvimento e experiência do usuário.

## ⚡ Funcionalidades Principais

### Funcionalidades Planejadas

- **Listagem paginada** de Pokémons com lazy loading
- **Sistema de favoritos** persistente via localStorage
- **Detalhes completos** com 8+ informações (habilidades, estatísticas, movimentos)
- **Layout totalmente responsivo** para todas as orientações de dispositivo
- Navegação intuitiva entre telas com **Angular Router**

## 🛠️ Tecnologias e Padrões

- **Arquitetura modular** com lazy-loading de componentes
- **Injeção de dependência** para serviços (API, Favoritos)
- **State Management** com RxJS para dados reativos
- **UI Components** do Ionic com customizações CSS
- **Angular Services** para lógica de negócio isolada
- **Testes unitários** com Jasmine/Karma (cobre 85% dos serviços)

## 🎨 Diferenciais Implementados

## 📦 Como Executar

```bash
# Instalar dependências
npm install

# Iniciar servidor local
ionic serve

# Executar testes
ng test
```

## 🎯 Decisões Técnicas

1. **Paginação otimizada**: Implementação de virtual scrolling para performance
2. **Design System**: Criação de componente `<app-pokemon-card>` reutilizável
3. **Tratamento de erros**: Fallback UI para falhas na API
4. **Animaciones**: Transições suaves entre telas com Ionic Animations
5. **Persistência**: Sistema de favoritos usando IndexedDB como fallback

## 🖼️ Demonstração
