/* class Car{
    _milesDriven = 0
    drive(distance) {
        this._milesDriven += distance
    }

    getMilesDriven(){
        return this._milesDriven
    }
}

const tesla = new Car()
tesla.drive(10)
console.log(tesla._milesDriven)#
 */
class Car{
    #milesDriven = 0
    drive(distance) {
        #milesDriven += distance
    }

    getMilesDriven(){
        return #milesDriven
    }
}

const tesla = new Car()
tesla.drive(10)
console.log(tesla.#milesDriven)