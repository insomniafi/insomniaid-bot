# Insomnia ID - Bot

## Description
Verkkopeliyhdistys Insomnia ry - Identity Bot

## Commands

### Build Image

`podman build -t ghcr.io/insomniafi/insid-bot`

### Publish Image
`podman push ghcr.io/insomniafi/insid-bot`

### Run Container

`podman run --name insid-bot -d -e DISCORD_TOKEN= ghcr.io/insomniafi/insid-bot`

### Update Dependencies
`podman run --name insid-bot -d -e DISCORD_TOKEN= -v "$PWD":/usr/src/app/ ghcr.io/insomniafi/insid-bot`
