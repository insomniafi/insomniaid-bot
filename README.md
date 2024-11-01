# Insomnia ID - Bot

## Description
Verkkopeliyhdistys Insomnia ry - Identity Bot

## Commands

### Build Image

`podman build -t ghcr.io/insomniafi/insid-bot . --no-cache`

### Publish Image
`podman push ghcr.io/insomniafi/insid-bot`

### Run Container

`podman run --name insid-bot -d -e DISCORD_TOKEN= ghcr.io/insomniafi/insid-bot`

### Run Container (Dev Mode)

`podman run --rm --name insid-bot -it -e DISCORD_TOKEN= -v "$PWD":/usr/src/app/ ghcr.io/insomniafi/insid-bot npm run start:dev`

### Update Dependencies
`podman run --rm --name insid-bot -it -e DISCORD_TOKEN= -v "$PWD":/usr/src/app/ ghcr.io/insomniafi/insid-bot npm update`
