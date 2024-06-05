build:
	node --version
	yarn run build
dev:
	yarn run dev
env:
	asdf install
fmt:
	yarn run format
fix:
	yarn run format:fix
install:
	node --version
	yarn install --frozen-locakfile
push: build
	git push origin --tags
