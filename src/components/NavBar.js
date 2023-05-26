import React from "react";

function NavBar(){
  const links = ["home", "about", "projects"];
  const alink = links.map((link, index) =>{
    return <a href= {`#${link}`} key = {index}>{link}</a>
   
  });

  return <nav>
    {alink}
  </nav>;
}

export default NavBar;
