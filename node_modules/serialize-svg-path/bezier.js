
module.exports = serialize

/**
 * convert `path` to a string. Only handles
 * absolutized paths consisting of only MoveTo 
 * and CurveTo commands
 *
 * @param {Array} path
 * @return {String}
 */

function serialize(path){
	return path.reduce(addseg, '')
}

function addseg(str, seg){
	return str + (seg[0] == 'M'
		? 'M' + seg[1] + ',' + seg[2]
		: 'C' + seg[1] + ',' + seg[2]
		+ ',' + seg[3] + ',' + seg[4]
		+ ',' + seg[5] + ',' + seg[6])
}
