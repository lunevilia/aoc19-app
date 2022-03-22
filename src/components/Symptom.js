import React from 'react';
import { useDispatch } from 'react-redux';
const Symptom = () => {
    // Home에서 이동시 모든 페이지에 들어가야 하는 코드
    const dispatch = useDispatch();
    dispatch({ type: 'CrtMapState', payload: "noViewCrtMap" });
    dispatch({ type: 'PAGEImg', payload: "/img/SymptomMain.jpg" });
    dispatch({ type: 'PAGE', payload: "코로나 증상" });
    return (
        <div className='symptom'>
            <h2>코로나 증상</h2>
        </div>
    );
};

export default Symptom;