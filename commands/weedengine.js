module.exports=function(context){
	context.args[0]=__dirname+"/../sounds/WEEDENGINE.mp3";
	return require('./../commands/play')(context);
}