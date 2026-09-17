// Detecta o caminho base do projeto (funciona local e no GitHub Pages)
window.BASE_PATH = location.hostname.includes('github.io')
  ? '/ProjectCerrAmazon'
  : '';