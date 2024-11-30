import React, { useState } from "react";

const fetchGeminiResponse = async (message) => {
    const apiKey = "AIzaSyCsQfk3e6Krnr_s9qMSZQDrqOq3WPCQSJw";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    const requestNotificationPermission = async () => {
        if (Notification.permission === "granted") {
            console.log("Permissão já concedida.");
            return true;
        } else if (Notification.permission !== "denied") {
            const permission = await Notification.requestPermission();
            return permission === "granted";
        }
        console.warn("Permissão negada.");
        return false;
    };



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
