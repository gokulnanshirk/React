export function addCourse(course){
    return{
        type:"ADD_COURSE",
        course:course
    }
}
export function removeCourse(data){
    return{
        type:"REMOVE_COURSE",
        data:data
    }
}