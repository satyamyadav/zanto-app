---
title: "Introducing zanto — a local-first AI workspace"
description: "Bring your own model and keys, give an assistant consented access to your files, and get answers as real artifacts. zanto v1 is here for macOS, Windows, and Linux."
date: 2026-06-22
author: "Satyam Yadav"
---

I wanted an AI assistant that lived on my machine, used the models *I* pay for,
and could actually touch my files — without shipping any of it through someone
else's server. I couldn't find one that did all three the way I wanted, so I
built **zanto**.

Today it's at **v1.0.0**, with downloads for macOS, Windows, and Linux.

## What it is

zanto is a local-first AI workspace: a desktop app (and a CLI) built in Rust and
Tauri. You point it at a provider key — or a model running locally — and it
becomes an assistant that can read and edit your files, run commands, browse the
web, and render its answers as charts, tables, and documents.

The whole thing runs on your machine and talks **directly** to whichever model
you pick. There's no zanto account, no relay, no telemetry.

## What makes it different

- **You own the stack.** Your API key lives in the OS keychain (or an env var).
  Prefer fully offline? Point zanto at local **Ollama** and nothing leaves your
  laptop.
- **10+ providers, one app.** Anthropic, OpenAI, Gemini, Groq, xAI, DeepSeek,
  Together, Fireworks, Cohere, Ollama. Switch models live; tune temperature,
  reasoning effort, and more — globally or per provider.
- **Tools, with consent.** Filesystem read/write/search/edit, shell, web fetch,
  and PDF/Office parsing. Every file action asks first — allow once, for the
  session, forever, or deny.
- **Artifacts, not walls of text.** Ask for a chart and you get a chart, inline
  or on a side canvas. Pin the ones worth keeping.
- **Sessions that survive.** SQLite-backed, crash-safe, resumable, with automatic
  summarization so long conversations stay in budget.

## Honest caveats

v1 builds are **unsigned**. macOS will ask you to right-click → Open the first
time; Windows SmartScreen will want a "Run anyway." There's **no auto-update**
yet — you grab a new build when one ships. Code signing and an updater are the
first things on the list after launch.

## Try it

Download for your platform from the [latest release](https://github.com/satyamyadav/zanto-rust/releases/latest), set a
provider key or fire up Ollama, and ask it something about your own files. If you
build something neat — or hit something broken — the
[repo](https://github.com/satyamyadav/zanto-rust) is open.

More soon.
