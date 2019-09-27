# Makefile pour compilation de tâches. Customize as you wish!
EXEC=docker-compose exec
# A lancer qu'une fois en début de projet
init-front :
	mkdir temp
	wget -P temp "https://github.com/umanit/front-kit/archive/master.zip"
	unzip temp/master.zip
	mv -r temp/assets ../
	mv -n temp/package.json ../
	mv -n temp/postcss.config.js ../
	mv temp/webpack.config.js ../
	mv -n temp/.editorconfig ../
	$(EXEC) node yarn install
