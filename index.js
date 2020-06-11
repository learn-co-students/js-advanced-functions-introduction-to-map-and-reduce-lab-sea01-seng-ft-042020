function mapToNegativize(array) {
    let output = []
    for (const element of array) {
        output.push(- element)
    }
    return output
}

function mapToNoChange(array) {
    let output = []
    for (const element of array) {
        output.push(element)
    }
    return output
}

function mapToDouble(array) {
    let output = []
    for (const element of array) {
        output.push(2 * element)
    }
    return output
}

function mapToSquare(array) {
    let output = []
    for (const element of array) {
        output.push(element**2)
    }
    return output
}

function reduceToTotal(array, total=0) {
    for (const element of array) {
        total += element
    }
    return total
}

function reduceToAllTrue(array, total=0) {
    for (const element of array) {
        if (!element) {
            return false
        }
    }
    return true
}

function reduceToAnyTrue(array, total=0) {
    for (const element of array) {
        if (element) {
            return true
        }
    }
    return false
}