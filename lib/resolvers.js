'use strict'

const courses = [
  {
    _id: 'anyid1',
    title: 'Mi titulo 1',
    teacher: 'Mi profesor',
    description: 'una descripcion1',
    topic: 'programcion1'
  },
  {
    _id: 'anyid2',
    title: 'Mi titulo 2',
    teacher: 'Mi profesor',
    description: 'una descripcion2',
    topic: 'programcion2'
  },
  {
    _id: 'anyid3',
    title: 'Mi titulo 3',
    teacher: 'Mi profesor',
    description: 'una descripcion3',
    topic: 'programcion3'
  }
]

module.exports = {
    Query: {
    getCourses: () => {
        return courses
    },
    getCourse: (root, args) => {
        const course = courses.filter(course => course._id === args.id)
        return course.pop()
    }
  }
}
