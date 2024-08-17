// components/AIChatbox.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AIChatbox() {
    const [userInput, setUserInput] = useState<string>('');
    const [recommendation, setRecommendation] = useState<string>('');
    const [showRecommendation, setShowRecommendation] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
    };

    const handleSend = () => {
        const recommendedSkill = getRecommendation(userInput);
        setRecommendation(recommendedSkill);
        setShowRecommendation(true);
    };

    const getRecommendation = (field: string): string => {
        const lowerCaseField = field.toLowerCase();

        if (lowerCaseField.includes('ba')) {
            return 'For a Bachelor of Arts (BA), consider developing skills in Communication, Critical Thinking, and Research Analysis. Specialize in areas like Creative Writing, Art History, or Philosophy depending on your interests.';
        } else if (lowerCaseField.includes('pa')) {
            return 'For Public Administration (PA), focus on skills such as Policy Analysis, Public Speaking, and Organizational Management. Practical experience in government internships or non-profit organizations can also be valuable.';
        } else {
            return "That's an interesting field! I suggest starting with the fundamentals and then specializing based on your specific interests within the area.";
        }
    };

    return (
        <div className="chatbox-container">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="chatbox"
            >
            <div className="logo-container">
    <img src="/images/logo.png" alt="Logo" className="logo" />
</div>
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="What field do you want to study?"
                    className="chat-input"
                />
                <button onClick={handleSend} className="send-button">Send</button>
            </motion.div>
            {showRecommendation && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="recommendation-popup"
                >
                    <p>Based on your interest in <strong>{userInput}</strong>, we recommend studying:</p>
                    <p className="recommendation">{recommendation}</p>
                </motion.div>
            )}
            <style jsx>{`
                .chatbox-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    background-color: #f4f4f4;
                }
                .chatbox {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 20px;
                    background-color: white;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    border-radius: 10px;
                    width: 100%;
                    max-width: 400px;
                }
                .logo-container {
                    margin-bottom: 20px;
                }
                .logo {
                    width: 100px; /* Adjust the size as needed */
                    height: auto;
                }
                .chat-input {
                    border: 1px solid #ddd;
                    padding: 10px;
                    border-radius: 5px;
                    margin-bottom: 10px; /* Added margin for spacing */
                    width: 100%;
                }
                .send-button {
                    padding: 10px 20px;
                    background-color: #0070f3;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .send-button:hover {
                    background-color: #005bb5;
                }
                .recommendation-popup {
                    margin-top: 20px;
                    padding: 20px;
                    background-color: #0070f3;
                    color: white;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    max-width: 100%;
                }
                .recommendation {
                    font-weight: bold;
                }
            `}</style>
        </div>
    );
}
