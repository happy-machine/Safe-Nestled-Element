function safe (object, path) {
   
    try {
        var reg = new RegExp('(\\w+)\\[(\\d+)\\]');
        return path.split('.').reduce(function (prev, curr) {
            if (typeof prev != undefined && prev) {
                if (reg.test(curr)) {
                    return prev[reg.exec(curr)[1]][reg.exec(curr)[2]]
                } else {
                    return prev[curr] == undefined ? null : prev[curr]
                }
            } else {
                return null
            }
        }, object || this)
    } catch (e) {
        return 'Error: Incorrect attributes'
    }
}
