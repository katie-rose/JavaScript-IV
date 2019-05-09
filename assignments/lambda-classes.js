class Person {
    constructor(attr) {
        this.age = attr.age;
        this.name = attr.name;
        this.location = attr.location;
    }

speak() {
        return `Hello my name is ${this.name} I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student,subject) {
        return `${student.name} recieves a perfect score on ${subject}`;
    }
}

const dan = new Instructor({
    specialty: 'web development',
    favLanguage: 'javascript',
    catchPhrase: 'programming is awesome',
    name: 'dan',
    age: 35,
    location: 'denver'
});

const josh = new Instructor({
    specialty: 'teaching',
    favLanguage: 'react',
    catchPhrase: 'programming is fun',
    name: 'josh',
    age: 35,
    location: 'Narnia'
});

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects
    }

    listsSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment() {
        return `${this.name} has submitted a PR or ${favSubjects}`;
    }
    sprintChallenge() {
        return `${this.name} has begun Sprint Challenge on ${this.favSubjects}`;
    }
}

const katie = new Student({
    favSubjects: 'English',
    className: 'Web20',
    previousBackground: 'Freelance Web Design'
});

console.log(josh.grade(josh, 'english'))
console.log(katie.listsSubjects());
