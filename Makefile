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


prepare-deploy: build-ui
	cd infrastructure;	\
	yarn;

deploy: prepare-deploy
	cd infrastructure;

deploy-ci: prepare-deploy
	cd infrastructure;	\
	yarn cdk deploy --require-approval never

plan: 
	cd infrastructure;	\
	yarn cdk plan