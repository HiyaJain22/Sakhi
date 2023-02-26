import React from "react";
import AddArticle from "./addArticle";
import BlogContainer from "./blogCont";
import NavScrollExample from '../navbar/Navbar';


const Blog = () => {
    return (
        <>
        <NavScrollExample />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <BlogContainer />
                        </div>
                        <div className="col-md-4">
                           <AddArticle />
                        </div>
                    </div>
        
                </div>
            </>
            )
}

export default Blog;
// export default function Blog(){

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-8">
//                     <blogCont/>
//                 </div>
//                 <div className="col-md-4">
//                    <addArticle />
//                 </div>
//             </div>

//         </div>
//     )
// }