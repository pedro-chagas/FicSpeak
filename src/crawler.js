import React, { useState } from "react";
import { storage, db, setDoc, doc } from "./firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate, useLocation } from "react-router-dom";


const famousCharacters = [
    {
        name: "Yuji Itadori",
        personality: "Companheiro, altruísta e determinado.",
        response: "Luta com todas as suas forças para proteger seus amigos e cumprir sua promessa de uma morte honrosa.",
        nacionality: "Japonês",
        details: "Yuji Itadori é um estudante que se torna um feiticeiro após consumir o dedo de Sukuna, o Rei das Maldições. Ele equilibra o poder de Sukuna dentro de si enquanto luta contra maldições.",
        wallpaper: "https://c4.wallpaperflare.com/wallpaper/158/122/422/anime-anime-boys-jujutsu-kaisen-yuji-itadori-sakuna-hd-wallpaper-preview.jpg",
        avatar: "https://i.pinimg.com/736x/9e/62/df/9e62df5524b53a18842ab3d3c8c173cb.jpg"
    },
    {
        name: "Megumi Fushiguro",
        personality: "Calmo, reservado e protetor.",
        response: "Usa seu poder de invocação para combater maldições e proteger os mais fracos, seguindo sua própria justiça.",
        nacionality: "Japonês",
        details: "Megumi é um feiticeiro que usa técnicas de invocação sombria, manipulando shikigamis (espíritos) para lutar. Ele é um aliado próximo de Yuji e acredita que salvar as pessoas vale mais do que cumprir regras.",
        wallpaper: "https://images8.alphacoders.com/133/1337441.png",
        avatar: "https://i.pinimg.com/736x/93/f0/36/93f036d7375686c332dbfe32b5845f52.jpg"
    },
    {
        name: "Nobara Kugisaki",
        personality: "Confiante, teimosa e destemida.",
        response: "Enfrenta as maldições sem medo, valorizando tanto sua força quanto sua aparência.",
        nacionality: "Japonês",
        details: "Nobara é uma feiticeira que usa uma técnica única baseada em bonecos de palha e martelos, permitindo que ela ataque as maldições de forma criativa. Ela luta ao lado de Yuji e Megumi.",
        wallpaper: "https://images6.alphacoders.com/113/thumb-1920-1139591.jpg",
        avatar: "https://i.pinimg.com/originals/85/19/67/851967be3b9fcca0670b6850b57904de.jpg"
    },
    {
        name: "Satoru Gojo",
        personality: "Arrogante, brincalhão, mas incrivelmente poderoso e protetor.",
        response: "Usa suas habilidades sobre-humanas para proteger seus alunos e combater maldições com confiança absoluta em sua força.",
        nacionality: "Japonês",
        details: "Gojo é o feiticeiro mais forte da série, mestre em técnicas de barreira e manipulação do espaço-tempo. Ele é professor de Yuji, Megumi e Nobara, e desafia a estrutura do mundo dos feiticeiros.",
        wallpaper: "https://i.pinimg.com/originals/8e/71/58/8e71585181c09cd829f061ec2389bf9e.jpg",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSac0EihZ4qDHvW8-gw42jMLCmQE4Vx5BMrNQ&s"
    },
    {
        name: "Sukuna",
        personality: "Cruel, sádico e implacável.",
        response: "Despreza a humanidade e busca dominar o mundo, usando sua força devastadora para eliminar qualquer um que cruze seu caminho.",
        nacionality: "Desconhecido (Antigo Rei das Maldições)",
        details: "Sukuna, também conhecido como o Rei das Maldições, é uma entidade antiga e extremamente poderosa que reside dentro de Yuji Itadori. Ele está sempre em conflito com Yuji, aguardando o momento certo para tomar o controle total.",
        wallpaper: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRd5nZn0wmv5tztlRYeSFjorNwy8IZP7Y_w&s",
        avatar: "https://i.pinimg.com/736x/78/b4/d4/78b4d40ab57f2d51dd7c23888f086335.jpg"
    }
];







function App() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    async function createCharacters() {
        setLoading(true);
        try {
            for (const character of famousCharacters) {
                const docRef = doc(db, "characters", character.name);
                await setDoc(docRef, character);
                console.log(`${character.name} criado com sucesso!`);
            }
            setLoading(false);
            navigate("/", { state: { createdCharacter: true } });
        } catch (error) {
            console.error("Erro ao criar personagens:", error);
            setLoading(false);
        }
    }

    return (
        <div>
            <button onClick={createCharacters} disabled={loading}>
                {loading ? "Criando personagens..." : "Criar Personagens Famosos"}
            </button>
        </div>
    );
}

export default App;