import React, { useState } from "react";

const fetchGeminiResponse = async (message) => {
    const apiKey = "AIzaSyBGP-ZMxkXmo3d76e4pcg9aGbt-PrOSf6w";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

    const data = {
        contents: [
            {
                parts: [
                    {
                        text: message,
                    },
                ],
            },
        ],
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Resposta da API:", result);

        if (result.candidates && result.candidates.length > 0) {
            const aiResponse = result.candidates[0].content.parts[0].text;
            return aiResponse;
        } else {
            throw new Error("Resposta não encontrada na estrutura da API.");
        }
    } catch (error) {
        console.error("Erro ao fazer a requisição:", error);
        return null;
    }
};

export default fetchGeminiResponse;
