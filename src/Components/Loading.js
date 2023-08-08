import { useState, useEffect, } from 'react';

const Component = ( props ) => {
    const [ image, setImage ]  =  useState(null);
    useEffect(()=>{
        const candidates = [ 
            //"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjU2d3E3czR5Y3Q0ZDl5aG45NzN3bHFhZmVlZ2t1am14aHdtcGxucyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iefRRw6jIAvIs/200.gif",
            //"https://i.imgur.com/lhob4yR.gif",
            "https://item.kakaocdn.net/do/c0aec2de07f0726442ee411ed6c2b1cbf43ad912ad8dd55b04db6a64cddaf76d",
            "https://image.idus.com/image/files/3546fe70ee0f4fceb90ceccb0aed6bb6.gif",
            "https://cdn.class101.net/images/be3528de-18be-49f7-aadf-8968407fb9e0",
            "https://mblogthumb-phinf.pstatic.net/20150919_105/gwity_1442639217462slpdi_GIF/%C4%DC%C1%EE%BD%BA%C5%B8%C0%CF_%BE%D6%B4%CF%B8%DE%C0%CC%BC%C7_%C0%DA%B7%E1-Unimos2.gif?type=w420",
            "https://cdn.class101.net/images/cb4ebec5-efbd-4ed2-92f1-b72ce54a8c5d",
        ];
        setImage( candidates[ Math.floor( Math.random() * ( candidates.length ))] );
    },[])

    return (
        <div className="loading">
            <div className="box">
                { image && <img src={image} className="logo" alt="logo" /> }
            </div>
        </div>
    );
}

export default Component;
