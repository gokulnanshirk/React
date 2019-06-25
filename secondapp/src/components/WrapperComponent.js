import Courses from "./courses";
import Dummy from "./dummy"
import {connect} from 'react-redux'
import {removeCourse} from "../redux/actions";
import {addCourse} from "../redux/actions"
import { bindActionCreators } from "redux";
import AddCourse from './addCourse'

 function mapStateToProps(data){
    return {courses:data}
    }

function mapDispatchToProps(dispatch){
    return bindActionCreators({removeCourse},dispatch)
}

function mapDispatchToPropsAddCourse(dispatch){
    return bindActionCreators({addCourse},dispatch)
}

    export const WrapperCourse=connect(mapStateToProps,mapDispatchToProps)(Courses)
    export const WrapperDummy=connect(mapStateToProps)(Dummy)
    export const WrapperAddCourse=connect(mapStateToProps,mapDispatchToPropsAddCourse)(AddCourse)