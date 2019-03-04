const enhancer = {
    // success: function(item) {

    // },
    // failure: function(item) {

    // },
    repair: function(item) {
        return {
            ...item,
            durability: 100
        }
    }
}

module.exports = {
    enhancer
}