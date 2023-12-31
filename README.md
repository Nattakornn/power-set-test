# Power Set Service
## Require
- node 16.x
- docker

## Installation
```bash
    git clone https://github.com/Nattakornn/power-set-test.git
```

```bash
    cd power-set-test
```

```bash
    npm install
```

## Run
```bash
    npm run start
```

## Run with docker
```bash
    docker compose up 
```

## Test
```bash
    npm run test
```

```bash
    npm run test:e2e
```

## Rest API

Method      | URI                           | Description                           |
----------- | ----------------------------- | ------------------------------------- |
`GET`       | */power-set?nums={input}*    | Calculate power set                   |

#### GET /power-set?nums=0
Response
```json
{
    [[],[0]]
}
```

#### GET /power-set?nums=1,2,3
Response
```json
{
    [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
}
```
