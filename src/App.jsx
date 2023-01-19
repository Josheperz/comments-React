import { Card } from "./Components/Card";
import { Button } from "./Components/Button";
import './scss/App.scss';
import users from "../users.json";
import {useState} from "react";




export function App() {
 const [theme,setTheme] = useState('light')

  const onClickTheme = () => {
    if (theme == 'light' ){
      setTheme('dark')
    }else{
      setTheme('light')
    }
  }
  
  return (
    
     <div className={"app " + theme}>
          <Button 
          theme ={theme} 
          onClickBtn={onClickTheme}
          value= {theme == 'light'? 'Dark':'Light'}
          />

      <div className="cards">
        {users.map(user=>
          <Card 
            name={user.name}
            img={user.avatar}
            email={user.email}
            stars={user.stars}
            key={user.id}
          />
          
        )}
      </div>
     </div>
  
  )
}


