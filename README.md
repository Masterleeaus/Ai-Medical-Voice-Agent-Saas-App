![Medical Voice Intake and Documentation App — FORK-BASED LEARNING PROJECT](docs/images/portfolio-banner.svg)

# AI Medical Voice Agent

> A full-stack voice AI application exploring conversational medical intake, doctor matching, session chat and AI-generated medical reports.

## Overview

This repository is a **fork-based learning and implementation project** built around a Next.js medical voice-agent application. It demonstrates how a modern TypeScript web application can combine authenticated user experiences, real-time voice AI, application APIs, persistent data and LLM-assisted workflows.

The project is useful as an example of applied voice-AI integration rather than as a clinically validated diagnostic system. The repository retains its upstream GitHub fork relationship so provenance remains explicit.

## Key Capabilities

- Browser-based voice AI through Vapi
- OpenAI integration for language-model workflows
- Medical-report API workflow
- Doctor-suggestion API workflow
- Session chat
- Authenticated application experience with Clerk
- Persistent data using Neon and Drizzle ORM
- Responsive Next.js / React interface

## Architecture

```text
User
  |
  v
Next.js / React UI
  |
  +----> Clerk authentication
  |
  +----> Vapi voice interaction
  |
  +----> Next.js API routes
             |
             +----> Medical report workflow
             +----> Doctor suggestion workflow
             +----> Session chat
             +----> User data
             |
             +----> OpenAI
             +----> Drizzle ORM / Neon
```

## Tech Stack

| Area | Technology |
|---|---|
| Language | TypeScript |
| Application | Next.js 15, React 19 |
| Voice AI | Vapi Web SDK |
| AI | OpenAI SDK |
| Authentication | Clerk |
| Database | Neon serverless Postgres |
| ORM | Drizzle ORM |
| UI | Tailwind CSS, Radix UI |
| Deployment target | Vercel-compatible Next.js deployment |

## Getting Started

```bash
git clone https://github.com/Masterleeaus/Ai-Medical-Voice-Agent-Saas-App.git
cd Ai-Medical-Voice-Agent-Saas-App
npm install
npm run dev
```

The application requires environment configuration for the external services used by the project. Keep API keys and credentials outside source control.

## What This Project Demonstrates

This repository provides practical exposure to:

- voice-agent integration in a full-stack web application;
- LLM-backed application workflows;
- authenticated SaaS architecture;
- API-route design in Next.js;
- TypeScript and React development;
- relational persistence with Drizzle and Postgres;
- combining conversational interfaces with structured application workflows.

## Provenance

This repository is a fork of `shaulazain/Ai-Medical-Voice-Agent-Saas-App`. It is retained as part of my AI engineering learning and implementation work. Upstream authorship remains attributable through GitHub's fork history; this README does not represent the upstream application as wholly original work by this account.

## Safety & Scope

This project is a software demonstration. It is **not a medical device, clinical decision-support system or substitute for professional medical advice, diagnosis or treatment**. Any healthcare deployment would require appropriate clinical validation, privacy/security controls, regulatory assessment and professional oversight.

## Status

**Educational / experimental.** Useful as evidence of voice-AI and full-stack integration work, but not presented as a production clinical system.

---

**Jason Lee** · [@Masterleeaus](https://github.com/Masterleeaus)
