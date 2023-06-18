import { useState } from "react";

export default function Counter() {
   const [showBtns, setShowBtns] = useState(true)
   const [counter, setCounter] = useState(4)
   // state == משתנה 
   // "מחזיק" את המצב הנוכחי
   // גורמת לרינדור מחדש של הקומפוננטה

   // function setCounter(newValue){
   //     counter=newValue
   //     // render() 
   // }

   const handleClick = (reduce) =>
      setCounter(reduce ? counter - 1 : counter + 1)

   const HandleShowBtns = () => setShowBtns(!showBtns)

   const handleSub = (e) => {
      e.preventDefault()

      const n = e.target.firstName.value
      console.log(n);
   }

   return (
      <div>
         <button onClick={HandleShowBtns} > show buttons </button>
         <h3>Counter</h3>
         <div>{counter}</div>
         <button className={!showBtns ? "notShow" : ''} onClick={() => handleClick(false)}>Add</button>
         <button className={!showBtns ? "notShow" : ''} onClick={() => handleClick(true)}>reduce</button>

         <form onSubmit={handleSub} >
            <input type="text" name="firstName" />
            <input type="submit" value='submit' />
         </form>

         <div style={{ display: 'flex' }}>
            <div style={{ background: 'red', flex: 1 }}>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id mollitia, nam delectus error alias iste vitae accusantium dolorum, reprehenderit culpa quod? Quas unde temporibus dolorem dignissimos deleniti, architecto sint aut!
            </div>
            <div style={{ background: 'green', flex: 1 }}>b</div>
         </div>
      </div>
   )
}