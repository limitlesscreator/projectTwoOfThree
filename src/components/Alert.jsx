// import React, {useEffect} from "react";
// import s from './Alert.module.sass'
//
// export function Alert(props){
//
//     const {name = '', closeAlert} = props
//
//     useEffect(() => {
//         const timerId = setTimeout(closeAlert, 3000)
//         return () => {
//             clearTimeout(timerId)
//         }
//     },[name])
//
//     return(
//             <div className={s.position}>
//
//                         <div className="toast-body">
//                             {`${name} добавлен в корзину `}
//                         </div>
//
//             </div>
//     )
// }
