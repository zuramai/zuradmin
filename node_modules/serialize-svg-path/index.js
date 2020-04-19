
module.exports = serialize

/**
 * convert `path` to a string
 *
 * @param {Array} path
 * @return {String}
 */

function serialize(path){
	return path.reduce(function(str, seg){
		return str + seg[0] + seg.slice(1).join(',')
	}, '')
}
