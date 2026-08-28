# slack-notifications

CDK + Lambda that forwards AWS Batch SNS failure events to Slack. Archived snapshot, as-is.

This tree is a **new public commit** with no git history. The original private archive is `eulertools/slack-notifications-archive`.

## What was built (EN)

Lambda (`src/main.js`) parses SNS `Batch Job State Change` messages and POSTs to `process.env.SLACK_API_URL`. CDK stack (`lib/slack-notifications-stack.js`) wires the function to an SNS topic. No Slack token is committed. No contract deployments.

## Qué se construyó (ES)

Lambda CDK que notifica fallos de AWS Batch a Slack. URL de Slack por entorno. Sin deployments de contratos.

---

## Notice / Aviso

**Euler Tools ha cerrado. Euler Tools is closed.**

La empresa quebró. Este repositorio está archivado y no se mantiene. El software se ofrece tal cual (as is), sin garantía ni soporte. Parte del material puede ser reclamado por acreedores.

The company went bankrupt. This repository is archived and unmaintained. Software is provided as is, with no warranty and no support. Some material may be claimed by creditors.

Site: https://euler.tools  
Org: https://github.com/eulertools  
Enquiries: https://sinequix.com · https://github.com/tebayoso
