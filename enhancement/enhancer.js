const enhancer = {
    success: function(item) {
    },
    failure: function(item) {
        const durability
            = item.enhancement < 15 ? item.durability - 5 : item.durability - 10;
        const enhancement
            = item.enhancement > 15 ? item.enhancement - 1 : item.enhancement;
        if (item.enhancement <= 14 && item.durability < 25) {
            throw new Error({message: 'CANNOT BE ENHANCED'})
        } else if (item.enhancement >= 15 && item.durability < 10) {
            throw new Error({message: 'CANNOT BE ENHANCED'})
        }else {
            return {
                ...item,
                durability,
                enhancement
            }
        }
     
    },
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