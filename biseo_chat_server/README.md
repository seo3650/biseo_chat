# SPARCS Biseo Backend

## Prerequisites

### Redis

we expect REDIS server to be running on it's specific port(6379)

```c
redis-server —daemonize yes —port 6379
```

### Environment Secrets

The list of required environment variables is as follows.

**REDIS_SECRET**   
**SSO_SECRET**   
**JWT_SECRET**   
**SSO_CLIENT_ID**   
**SSO_SECRET**   
**ALLOWED_HOST**

You can find proper values by emailing **seo3650@kaist.ac.kr**

In order to get a new SSO client id and secrets, refer [SPARCS SSO Dev Center](https://sparcssso.kaist.ac.kr/dev/main/)

**!important: Please be extra careful not to upload any kind of secrets on github.**

## Getting Started

```c
npm install
npm start
```

After run, the frontend will run in port 3001.