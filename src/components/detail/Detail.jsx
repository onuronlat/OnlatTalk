import "./detail.css"

const Detail=()=>{
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Sibel Onlat</h2>
                <p>Lorem ipsum dolor sit amet..</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Sohbet Ayarları</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Sohbet Ayarları</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Gizlilik & Yardım</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Paylaşılan Fotoğraflar</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://gallerypng.com/wp-content/uploads/2024/05/angry-bird-png-image-697x750.png" alt="" />
                                <span>photo_2024.png</span>
                            </div>
                            <img src="./download.png" className="icon" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://gallerypng.com/wp-content/uploads/2024/05/angry-bird-png-image-697x750.png" alt="" />
                                <span>photo_2024.png</span>
                            </div>
                            <img src="./download.png" className="icon" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://gallerypng.com/wp-content/uploads/2024/05/angry-bird-png-image-697x750.png" alt="" />
                                <span>photo_2024.png</span>
                            </div>
                            <img src="./download.png" className="icon" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://gallerypng.com/wp-content/uploads/2024/05/angry-bird-png-image-697x750.png" alt="" />
                                <span>photo_2024.png</span>
                            </div>
                            <img src="./download.png" className="icon" alt="" />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Paylaşılan Dosyalar</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
                <button className="logout">Logout</button>
            </div>
        </div>
    )
}

export default Detail