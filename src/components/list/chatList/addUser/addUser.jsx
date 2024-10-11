import "./addUser.css"
const AddUser=()=>{
    return(
        <div className="addUser">
             <form action="">
                <input type="text" placeholder="Kullanıcı adı" name="username"/>
                <button>Ara</button>
                </form>
             <div className="user">
                  <div className="detail">
                    <img src="./avatar.png" alt="" />
                    <span>Sibel Onlat</span>
                  </div>
                  <button>Kullanıcı Ekle</button>
                </div>       
        </div>
    )
}

export default AddUser