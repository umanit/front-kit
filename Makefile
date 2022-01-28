# Makefile pour compilation de tâches. Customize as you wish!
define init_nvm
	source ~/.nvm/nvm.sh
endef
# A lancer qu'une fois en début de projet
init-front :
	mkdir temp
	wget -P temp "https://github.com/umanit/front-kit/archive/master.zip"
	unzip temp/master.zip -d temp
	mv temp/front-kit-master/assets .
	mv -n temp/front-kit-master/package.json .
	mv -n temp/front-kit-master/postcss.config.js .
	mv temp/front-kit-master/webpack.config.js .
	mv -n temp/front-kit-master/.editorconfig .
	rm -rf temp
	@$(call init_nvm); \
	nvm exec yarn install; \
