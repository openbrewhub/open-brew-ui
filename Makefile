build-ui:
	cd open-brew-ui; 	\
	yarn; 				\
	yarn build;

start-ui:
	cd open-brew-ui; 	\
	yarn start --open;

build-infra:
	cd infrastructure; 	\ 
	yarn build

deploy: build-ui
	cd infrastructure;	\
	yarn cdk deploy