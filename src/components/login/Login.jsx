import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

const Login=()=>{

    const [avatar,setAvatar]=useState({
        file:null,
        url:""
    });

    function handleAvatar(e){
    if(e.target.files[0]){
        setAvatar({
            file:e.target.files[0],
            url:URL.createObjectURL(e.target.files[0])
        })
      }
    }

    function handleLogin(e){
         e.preventDefault()
    }

    return(
    <div className="login">
        <div className="item">
            <h2>Tekrar Hoşgeldiniz,</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Şifre" name="password" />
                <button>Sign In</button>
            </form>
        </div>
        <div className="separator">
            <img src="./OnlatTalkLogin.png" alt="" />
        </div>
        <div className="item">
            <h2>Bir Hesap Oluşturun</h2>
            <form>
                <label htmlFor="file">
                    <img src={avatar.url || "./avatar.png"}alt="" />
                     Bir Fotoğraf Yükleyin
                </label>
                <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
                <input type="text" placeholder="Kullanıcı adı" name="username" />
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Şifre" name="password" />
                <button>Sign Up</button>
            </form>
        </div>
    </div> 
    )
}

export default Login