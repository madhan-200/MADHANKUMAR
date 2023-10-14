document.addEventListener("DOMContentLoaded", function () {
    const analyzeButton = document.getElementById("analyzeBtn");
    const analysisResult = document.getElementById("analysisResult");

    analyzeButton.addEventListener("click", function () {
        const symptomsInput = document.getElementById("symptoms");
        const userSymptoms = symptomsInput.value.split(",").map(symptom => symptom.trim());
        const lowercaseSymptoms = userSymptoms.map(symptom => symptom.toLowerCase());
        const results = analyzeSymptoms(lowercaseSymptoms);
        displayResults(results);
    });

    function analyzeSymptoms(symptoms) {
        const conditions = {
            "fever": {
                symptom: "Fever",
                condition:"It might be related to a viral infection.,",
                suggestion: "Rest and stay hydrated. If fever persists, consult a doctor."
            },
            "cough": {
                symptom: "Cough",
                condition:"It might be due to a respiratory condition.",
                suggestion: "Drink warm fluids and get plenty of rest. If cough persists, seek medical attention."
            },
            "head pain": {
                symptom: "Head pain",
                condition:"It might be related to a tension headache.",
                suggestion: "Try relaxing in a quiet, dimly lit room. Apply a cold or warm compress to your forehead."
            },
            "leg pain": {
                symptom: "Leg pain",
                condition:"Leg pain can be due to a muscle cramp.",
                suggestion: "Gently stretch and massage the affected leg. Stay hydrated and consider applying a heating pad."
            },
            "fatigue": {
                symptom: "Fatigue",
                condition:"It could be due to various factors, including lack of sleep.",
                suggestion: "Ensure you're getting enough rest and consider incorporating relaxation techniques into your routine."
            },
            "stomach pain": {
                symptom: "Stomach pain",
                condition:"It might be related to gastrointestinal issues.",
                suggestion: "Avoid spicy and fatty foods. Eat smaller, more frequent meals and consider ginger tea for relief."
            },
            "shortness of breath": {
                symptom: "Shortness of breath",
                condition:"It could indicate a lung or cardiovascular problem.",
                suggestion: "Sit down, take slow breaths, and try pursed-lip breathing. If severe, seek medical help."
            },
            "rash": {
                symptom: "Rash",
                condition:"It could be an allergic reaction or skin condition.",
                suggestion: "Avoid scratching. Apply a soothing lotion and consider an over-the-counter antihistamine if itching persists."
            },
            "dizziness": {
                symptom: "Dizziness",
                condition:"It could be due to various factors, including low blood pressure.",
                suggestion: "Sit or lie down immediately and drink fluids. Avoid sudden movements."
            },
            "nausea": {
                symptom: "Nausea",
                condition:"It might be related to digestive issues or pregnancy.",
                suggestion: "Try sipping clear fluids and eating bland foods. Ginger or peppermint tea may help alleviate nausea."
            },
            "back pain": {
                symptom: "Back pain",
                condition:"It could be due to muscle strain or spinal issues.",
                suggestion: "Apply ice or heat and try gentle stretches. If pain persists, consult a healthcare professional."
            },
            "sore throat": {
                symptom: "Sore throat",
                condition:"It might indicate a viral or bacterial infection.",
                suggestion: "Gargle with warm salt water and stay hydrated. Rest your voice and avoid irritants."
            },
            "chest pain": {
                symptom: "Chest pain",
                condition:"It could be related to heart problems or muscle strain.",
                suggestion: "If the pain is severe or accompanied by other symptoms, seek immediate medical attention."
            },
            "constipation": {
                symptom: "Constipation",
                condition:"It might be due to dietary factors or gastrointestinal issues.",
                suggestion: "Increase fiber intake through fruits, vegetables, and whole grains. Stay hydrated."
            },
            "diarrhea": {
                symptom: "Diarrhea",
                condition:"It could be related to food poisoning or gastrointestinal infection.",
                suggestion: "Stay hydrated with clear fluids and follow the BRAT diet (bananas, rice, applesauce, toast)."
            },
            "muscle aches": {
                symptom: "Muscle aches",
                condition:"It might be due to physical exertion or viral infection.",
                suggestion: "Rest and apply a warm compress to soothe sore muscles. Stay hydrated."
            },
            "joint pain": {
                symptom: "Joint pain",
                condition:"It could be related to arthritis or other inflammatory conditions.",
                suggestion: "Gentle stretching, low-impact exercise, and over-the-counter pain relievers may help."
            },
            "difficulty sleeping": {
                symptom: "Difficulty sleeping",
                condition:"It might be related to stress or sleep disorders.",
                suggestion: "Create a calming bedtime routine, limit screen time before bed, and ensure a comfortable sleep environment."
            },
            "swelling": {
                symptom: "Swelling",
                condition:"It could be due to various factors, including injury or inflammation. ",
                suggestion: "Elevate the affected area, apply ice, and rest. If swelling persists or is accompanied by other symptoms, seek medical attention."
            },
            "anxiety": {
                symptom: "Anxiety",
                condition:"It might be related to stress or an anxiety disorder.",
                suggestion: "Practice relaxation techniques, such as deep breathing and mindfulness. Consider seeking support from a mental health professional."
            }
        };

        const analysisResults = symptoms.map(symptom => {
            const normalizedSymptom = symptom.toLowerCase();
            if (conditions.hasOwnProperty(normalizedSymptom)) {
                return {
                    symptom: symptom,
                    condition: conditions[normalizedSymptom].condition,
                    suggestion: conditions[normalizedSymptom].suggestion
                };
            } else {
                return {
                    symptom: symptom,
                    condition: "Unknown",
                    suggestion: "No specific condition information available."
                };
            }
        });
        return analysisResults;
    }

    function displayResults(results) {
        // Clear previous results
        analysisResult.innerHTML = "";

        // Display new results
        results.forEach(result => {
            const resultElement = document.createElement("div");
            resultElement.classList.add("result");

            const symptomElement = document.createElement("p");
            symptomElement.textContent = `Symptom: ${result.symptom}`;
            resultElement.appendChild(symptomElement);

            const conditionElement = document.createElement("p");
            conditionElement.textContent = `Condition: ${result.condition}`;
            resultElement.appendChild(conditionElement);

            const suggestionElement = document.createElement("p");
            suggestionElement.textContent = `Suggestion: ${result.suggestion}`;
            resultElement.appendChild(suggestionElement);

            analysisResult.appendChild(resultElement);
        });
    }
});