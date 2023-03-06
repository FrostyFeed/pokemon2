import { Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'


export default function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
        </Routes>
    )
}