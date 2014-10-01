NPM=./node_modules/.bin

all:

compile: js css

publish: npm bower

js:
	@echo "Minifying javascript ..."
	@$(NPM)/uglifyjs angular-ui-switch.js --compress --mangle --comments > angular-ui-switch.min.js

css:
	@echo "Minifying css ..."
	@$(NPM)/minify angular-ui-switch.css > angular-ui-switch.min.css

npm:
	@echo "Publishing as npm ..."
	npm publish

bower:
	@echo "Publishing as bower ..."
	bower register angular-ui-switch git@github.com:xpepermint/angular-ui-switch.git
