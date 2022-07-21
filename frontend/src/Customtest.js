import { useState } from "react";

const Customtest = () => {

    const [styles, setStyles] = useState([
        { id: 1, img: "https://static.lookpin.co.kr/20210301163656-7cb2/090975809a1d8a1c520b08b9a6248bd9.jpg?resize=880", title: '댄디', description: 'Igotformy댄디' }
    ]);

    const [inputImg, setInputImg] = useState('');
    const [inputTitle, setInputTitle] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [nextId, setNextId] = useState(2);

    const onChange = e => {
        setInputImg(e.target.value)
        setInputTitle(e.target.value)
        setInputDesc(e.target.value)
    }

    const onClick = () => {
        const nextStyle = styles.concat({
            id: nextId,
            img: inputImg,
            title: inputTitle,
            description: inputDesc
        });
        setNextId(nextId + 1);
        setStyles(nextStyle);
        setInputImg('');
        setInputTitle('');
        setInputDesc('');
    };
    const stylelist = styles.map(style => <li key={style.id}>{style.title}</li>)
    return (
        <>
            <input value={inputImg} onChange={onChange} />
            <input value={inputTitle} onChange={onChange} />
            <input value={inputDesc} onChange={onChange} />

            <button onClick={onClick}>추가</button>
            <ul>{stylelist}</ul>
        </>
    );
};

export default Customtest;