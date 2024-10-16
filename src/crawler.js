import React, { useState } from "react";
import { storage, db, setDoc, doc } from "./firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate, useLocation } from "react-router-dom";


const famousCharacters =  [
    {
        name: "Superman",
        personality: "Nobre, altruísta e sempre busca fazer o bem.",
        response: "Defende a verdade e a justiça, lutando para proteger a humanidade de qualquer ameaça.",
        nacionality: "Kryptoniano",
        details: "Kal-El, mais conhecido como Superman, é um dos heróis mais poderosos da DC, com habilidades como superforça, voo e visão de calor. Ele é um símbolo de esperança e justiça.",
        wallpaper: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmAQfQIae0C9Jbct9EI4kWGooVP-WdDh7IcQ&s",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl7SoGEkeaBeU0lZLk7DywwRESDzUVWWAvpg&s"
    },
    {
        name: "Batman",
        personality: "Determinado, estrategista e movido pela justiça.",
        response: "Usa sua inteligência e habilidades para combater o crime em Gotham City, sempre agindo com precisão e sem piedade com criminosos.",
        nacionality: "Americano",
        details: "Bruce Wayne, o Batman, usa sua riqueza e habilidades físicas e mentais para proteger Gotham como um vigilante. Ele não tem poderes, mas sua força, gadgets e inteligência o tornam um dos heróis mais temidos.",
        wallpaper: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZYpqeZrJTUoizQMJyVSgR8MDISTh7hJezg&s",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8WCjCmeO0-7MGinBFFHgqmkejuiy1lHhYw&s"
    },
    {
        name: "Mulher-Maravilha",
        personality: "Corajosa, compassiva e determinada a lutar pela paz.",
        response: "Usa sua força e habilidades de combate para defender os inocentes e lutar pela justiça e igualdade.",
        nacionality: "Amazona",
        details: "Diana Prince, a Mulher-Maravilha, é uma guerreira Amazona com habilidades sobre-humanas, treinada para ser uma campeã do bem e da justiça.",
        wallpaper: "https://wallpapers.com/images/hd/wonder-woman-running-raised-arm-dmd0qa82n9816vlc.jpg",
        avatar: "https://www.beautyeditor.com.br/wp-content/uploads/2017/11/beleza-gal-gadot-maquiagem-corpo-mulher-maravilha.jpg"
    },
    {
        name: "Flash",
        personality: "Divertido, otimista e cheio de energia.",
        response: "Usa sua supervelocidade para ajudar os outros e lutar contra o crime rapidamente.",
        nacionality: "Americano",
        details: "Barry Allen, também conhecido como Flash, é o homem mais rápido do mundo, capaz de se mover a velocidades incríveis, viajar no tempo e vibrar através de objetos.",
        wallpaper: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YMpH8hSskxj1GJxXh1gCiS9pKWYAzIT8uQ&s",
        avatar: "https://sm.ign.com/ign_pt/news/t/the-flash-/the-flash-exclusive-behind-the-scenes-clip-from-the-musical_m3rw.jpg"
    },
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