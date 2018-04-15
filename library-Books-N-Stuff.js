class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    set isCheckedOut(checkOut) {
        this._isCheckedOut = checkOut;
    }
    get ratings() {
        return this._ratings;
    }

    getAverageRating() {
        const sum = (accumulator, currentValue) => accumulator + currentValue;
        const average = this._ratings.reduce(sum) / this._ratings.length;
        return average;
    }

    toggleCheckOutStatus() {
        if (this._isCheckedOut) {
            this._isCheckedOut = false;
        } else {
            this._isCheckedOut = true;
        }
    }

    addRating(newRating) {
        this._ratings.push(newRating);
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

class Cd extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.isCheckedOut);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.isCheckedOut);
console.log(speed.getAverageRating());

