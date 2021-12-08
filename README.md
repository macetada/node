# `macetada/node`

Repositório para macetar o Node com requests.

## Subindo o server

```bash
docker build -t node .
docker run --rm -p 8085:80 node
```

ou:

```bash
docker pull ghcr.io/macetada/node:main
docker run --rm -p 8085:80 ghcr.io/macetada/node:main
```

> Este procedimento deve ser feito numa máquina servidora ou num cluster.

## Pendências

- [ ] Acesso a I/O
- [ ] Acesso a banco de dados
